import React, { useState } from "react";
import axios from "axios";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    profilePicture: "",
    addresses: [
      {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        isDefault: false,
      },
    ],
    paymentMethods: [
      {
        cardNumber: "",
        cardHolderName: "",
        expirationDate: "",
        cvv: "",
        isDefault: false,
      },
    ],
    preferences: {
      newsletterSubscription: false,
      theme: "light",
    },
  });

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

  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index][name] = value;
    setFormData((prev) => ({
      ...prev,
      addresses: updatedAddresses,
    }));
  };

  const handlePaymentMethodChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPaymentMethods = [...formData.paymentMethods];
    updatedPaymentMethods[index][name] = value;
    setFormData((prev) => ({
      ...prev,
      paymentMethods: updatedPaymentMethods,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        formData
      );
      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          User Registration
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

        {/* Address */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Address</h3>
          {formData.addresses.map((address, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={(e) => handleAddressChange(index, e)}
                placeholder="Street"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={(e) => handleAddressChange(index, e)}
                placeholder="City"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={(e) => handleAddressChange(index, e)}
                placeholder="State"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="postalCode"
                value={address.postalCode}
                onChange={(e) => handleAddressChange(index, e)}
                placeholder="Postal Code"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="country"
                value={address.country}
                onChange={(e) => handleAddressChange(index, e)}
                placeholder="Country"
                className="w-full p-2 border rounded"
                required
              />
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={address.isDefault}
                  onChange={(e) => handleAddressChange(index, e)}
                  className="mr-2"
                />
                Default Address
              </label>
            </div>
          ))}
        </div>

        {/* Payment Method */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Payment Method</h3>
          {formData.paymentMethods.map((paymentMethod, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                name="cardNumber"
                value={paymentMethod.cardNumber}
                onChange={(e) => handlePaymentMethodChange(index, e)}
                placeholder="Card Number"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="cardHolderName"
                value={paymentMethod.cardHolderName}
                onChange={(e) => handlePaymentMethodChange(index, e)}
                placeholder="Card Holder Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="expirationDate"
                value={paymentMethod.expirationDate}
                onChange={(e) => handlePaymentMethodChange(index, e)}
                placeholder="Expiration Date (MM/YY)"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="cvv"
                value={paymentMethod.cvv}
                onChange={(e) => handlePaymentMethodChange(index, e)}
                placeholder="CVV"
                className="w-full p-2 border rounded"
                required
              />
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={paymentMethod.isDefault}
                  onChange={(e) => handlePaymentMethodChange(index, e)}
                  className="mr-2"
                />
                Default Payment Method
              </label>
            </div>
          ))}
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
          <select
            name="preferences.theme"
            value={formData.preferences.theme}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
