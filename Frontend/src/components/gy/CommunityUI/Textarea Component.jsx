import React from "react";
import clsx from "clsx";

export const Textarea = ({ placeholder, className, ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={clsx(
        "w-full resize-none border p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
};
