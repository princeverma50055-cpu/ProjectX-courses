require('dotenv').config();
const { OpenAI } = require('openai');
const mongoose = require('mongoose');
const Course = require('../models/Course'); // Apne models ka path sahi karein

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateCourse(topic) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: `Generate a structured course on "${topic}" for an LMS. Include title, description, and 5 chapters with detailed text-based content. Return as JSON.` }],
    response_format: { type: "json_object" }
  });

  return JSON.parse(completion.choices[0].message.content);
}

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  const topics = ["AI Automation", "Full Stack Development", "Digital Marketing", "SEO Strategy", "Data Analytics"];
  
  for (const topic of topics) {
    console.log(`Generating course for: ${topic}...`);
    const courseData = await generateCourse(topic);
    await Course.create({ ...courseData, price: Math.random() > 0.2 ? 1999 : 0 });
  }
  console.log("Seeding Complete!");
}

seed();

