'use client';
import { motion } from 'framer-motion';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white font-sans">
        <nav className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            PROJECTX COURSES
          </h1>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400 transition">Explore</a>
            <a href="/dashboard" className="hover:text-blue-400 transition">My Learning</a>
          </div>
        </nav>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      </body>
    </html>
  );
}

