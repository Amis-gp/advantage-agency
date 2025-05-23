import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';
import { FormLog } from '@/app/models/FormLog';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();
    
    const { name, email, phone, purpose } = body;
    
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Обов\'язкові поля відсутні' },
        { status: 400 }
      );
    }
    
    const formLog = await FormLog.create({
      name,
      email,
      phone,
      purpose: purpose || '',
      status: 'pending'
    });
    
    return NextResponse.json(
      { success: true, formLog },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Помилка при збереженні форми:', error);
    return NextResponse.json(
      { error: 'Сталася помилка при збереженні форми' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const formLogs = await FormLog.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(
      { success: true, formLogs },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Помилка при отриманні форм:', error);
    return NextResponse.json(
      { error: 'Сталася помилка при отриманні форм' },
      { status: 500 }
    );
  }
}
