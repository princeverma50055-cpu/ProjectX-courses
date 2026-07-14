import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Course from '@/models/Course';
import mongoose from 'mongoose';

export async function GET(req, { params }) {
  try {
    await dbConnect();
    
    // params se courseId nikalna
    const { courseId } = await params;

    // MongoDB se course find karna
    const course = await Course.findById(courseId);

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

