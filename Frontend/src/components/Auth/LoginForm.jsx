// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
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

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
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

// export function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
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

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
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

// export function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           sessionStorage.setItem("token", data.token);
//         }
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && <motion.div className="text-red-600 bg-red-100 p-2 rounded-md">{errorMessage}</motion.div>}
//         <input type="email" placeholder="Email" className="input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
//         <div className="relative">
//           <input type={showPassword ? "text" : "password"} placeholder="Password" className="input" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
//           <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </div>
//         <motion.button type="submit" className="btn" disabled={isLoading}>{isLoading ? <div className="loader"></div> : "Login"}</motion.button>
//       </form>
//     </AuthLayout>
//   );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           sessionStorage.setItem("token", data.token);
//         }
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
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

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
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

// export function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           sessionStorage.setItem("token", data.token);
//           console.log("Token stored:", sessionStorage.getItem("token")); // Debugging
//           setTimeout(() => navigate("/home"), 300); // Small delay before navigating
//         }
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
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

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
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

// export function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log("✅ Login successful:", data);

//         if (data.token) {
//           sessionStorage.setItem("token", data.token);
//           console.log("✅ Token stored:", sessionStorage.getItem("token"));

//           // 🚀 Force Navigation with Refresh
//           navigate("/home", { replace: true });
//           setTimeout(() => {
//             window.location.reload();
//           }, 500);
//         }
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("❌ Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 bg-red-100 p-2 rounded-md">
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
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

// export function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           sessionStorage.setItem("username", data.user.username); // Store username
//         }
//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
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

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }




// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext"; // Import the context

// export function LoginForm() {
//   const { setUsername } = useContext(UserContext); // Access setUsername from context
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("username", data.user.username); // Store username
//           setUsername(data.user.username); // Set the username in the context
//         }
//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
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

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }


import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext"; // Import the context

function LoginForm() {
  const { setUsername } = useContext(UserContext); // Access setUsername from context
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://worknix-lgin-and-signup.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.user.username); // Store username
          setUsername(data.user.username); // Set the username in the context
        }
        navigate("/home"); // Redirect user after login
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error logging in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
  const buttonClasses =
    "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

  return (
    <AuthLayout title="Welcome Back">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <input
            type="email"
            placeholder="Email or Mobile Number"
            className={inputClasses}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative"
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={inputClasses}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a
            href="#"
            className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
          >
            Forgot Password?
          </a>
        </motion.div>

        <motion.button
          type="submit"
          className={buttonClasses}
          disabled={isLoading}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Login"
          )}
        </motion.button>
      </form>
    </AuthLayout>
  );
}

export default LoginForm;  // Default export here
