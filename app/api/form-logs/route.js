import connectToDatabase from '@/lib/mongodb';
import FormSubmission from '@/lib/models/FormSubmission';
import { NextResponse } from 'next/server';

// Базова аутентифікація для захисту API
async function isAuthenticated(request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }

  // Отримуємо логін та пароль з заголовка
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');

  // Перевіряємо логін та пароль з .env.local
  return username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD;
}

// GET метод для отримання списку логів форм
export async function GET(request) {
  try {
    // Перевіряємо аутентифікацію
    if (!(await isAuthenticated(request))) {
      return NextResponse.json(
        { success: false, message: 'Необхідна аутентифікація' },
        { status: 401, headers: { 'WWW-Authenticate': 'Basic' } }
      );
    }

    await connectToDatabase();
    
    // Отримуємо параметри запиту
    const { searchParams } = new URL(request.url);
    const formType = searchParams.get('formType');
    const status = searchParams.get('status');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    // Створюємо об'єкт запиту для фільтрації
    const query = {};
    if (formType) query.formType = formType;
    if (status) query.status = status;
    
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }
    
    // Налаштовуємо пагінацію
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;
    
    // Отримуємо дані з бази
    const formSubmissions = await FormSubmission
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
      
    const total = await FormSubmission.countDocuments(query);
    
    return NextResponse.json({
      success: true,
      data: {
        formSubmissions,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Помилка при отриманні даних форм:', error);
    return NextResponse.json(
      { success: false, message: 'Помилка при отриманні даних форм' },
      { status: 500 }
    );
  }
}

// POST метод для збереження нових форм
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
