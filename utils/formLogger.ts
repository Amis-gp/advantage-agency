/**
 * Утиліта для логування даних форм у MongoDB
 */

// Тип результату операції логування
export interface FormLogResult {
  success: boolean;
  message: string;
  id?: string;
  formSubmission?: any;
}

/**
 * Зберігає дані форми в MongoDB
 * @param formType - Тип форми ('contact', 'qualification', 'affiliate', 'affiliate2', 'formspree')
 * @param formData - Дані форми для збереження
 * @param status - Статус відправки (за замовчуванням 'pending')
 * @returns Результат операції з ідентифікатором запису
 */
export const logFormSubmission = async (
  formType: 'contact' | 'qualification' | 'affiliate' | 'affiliate2' | 'formspree', 
  formData: any, 
  status: 'pending' | 'sent' | 'failed' = 'pending'
): Promise<FormLogResult> => {
  try {
    const response = await fetch('/api/form-logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType,
        data: formData,
        status
      }),
    });

    const result = await response.json();
    return result as FormLogResult;
  } catch (error) {
    console.error('Помилка при логуванні форми:', error);
    return { success: false, message: 'Помилка при логуванні форми' };
  }
};

/**
 * Оновлює статус відправки форми
 * @param id - ID запису форми
 * @param status - Новий статус ('sent', 'failed')
 * @returns Результат операції
 */
export const updateFormStatus = async (
  id: string, 
  status: 'pending' | 'sent' | 'failed'
): Promise<FormLogResult> => {
  try {
    const response = await fetch('/api/form-logs/update-status', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        status
      }),
    });

    const result = await response.json();
    return result as FormLogResult;
  } catch (error) {
    console.error('Помилка при оновленні статусу форми:', error);
    return { success: false, message: 'Помилка при оновленні статусу форми' };
  }
};
