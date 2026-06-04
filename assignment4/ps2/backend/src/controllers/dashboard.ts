import { Request, Response } from 'express';
import prisma from '../prisma';

export const getDashboard = async (req: Request, res: Response) => {
  try {
    const user = await prisma.student.findUnique({ where: { id: (req as any).user.id } });
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    res.json({
      student: { name: user.full_name, email: user.email },
      courses: ['Mathematics', 'Physics', 'Computer Science'],
      grades: [
        { course: 'Mathematics', grade: 'A' },
        { course: 'Physics', grade: 'B+' },
        { course: 'Computer Science', grade: 'A-' }
      ],
      announcements: [
        'Midterm exam next week.',
        'Assignment submission deadline Friday.',
        'New course materials uploaded.'
      ]
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
