import mongoose, { Schema, models } from 'mongoose';

export interface IFormLog {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  status: 'pending' | 'sent' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

const formLogSchema = new Schema<IFormLog>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    purpose: { type: String, default: '' },
    status: { 
      type: String, 
      enum: ['pending', 'sent', 'failed'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

export const FormLog = models.FormLog || mongoose.model<IFormLog>('FormLog', formLogSchema);
