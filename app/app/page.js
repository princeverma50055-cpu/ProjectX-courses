'use client';
import { motion } from 'framer-motion';

const courses = [
  { id: 1, title: 'AI Automation', desc: 'Build smart AI workflows.', color: 'blue' },
  { id: 2, title: 'Full-Stack Dev', desc: 'Next.js & MongoDB Masterclass.', color: 'purple' },
];

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <motion.div className="text-center my-20" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
        <h1 className="text-6xl font-extrabold mb-6">Learn at the speed of <span className="text-blue-500">Innovation</span></h1>
        <p className="text-slate-400 text-xl">1000+ Premium courses with verified certification.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((c) => (
          <motion.div 
            key={c.id}
            whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
            className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition"
          >
            <h2 className="text-2xl font-bold mb-2">{c.title}</h2>
            <p className="text-slate-400 mb-6">{c.desc}</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition">
              Start Learning
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

