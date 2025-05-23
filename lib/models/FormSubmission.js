import mongoose from 'mongoose';

// Перевірка, чи вже існує модель, щоб уникнути перевизначення під час гарячого перезавантаження
const FormSubmissionSchema = new mongoose.Schema({
  formType: {
    type: String,
    required: true,
    enum: ['contact', 'qualification', 'affiliate', 'affiliate2', 'formspree']
  },
  data: {
    type: Object,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'sent', 'failed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.FormSubmission || mongoose.model('FormSubmission', FormSubmissionSchema);
