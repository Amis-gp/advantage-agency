import connectToDatabase from '@/lib/mongodb';
import FormSubmission from '@/lib/models/FormSubmission';
import { NextResponse } from 'next/server';

export async function PUT(request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    
    if (!data.id || !data.status) {
      return NextResponse.json(
        { success: false, message: 'Відсутні обов\'язкові поля' },
        { status: 400 }
      );
    }

    const formSubmission = await FormSubmission.findByIdAndUpdate(
      data.id,
      { status: data.status },
      { new: true }
    );

    if (!formSubmission) {
      return NextResponse.json(
        { success: false, message: 'Запис не знайдено' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Статус оновлено', formSubmission },
      { status: 200 }
    );
  } catch (error) {
    console.error('Помилка при оновленні статусу:', error);
    return NextResponse.json(
      { success: false, message: 'Помилка при оновленні статусу' },
      { status: 500 }
    );
  }
}
