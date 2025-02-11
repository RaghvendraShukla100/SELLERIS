import React, { useState } from "react";
import axios from "axios";

const RegisterSeller = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    profilePicture: "",
    businessName: "",
    businessDescription: "",
    businessLogo: "",
    businessAddress: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      isDefault: false,
    },
    taxIdentificationNumber: "",
    businessRegistrationNumber: "",
    bankDetails: {
      accountHolderName: "",
      accountNumber: "",
      bankName: "",
      ifscCode: "",
      branchName: "",
    },
    preferences: {
      newsletterSubscription: false,
      notificationPreferences: {
        email: true,
        sms: true,
      },
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  // Handle address changes
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      businessAddress: {
        ...prev.businessAddress,
        [name]: value,
      },
    }));
  };

  // Handle bank details changes
  const handleBankDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      bankDetails: {
        ...prev.bankDetails,
        [name]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Log the form data for debugging
    console.log("Form Data Submitted:", formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/sellers/register", // Ensure this endpoint matches the backend route
        formData
      );

      alert("Registration successful!");
      console.log("Response Data:", response.data);
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        // Request made and server responded
        console.error("Error Data:", error);
        console.error("Error Status:", error.response.data.errors);
        setError(
          error?.response?.data?.errors[0] ||
            "Registration failed. Please try again."
        );
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        setError("No response from server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error Message:", error.message);
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Seller Registration
        </h2>

        {/* Personal Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Personal Details</h3>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            placeholder="Profile Picture URL"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Business Details */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Business Details</h3>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="businessDescription"
            value={formData.businessDescription}
            onChange={handleChange}
            placeholder="Business Description"
            rows="3"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="businessLogo"
            value={formData.businessLogo}
            onChange={handleChange}
            placeholder="Business Logo URL"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="taxIdentificationNumber"
            value={formData.taxIdentificationNumber}
            onChange={handleChange}
            placeholder="Tax Identification Number"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="businessRegistrationNumber"
            value={formData.businessRegistrationNumber}
            onChange={handleChange}
            placeholder="Business Registration Number"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Business Address */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Business Address</h3>
          <input
            type="text"
            name="street"
            value={formData.businessAddress.street}
            onChange={handleAddressChange}
            placeholder="Street"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="city"
            value={formData.businessAddress.city}
            onChange={handleAddressChange}
            placeholder="City"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="state"
            value={formData.businessAddress.state}
            onChange={handleAddressChange}
            placeholder="State"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="postalCode"
            value={formData.businessAddress.postalCode}
            onChange={handleAddressChange}
            placeholder="Postal Code"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="country"
            value={formData.businessAddress.country}
            onChange={handleAddressChange}
            placeholder="Country"
            className="w-full p-2 border rounded"
            required
          />
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.businessAddress.isDefault}
              onChange={handleAddressChange}
              className="mr-2"
            />
            Default Address
          </label>
        </div>

        {/* Bank Details */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Bank Details</h3>
          <input
            type="text"
            name="accountHolderName"
            value={formData.bankDetails.accountHolderName}
            onChange={handleBankDetailsChange}
            placeholder="Account Holder Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="accountNumber"
            value={formData.bankDetails.accountNumber}
            onChange={handleBankDetailsChange}
            placeholder="Account Number"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="bankName"
            value={formData.bankDetails.bankName}
            onChange={handleBankDetailsChange}
            placeholder="Bank Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="ifscCode"
            value={formData.bankDetails.ifscCode}
            onChange={handleBankDetailsChange}
            placeholder="IFSC Code"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="branchName"
            value={formData.bankDetails.branchName}
            onChange={handleBankDetailsChange}
            placeholder="Branch Name"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Preferences */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Preferences</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="preferences.newsletterSubscription"
              checked={formData.preferences.newsletterSubscription}
              onChange={handleChange}
              className="mr-2"
            />
            Subscribe to Newsletter
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="preferences.notificationPreferences.email"
              checked={formData.preferences.notificationPreferences.email}
              onChange={handleChange}
              className="mr-2"
            />
            Receive Email Notifications
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="preferences.notificationPreferences.sms"
              checked={formData.preferences.notificationPreferences.sms}
              onChange={handleChange}
              className="mr-2"
            />
            Receive SMS Notifications
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </button>

        {/* Error Message */}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterSeller;
