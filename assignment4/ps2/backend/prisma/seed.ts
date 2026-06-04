import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = 'student@example.com';
  const password = 'password123';
  const password_hash = await bcrypt.hash(password, 10);

  const student = await prisma.student.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password_hash,
      full_name: 'Dummy Student',
    },
  });

  console.log('Seeded student:', student.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
