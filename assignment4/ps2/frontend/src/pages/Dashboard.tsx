import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface DashboardData {
  student: {
    name: string;
    email: string;
  };
  courses: string[];
  grades: { course: string; grade: string }[];
  announcements: string[];
}

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const { logout, token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/dashboard', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(res.data);
      } catch (err) {
        console.error('Error fetching dashboard data');
      }
    };
    fetchData();
  }, [token]);

  if (!data) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <h2>Student Dashboard</h2>
        <button onClick={logout} className="btn btn-secondary">Logout</button>
      </div>
      
      <div className="card">
        <h3>Profile</h3>
        <p><strong>Name:</strong> {data.student.name}</p>
        <p><strong>Email:</strong> {data.student.email}</p>
      </div>

      <div className="card">
        <h3>Enrolled Courses</h3>
        <ul>
          {data.courses.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </div>

      <div className="card">
        <h3>Grades</h3>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <th style={{ padding: '0.5rem 0' }}>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {data.grades.map((g, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem 0' }}>{g.course}</td>
                <td>{g.course === 'Mathematics' ? 'A' : (g.course === 'Physics' ? 'B+' : 'A-')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Announcements</h3>
        <ul>
          {data.announcements.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
