import mongoose, { Connection } from "mongoose";

let isAlreadyConnnected: Connection | boolean = false;

const connectDB = async () => {

  if (isAlreadyConnnected) {
    console.log("Database is already connected.");
    return isAlreadyConnnected;
  }

  try {

    const res = await mongoose.connect(process.env.MONGO_URI!);
    isAlreadyConnnected = res.connection;
    console.log("Database is connected successfully.");
    return isAlreadyConnnected;

  } catch (error) {

    console.log(error);

  }
};
export default connectDB;