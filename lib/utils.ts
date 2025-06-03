/**
 * Утиліти для роботи з URL, метаданими та іншими загальними функціями
 */

/**
 * Створює абсолютний URL на основі відносного шляху
 * @param path Відносний шлях (з або без початкового слешу)
 * @returns Абсолютний URL для сайту
 */
export function absoluteUrl(path: string): string {
  // Базовий URL сайту (змініть на ваш домен для продакшн)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.advantage-agency.co';
  
  // Переконуємося, що шлях починається зі слешу
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Форматує дату для метаданих у форматі ISO
 * @param date Об'єкт дати або рядок дати
 * @returns ISO форматована дата
 */
export function formatDateForMeta(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString();
}

/**
 * Створює структуру метаданих для Open Graph зображення
 * @param imageUrl URL зображення
 * @param alt Альтернативний текст для зображення
 * @param width Ширина зображення (за замовчуванням 1200)
 * @param height Висота зображення (за замовчуванням 630)
 * @returns Об'єкт метаданих зображення для Open Graph
 */
export function createOgImage(imageUrl: string, alt: string, width = 1200, height = 630) {
  return {
    url: imageUrl,
    width,
    height,
    alt,
  };
}
