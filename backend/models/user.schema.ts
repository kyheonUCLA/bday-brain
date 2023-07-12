import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
  name: string
  email: string
  password: string
}

const userSchema: Schema<User> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model<User>('User', userSchema);
