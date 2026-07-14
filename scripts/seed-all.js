// Is script ko apne computer par node scripts/seed-all.js karke run karein
const topics = ["AI", "Web Development", "Data Science", "Marketing", "Cyber Security", "Finance"];
const categories = ["Beginner", "Advanced", "Professional"];

async function generateAndSave() {
  for(let i = 1; i <= 1000; i++) {
    const course = {
      title: `${topics[i % topics.length]} Masterclass ${i}`,
      description: "Deep text-based learning module.",
      price: i % 5 === 0 ? 0 : 1999, // 200 free, 800 paid
      isFree: i % 5 === 0,
      category: categories[i % categories.length],
      chapters: [
        { title: "Introduction", content: "Detailed explanation of the topic..." },
        { title: "Core Concepts", content: "In-depth theory and examples..." }
      ]
    };
    // Fetch request to your database to insert course
    console.log(`Generating Course ${i}...`);
    // await saveToMongoDB(course); 
  }
}

