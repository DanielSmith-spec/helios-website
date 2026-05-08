import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IJobStatus extends Document {
  jobId: string;
  title: string;
  isActive: boolean;
  updatedAt: Date;
}

const JobStatusSchema: Schema = new Schema(
  {
    jobId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const JobStatus: Model<IJobStatus> = mongoose.models.JobStatus || mongoose.model<IJobStatus>('JobStatus', JobStatusSchema);
