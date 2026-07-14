import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Course from '@/models/Course';

const dummyCourses = [
  {
    title: "Mastering AI & Prompt Engineering",
    description: "Learn how to use AI tools, write advanced prompts, and automate workflows.",
    price: 0,
    isFree: true,
    category: "Artificial Intelligence",
    chapters: [
      {
        title: "Chapter 1: The Basics of LLMs",
        content: "Large Language Models (LLMs) are AI systems trained on massive amounts of text data... [Detailed text continues here. In a real course, this would be a 2000-word deep explanation]."
      },
      {
        title: "Chapter 2: Advanced Prompting Techniques",
        content: "To get the best results, use context, constraints, and clear formatting in your prompts. For example: Act as an expert copywriter... [Detailed examples and text]."
      }
    ]
  },
  {
    title: "Full-Stack Web Development 2026",
    description: "Complete guide to Next.js, React, and MongoDB database architecture.",
    price: 1499,
    isFree: false,
    category: "Web Development",
    chapters: [
      {
        title: "Chapter 1: Next.js App Router",
        content: "The App Router introduces a new paradigm for building React applications, utilizing Server Components by default for optimal performance..."
      },
      {
        title: "Chapter 2: Database Models with Mongoose",
        content: "Mongoose provides a straight-forward, schema-based solution to model your application data with built-in type casting, validation, and query building..."
      }
    ]
  },
  {
    title: "Digital Marketing & SEO Mastery",
    description: "Rank your websites on Google and build a strong brand presence online.",
    price: 999,
    isFree: false,
    category: "Marketing",
    chapters: [
      {
        title: "Chapter 1: On-Page SEO Fundamentals",
        content: "On-page SEO involves optimizing individual web pages in order to rank higher and earn more relevant traffic in search engines. Key factors include Title Tags, Meta Descriptions, and keyword density..."
      }
    ]
  }
];

export async function GET() {
  try {
    await dbConnect();
    
    // Clear existing courses to prevent duplicates during testing
    await Course.deleteMany({});
    
    // Insert new dummy courses
    await Course.insertMany(dummyCourses);
    
    return NextResponse.json({ message: 'Database Seeded Successfully! 3 Premium Courses added.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Seeding failed', details: error.message }, { status: 500 });
  }
}
