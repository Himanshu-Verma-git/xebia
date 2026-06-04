import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';

export const register = async (req: Request, res: Response) => {
  const { full_name, email, password } = req.body;
  try {
    const existingUser = await prisma.student.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    const password_hash = await bcrypt.hash(password, 10);
    await prisma.student.create({
      data: { full_name, email, password_hash }
    });
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.student.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'supersecret', { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const me = async (req: Request, res: Response) => {
  try {
    const user = await prisma.student.findUnique({ where: { id: (req as any).user.id } });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ full_name: user.full_name, email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
