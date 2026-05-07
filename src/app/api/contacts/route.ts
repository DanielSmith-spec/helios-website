import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import { Contact } from '@/models/Contact';

export async function GET() {
  try {
    await connectToDatabase();
    
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    
    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, error: 'Tên và số điện thoại là bắt buộc' }, { status: 400 });
    }
    
    const newContact = await Contact.create({
      name: body.name,
      phone: body.phone,
      socialLink: body.socialLink || '',
      purpose: body.purpose || 'other',
      message: body.message || '',
      source: body.source || 'contact',
      jobPosition: body.jobPosition || '',
      status: 'new',
    });
    
    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
