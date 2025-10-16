import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected successfully")
    );
    await mongoose.connect(`${process.env.MONGODB_URL}/snapgram`);
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
