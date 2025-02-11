import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

// Admin Schema
const adminSchema = new Schema(
  {
    // Personal Details
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ }, // Simple email validation
    password: { type: String, required: true },
    phone: { type: String, match: /^[0-9]{10,15}$/ }, // Match for 10 to 15 digits
    dateOfBirth: { type: Date },
    profilePicture: { type: String }, // URL to the admin's profile picture

    // Role and Permissions
    role: { type: String, enum: ["superadmin", "admin"], default: "admin" }, // Role of the admin
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

// Middleware to hash the password before saving
adminSchema.pre("save", async function (next) {
  const admin = this;
  if (admin.isModified("password")) {
    try {
      admin.password = await bcrypt.hash(admin.password, 8);
    } catch (error) {
      return next(error); // Pass error to the next middleware
    }
  }
  next();
});

// Method to check password
adminSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
