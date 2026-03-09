import mongoose from "mongoose";

// FIX: Converted require() → import
// FIX: Corrected DATABASE_URI spelling

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.DATABASE_URI);

    console.log("✅ MongoDB Connected Successfully");

  } catch (error) {

    console.error("❌ MongoDB connection error:", error.message);

    process.exit(1);

  }
};

export default connectDB; // FIX: module.exports → export default