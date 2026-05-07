import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/mongodb';
import { User } from '@/models/User';

export async function POST() {
  try {
    await connectToDatabase();

    // Check if users already exist
    const existingAdmin = await User.findOne({ username: 'admin' });
    const existingEditor = await User.findOne({ username: 'editor' });

    const results: string[] = [];

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 12);
      await User.create({
        username: 'admin',
        password: hashedPassword,
        role: 'admin',
        displayName: 'Helios Admin',
      });
      results.push('Admin account created (admin / admin123)');
    } else {
      results.push('Admin account already exists');
    }

    if (!existingEditor) {
      const hashedPassword = await bcrypt.hash('editor123', 12);
      await User.create({
        username: 'editor',
        password: hashedPassword,
        role: 'content',
        displayName: 'Content Editor',
      });
      results.push('Editor account created (editor / editor123)');
    } else {
      results.push('Editor account already exists');
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ success: false, error: 'Failed to seed users' }, { status: 500 });
  }
}
