import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "../src/config/db.config.js";

const imageFields = ["profilePicture", "coverPicture"];

try {
  await connectDB();
  const users = mongoose.connection.db.collection("users");

  for (const field of imageFields) {
    const result = await users.updateMany(
      { [field]: { $type: "string" } },
      [{ $set: { [field]: { url: `$${field}`, publicId: "" } } }],
    );
    console.log(`${field}: migrated ${result.modifiedCount} user record(s).`);
  }
} catch (error) {
  console.error("Profile image migration failed:", error.message);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
