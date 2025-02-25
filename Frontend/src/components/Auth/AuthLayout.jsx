import React from 'react';
import { LogIn, Users, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function AuthLayout({ children, title }) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const features = [
    { icon: <Users size={24} />, text: "Join Our Community" },
    { icon: <Sparkles size={24} />, text: "Exclusive Features" },
    { icon: <TrendingUp size={24} />, text: "Grow Together" }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <motion.div 
        className="w-2/3 bg-white p-8 flex items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md w-full">
          <motion.div 
            className="text-center mb-8"
            {...fadeIn}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600">Welcome to our platform</p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-4 mb-8"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <button className="p-3 rounded-full border hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full border hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-6 h-6" />
            </button>
          </motion.div>

          <motion.div 
            className="relative mb-8"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div 
        className="w-1/3 bg-[#008080] p-8 flex flex-col items-center justify-center text-white relative overflow-hidden"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjAgMGEyMCwyMCAwIDEsMSA0MCAwYTIwLDIwIDAgMSwxIC00MCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')] bg-repeat"></div>
        </div>

        <motion.div 
          className="mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <LogIn size={56} className="stroke-white" />
        </motion.div>

        <motion.h2 
          className="text-3xl font-bold mb-6 text-center"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Discover More
        </motion.h2>

        <div className="space-y-6 w-full max-w-xs">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {feature.icon}
              <span className="text-sm font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}