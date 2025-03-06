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

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "signup"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {isLogin ? <LoginForm /> : <SignupForm />}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 w-full bg-[#008080] text-white py-2 rounded-lg hover:bg-teal-700 transition-all"
        >
          {isLogin ? "Switch to Signup" : "Switch to Login"}
        </button>
      </div>
    </div>
  );
}

export default Auth;
