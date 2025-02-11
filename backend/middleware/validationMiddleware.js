// backend/middleware/validationMiddleware.js
import { body, validationResult } from "express-validator";

// Common validation rules
const commonValidationRules = {
  firstName: body("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .trim()
    .escape(),
  lastName: body("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .trim()
    .escape(),
  email: body("email").isEmail().withMessage("Invalid email").normalizeEmail(),
  password: body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number")
    .matches(/[!@#$%^&*]/)
    .withMessage("Password must contain at least one special character"),
  phone: body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone()
    .withMessage("Invalid phone number"),
  businessName: body("businessName")
    .notEmpty()
    .withMessage("Business name is required")
    .trim()
    .escape(),
};

// Validation for user registration (businessName not required)
export const validateRegistration = [
  commonValidationRules.firstName,
  commonValidationRules.lastName,
  commonValidationRules.email,
  commonValidationRules.password,
  commonValidationRules.phone,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation for seller creation (businessName required)
export const validateSellerCreation = [
  commonValidationRules.firstName,
  commonValidationRules.lastName,
  commonValidationRules.email,
  commonValidationRules.password,
  commonValidationRules.phone,
  commonValidationRules.businessName,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation for seller update
export const validateSellerUpdate = [
  body("firstName").optional().trim().escape(),
  body("lastName").optional().trim().escape(),
  body("email").optional().isEmail().normalizeEmail(),
  body("password")
    .optional()
    .isLength({ min: 6 })
    .matches(/[A-Z]/)
    .matches(/[0-9]/)
    .matches(/[!@#$%^&*]/),
  body("phone").optional().isMobilePhone(),
  body("businessName").optional().trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation for login
export const validateLogin = [
  body("email").isEmail().withMessage("Invalid email").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
