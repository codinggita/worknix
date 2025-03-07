import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "https://worknix-reset-password.onrender.com/api/password-reset/reset-password/:token",
        { email }
      );
      setMessage(res.data.message);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to send reset link. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="w-full bg-[#008080] text-white py-2 rounded-lg hover:bg-teal-700 transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="text-green-600 text-center mt-2">{message}</p>}
        {error && <p className="text-red-600 text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
