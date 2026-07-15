'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CourseViewer() {
  const [progress, setProgress] = useState(40); // 40% demo

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6">
        <h2 className="text-sm uppercase text-slate-500 font-bold mb-4">Course Progress</h2>
        <div className="h-2 bg-slate-800 rounded-full mb-6 overflow-hidden">
          <motion.div className="h-full bg-blue-500" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
        </div>
        <p className="text-sm">{progress}% Complete</p>
      </aside>

      {/* Content Area */}
      <section className="flex-1 p-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-4xl font-bold mb-6">Chapter: Understanding AI</h1>
          <div className="prose prose-invert max-w-none text-slate-300 leading-8">
            <p>Yahan aapka deep text course content aayega. Coursera ki tarah hum isse blocks mein divide karenge...</p>
          </div>
          <button 
            onClick={() => setProgress(prev => prev + 20)}
            className="mt-10 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition"
          >
            Mark as Complete
          </button>
        </motion.div>
      </section>
    </div>
  );
}
