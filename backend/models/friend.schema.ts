import mongoose, { Schema, Document } from 'mongoose';

interface Friend extends Document {
  name: string
  email: string
  password: string
}

const friendSchema: Schema<Friend> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model<Friend>('Friend', friendSchema)
