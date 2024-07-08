import mongoose, { Schema, Document } from "mongoose";

//types
interface Note {
  title: string;
  content: string;
}

interface NoteBook {
  notebookName: string;
  notes: Note[];
}

interface User extends Document {
  email: string;
  password: string;
  notes: Note[];
  notebooks: NoteBook[];
  isVerified:boolean
  resetPasswordToken: string;
  resetPasswordExpire: string;
  createdAt: Date;
}

//schemas
const notesSchema: Schema<Note> = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const notebookSchema: Schema<NoteBook> = new Schema({
  notebookName: {
    type: String,
    required: true,
  },
  notes: [notesSchema],
});

const userSchema: Schema<User> = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes: [notesSchema],
  notebooks: [notebookSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});

const userModel =
  (mongoose.models.Users as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);
export default userModel;
