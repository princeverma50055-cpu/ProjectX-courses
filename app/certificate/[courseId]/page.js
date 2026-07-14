'use client';
export default function CertificatePage({ params }) {
  // Yahan hum user ka naam aur course name fetch karenge
  return (
    <div style={{ width: '800px', height: '600px', border: '20px solid #0066ff', margin: 'auto', padding: '50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px' }}>Certificate of Achievement</h1>
      <p>This is to certify that the student has successfully completed the course.</p>
      <h2 style={{ color: '#0066ff' }}>{/* Course Name */}</h2>
      <div style={{ marginTop: '100px' }}>
        <p style={{ fontSize: '24px', fontFamily: 'cursive' }}>Prince Verma</p>
        <p>Founder, ProjectX Hub</p>
      </div>
    </div>
  );
}
