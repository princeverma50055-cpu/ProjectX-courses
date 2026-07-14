'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    // API se courses fetch karenge
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <main style={{ padding: '40px', backgroundColor: '#0a0f1d', minHeight: '100vh', color: '#fff' }}>
      <h1>My Learning Dashboard</h1>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {courses.map(course => (
          <div key={course._id} style={{ border: '1px solid #1e293b', padding: '20px', borderRadius: '10px' }}>
            <h3>{course.title}</h3>
            
            {/* Progress Bar Logic */}
            <div style={{ width: '100%', backgroundColor: '#1e293b', height: '10px', borderRadius: '5px', margin: '10px 0' }}>
              <div style={{ width: `${progress[course._id] || 0}%`, backgroundColor: '#0066ff', height: '100%', borderRadius: '5px' }}></div>
            </div>
            <p>{progress[course._id] || 0}% Completed</p>

            {/* Certificate Button (Only enabled at 80%) */}
            {(progress[course._id] || 0) >= 80 ? (
              <button style={{ backgroundColor: '#4ade80', padding: '10px', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
                Download Certificate
              </button>
            ) : (
              <button style={{ backgroundColor: '#0066ff', padding: '10px', border: 'none', borderRadius: '5px' }}>
                Continue Learning
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
