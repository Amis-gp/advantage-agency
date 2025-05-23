import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';
import { FormLog } from '@/app/models/FormLog';

export async function PATCH(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();
    
    const { id, status } = body;
    
    if (!id || !status || !['pending', 'sent', 'failed'].includes(status)) {
      return NextResponse.json(
        { error: 'Неправильний ID або статус' },
        { status: 400 }
      );
    }
    
    const formLog = await FormLog.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!formLog) {
      return NextResponse.json(
        { error: 'Форма не знайдена' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { success: true, formLog },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Помилка при оновленні статусу форми:', error);
    return NextResponse.json(
      { error: 'Сталася помилка при оновленні статусу форми' },
      { status: 500 }
    );
  }
}
