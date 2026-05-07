import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  phone: string;
  socialLink: string;
  purpose: 'talent' | 'booking' | 'other';
  message?: string;
  source: 'contact' | 'recruitment';
  jobPosition?: string;
  status: 'new' | 'contacted' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    socialLink: { type: String, default: '' },
    purpose: { type: String, enum: ['talent', 'booking', 'other'], default: 'other' },
    message: { type: String, default: '' },
    source: { type: String, enum: ['contact', 'recruitment'], default: 'contact' },
    jobPosition: { type: String, default: '' },
    status: { type: String, enum: ['new', 'contacted', 'archived'], default: 'new' },
  },
  { timestamps: true }
);

export const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
