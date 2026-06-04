# Minimal Student Management System

## Project Overview
A complete, production-like but minimal Student Management System. This is a small web application designed to support Student Registration, Student Login, and a Student Dashboard. 

## Features
- **Student Registration:** Students can register with Full Name, Email, and Password. Email addresses are unique and passwords are mathematically hashed.
- **Student Login:** JWT-based secure authentication.
- **Student Dashboard:** Protected routes allowing students to view their profile, dummy enrolled courses, dummy grades, and announcements.

## Tech Stack
- **Frontend:** React, Vite, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Infrastructure:** Docker, Docker Compose, Nginx

## Architecture

```text
Browser
  |
  v
Nginx (Port 80)
  |   |
  v   v
Frontend  Backend
  |
  v
PostgreSQL
```

## Folder Structure
- `/frontend`: Contains the Vite-based React application.
- `/backend`: Contains the Node.js Express backend API.
  - `src/controllers`: Handlers for API endpoints.
  - `src/routes`: API route definitions.
  - `src/middleware`: Custom middleware such as JWT verification.
  - `src/prisma`: Database schema and ORM client logic.
- `/nginx`: Contains Nginx reverse proxy configuration.

## Local Development
1. Clone the repository.
2. Ensure you have Node.js and npm installed.
3. CD into the `frontend` directory and run `npm install`, then `npm run dev` to start the frontend.
4. CD into the `backend` directory and run `npm install`. Provide `.env` based on `.env.example`.
5. Run `npx prisma db push` (or `migrate dev`) in the backend to set up the DB, and run `npm run dev` to start the backend.

## Docker Deployment
Ensure Docker and Docker Compose are installed.

To spin up the entire application stack:
```bash
docker compose up --build
```
To shut down the application:
```bash
docker compose down
```
Access the application by navigating to `http://localhost`. 

## Database
The database uses PostgreSQL and the schema is managed via Prisma. 
- **Table `students`**:
  - `id` (Primary Key)
  - `full_name`
  - `email` (Unique)
  - `password_hash`
  - `created_at`

## Seed Data
On deployment, you can seed the database with the default credentials:
- **Email:** student@example.com
- **Password:** password123

## API Documentation
- `POST /api/auth/register`: Register a new student account.
- `POST /api/auth/login`: Authenticate and receive a JWT.
- `GET /api/auth/me`: Retrieve current logged in user context.
- `GET /api/dashboard`: Retrieve dashboard data for the authenticated student.

## Security Notes
- Passwords are encrypted using `bcrypt`.
- Authentication relies on secure JWT tokens.
- Sensitive credentials like the database URL and JWT secret are decoupled using Environment Variables.

## Future Improvements
- Course CRUD operations.
- Admin role and capabilities.
- Attendance tracking.
- System notifications.
- Profile editing.

## Screenshots Section
*(Screenshots will be placed here)*

## License
MIT
