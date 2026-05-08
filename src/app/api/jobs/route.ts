import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import { JobStatus } from '@/models/JobStatus';

// Default job definitions — used for seeding
const DEFAULT_JOBS = [
  { jobId: 'livestream', title: 'Livestream Talent / Idol', isActive: true },
  { jobId: 'editor', title: 'Video Editor / Quay Dựng', isActive: true },
  { jobId: 'manager', title: 'Talent Manager', isActive: true },
  { jobId: 'setup', title: 'Chuyên Viên Setup Studio', isActive: false },
  { jobId: 'creator', title: 'Content Creator / Kịch bản', isActive: true },
];

export async function GET() {
  try {
    await connectToDatabase();

    let statuses = await JobStatus.find({}).lean();

    // Auto-seed if collection is empty
    if (statuses.length === 0) {
      await JobStatus.insertMany(DEFAULT_JOBS);
      statuses = await JobStatus.find({}).lean();
    }

    // Convert to a simple map: { livestream: true, editor: true, ... }
    const statusMap: Record<string, boolean> = {};
    statuses.forEach((s: any) => {
      statusMap[s.jobId] = s.isActive;
    });

    return NextResponse.json({ success: true, data: statusMap, list: statuses });
  } catch (error) {
    console.error('Error fetching job statuses:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
