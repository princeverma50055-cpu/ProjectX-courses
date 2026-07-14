'use client';
import { useState, useEffect } from 'react';

export default function LearnPage({ params }) {
  const { courseId } = params;
  const [course, setCourse] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    // MongoDB se specific course aur uske chapters fetch karna
    fetch(`/api/courses/${courseId}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [courseId]);

  const markComplete = async () => {
    // API call to update progress in MongoDB
    await fetch('/api/progress/update', {
      method: 'POST',
      body: JSON.stringify({ courseId, chapterIndex: currentChapter }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (currentChapter < course.chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    } else {
      alert("Course completed! Check dashboard for your certificate.");
    }
  };

  if (!course) return <p>Loading course content...</p>;

  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{course.title}</h1>
      <div style={{ background: '#1e293b', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <h2>{course.chapters[currentChapter].title}</h2>
        <p style={{ lineHeight: '1.8' }}>{course.chapters[currentChapter].content}</p>
      </div>
      
      <button 
        onClick={markComplete}
        style={{ marginTop: '20px', padding: '15px 30px', backgroundColor: '#0066ff', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer' }}
      >
        {currentChapter === course.chapters.length - 1 ? "Finish Course" : "Mark as Complete & Next"}
      </button>
    </main>
  );
}
