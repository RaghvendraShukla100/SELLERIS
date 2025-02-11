import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const sendVerificationEmail = (email, userId) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Email Verification",
    text: `Please verify your email by clicking on the following link: ${process.env.BASE_URL}/verify-email/${userId}`,
  };

  return transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = (email, token) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset",
    text: `Please reset your password by clicking on the following link: ${process.env.BASE_URL}/reset-password/${token}`,
  };

  return transporter.sendMail(mailOptions);
};
