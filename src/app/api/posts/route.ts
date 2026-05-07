import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import { Post } from '@/models/Post';

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    
    // Thêm tính năng phân trang / filter nếu cần
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const fetchAll = searchParams.get('all') === 'true';
    
    let query: any = {};
    if (!fetchAll) {
      query.status = 'published';
    }
    if (category) {
      query.category = category;
    }
    
    const posts = await Post.find(query).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    
    // Validate request
    if (!body.title || !body.category || !body.content) {
      return NextResponse.json({ success: false, error: 'Thiếu thông tin bắt buộc' }, { status: 400 });
    }
    
    const newPost = await Post.create(body);
    
    return NextResponse.json({ success: true, data: newPost }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
