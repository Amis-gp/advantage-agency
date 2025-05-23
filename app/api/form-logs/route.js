import connectToDatabase from '@/lib/mongodb';
import FormSubmission from '@/lib/models/FormSubmission';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    
    if (!data.formType || !data.data) {
      return NextResponse.json(
        { success: false, message: 'Відсутні обов\'язкові поля' },
        { status: 400 }
      );
    }

    const formSubmission = new FormSubmission({
      formType: data.formType,
      data: data.data,
      status: data.status || 'pending'
    });

    await formSubmission.save();

    return NextResponse.json(
      { success: true, message: 'Дані форми збережено', id: formSubmission._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Помилка при збереженні форми:', error);
    return NextResponse.json(
      { success: false, message: 'Помилка при збереженні форми' },
      { status: 500 }
    );
  }
}
