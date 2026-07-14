import mongoose from 'mongoose';

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  completedChapters: [{ type: String }], // Chapter IDs jo complete ho chuke hain
  percentage: { type: Number, default: 0 },
  certificateUnlocked: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now }
});

// Calculate percent trigger before saving
ProgressSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Progress || mongoose.model('Progress', ProgressSchema);

