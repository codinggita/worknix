import React from "react";
import clsx from "clsx";

export const Button = ({ children, variant = "default", size = "md", className, ...props }) => {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent hover:bg-gray-200",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2 text-sm rounded-full",
  };

  return (
    <button
      className={clsx(
        "rounded-lg transition font-semibold",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
