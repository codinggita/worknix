// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { LoginForm } from './LoginForm';
// import { SignupForm } from './SignupForm';

// function Auth() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={isLogin ? 'login' : 'signup'}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//         >
//           {isLogin ? <LoginForm /> : <SignupForm />}
//         </motion.div>
//       </AnimatePresence>

//       <motion.button
//         onClick={() => setIsLogin(!isLogin)}
//         className="fixed bottom-4 right-4 bg-[#008080] text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Switch to {isLogin ? 'Signup' : 'Login'}
//       </motion.button>
//     </div>
//   );
// }

// export default Auth;




import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { useAuth } from "../../AuthContext"; // ✅ Fixed import
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useAuth(); // ✅ Get user from context
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "login" : "signup"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"
        >
          {isLogin ? <LoginForm /> : <SignupForm />}
        </motion.div>
      </AnimatePresence>

      <motion.button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 bg-[#008080] text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md transform hover:-translate-y-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Switch to {isLogin ? "Signup" : "Login"}
      </motion.button>
    </div>
  );
}

export default Auth;
