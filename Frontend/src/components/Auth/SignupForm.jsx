// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff, Check, X } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function SignupForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const passwordStrength = {
//     length: formData.password.length >= 8,
//     number: /\d/.test(formData.password),
//     special: /[!@#$%^&*]/.test(formData.password),
//     capital: /[A-Z]/.test(formData.password),
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     if (formData.password !== formData.confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             password: formData.password,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Signup successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
//         navigate("/home"); // Redirect user after successful signup
//       } else {
//         setErrorMessage(data.message || "Signup failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error signing up:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2";

//   return (
//     <AuthLayout title="Create Account">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className={inputClasses}
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
//           <input
//             type="email"
//             placeholder="Email Address"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="space-y-2">
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className={inputClasses}
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           <div className="grid grid-cols-2 gap-2 text-sm">
//             {Object.entries(passwordStrength).map(([key, valid]) => (
//               <div key={key} className={`flex items-center gap-2 ${valid ? "text-green-600" : "text-gray-400"}`}>
//                 {valid ? <Check size={16} className="text-green-600" /> : <X size={16} className="text-gray-400" />}
//                 {key === "length" && "8+ characters"}
//                 {key === "number" && "Number"}
//                 {key === "special" && "Special char"}
//                 {key === "capital" && "Capital letter"}
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="relative">
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             placeholder="Confirm Password"
//             className={`${inputClasses} ${
//               formData.confirmPassword &&
//               (formData.password === formData.confirmPassword
//                 ? "border-green-500 focus:ring-green-500"
//                 : "border-red-500 focus:ring-red-500")
//             }`}
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.4 }}
//         >
//           {isLoading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Create Account"}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff, Check, X } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function SignupForm() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const passwordStrength = {
//     length: formData.password.length >= 8,
//     number: /\d/.test(formData.password),
//     special: /[!@#$%^&*]/.test(formData.password),
//     capital: /[A-Z]/.test(formData.password),
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     if (formData.password !== formData.confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: formData.username,
//             email: formData.email,
//             password: formData.password,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Signup successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
//         navigate("/home"); // Redirect user after successful signup
//       } else {
//         setErrorMessage(data.message || "Signup failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error signing up:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2";

//   return (
//     <AuthLayout title="Create Account">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//           <input
//             type="text"
//             placeholder="Username"
//             className={inputClasses}
//             value={formData.username}
//             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
//           <input
//             type="email"
//             placeholder="Email Address"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="space-y-2">
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className={inputClasses}
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           <div className="relative">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               className={inputClasses}
//               value={formData.confirmPassword}
//               onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//             >
//               {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.4 }}
//         >
//           {isLoading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Create Account"}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function SignupForm() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     if (formData.password !== formData.confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: formData.username,
//             email: formData.email,
//             password: formData.password,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Signup successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
//         if (data.username && data.email) {
//           sessionStorage.setItem("username", data.username);
//           sessionStorage.setItem("email", data.email);
//         }
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Signup failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error signing up:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Create Account">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 bg-red-100 p-2 rounded-md">
//             {errorMessage}
//           </motion.div>
//         )}

//         <input type="text" placeholder="Username" className="input" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />

//         <input type="email" placeholder="Email Address" className="input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

//         <div className="relative">
//           <input type={showPassword ? "text" : "password"} placeholder="Password" className="input" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
//           <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-icon">
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </div>

//         <div className="relative">
//           <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="input" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} required />
//           <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eye-icon">
//             {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </div>

//         <motion.button type="submit" className="button" disabled={isLoading} whileTap={{ scale: 0.98 }}>
//           {isLoading ? <div className="loader"></div> : "Create Account"}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { useNavigate } from "react-router-dom";

export function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://worknix-lgin-and-signup.onrender.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        if (data.username && data.email) {
          sessionStorage.setItem("username", data.username);
          sessionStorage.setItem("email", data.email);
        }
        navigate("/home");
      } else {
        setErrorMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error signing up:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
  const buttonClasses =
    "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-6">
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 bg-red-100 p-2 rounded-md"
          >
            {errorMessage}
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <input
            type="text"
            placeholder="Username"
            className={inputClasses}
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <input
            type="email"
            placeholder="Email Address"
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={inputClasses}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className={inputClasses}
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </motion.div>

        <motion.button
          type="submit"
          className={buttonClasses}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Create Account"
          )}
        </motion.button>
      </form>
    </AuthLayout>
  );
}
