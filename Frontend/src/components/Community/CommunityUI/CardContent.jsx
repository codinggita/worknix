import React from "react";
import clsx from "clsx";

export const Card = ({ children, className }) => {
  return (
    <div className={clsx("bg-white shadow-md rounded-lg p-4", className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={clsx("p-4", className)}>{children}</div>;
};
