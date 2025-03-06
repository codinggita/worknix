import React, { useState } from 'react';
import { AuthLayout } from './AuthLayout';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthLayout 
      title={isLogin ? "Log In" : "Sign Up"} 
      toggleAuth={() => setIsLogin(!isLogin)} 
      isLogin={isLogin}
    >
      {isLogin ? <LoginForm /> : <SignupForm />}
    </AuthLayout>
  );
}

function LoginForm() {
  return (
    <form className="space-y-4">
      <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
      <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
      <button className="w-full bg-[#008080] text-white py-2 rounded-lg">Log In</button>
    </form>
  );
}

function SignupForm() {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md" />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
      <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
      <button className="w-full bg-[#008080] text-white py-2 rounded-lg">Sign Up</button>
    </form>
  );
}
