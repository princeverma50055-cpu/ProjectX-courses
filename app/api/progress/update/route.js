import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Progress from '@/models/Progress';

export async function POST(req) {
  await dbConnect();
  const { userId, courseId, chapterIndex } = await req.json();

  // Logic: Calculate current progress based on chapters completed
  // Update in DB. If progress >= 80, set certificateUnlocked = true
  const updatedProgress = await Progress.findOneAndUpdate(
    { userId, courseId },
    { $addToSet: { completedChapters: chapterIndex } },
    { upsert: true, new: true }
  );

  return NextResponse.json({ message: 'Progress updated', updatedProgress });
}
