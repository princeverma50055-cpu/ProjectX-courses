import mongoose from 'mongoose';

const ChapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true } // Pura long text format tutorial content yahan rahega
});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  isFree: { type: Boolean, default: false },
  category: { type: String, required: true }, // AI, Web Dev, Marketing, etc.
  chapters: [ChapterSchema]
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
