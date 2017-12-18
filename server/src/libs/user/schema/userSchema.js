import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { Type: String },
  dob: { Type: Date },
  createdAt: Date,
});

mongoose.model('user', UserSchema);