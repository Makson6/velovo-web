import React from "react";

const Button = ({ children, onClick, className = "", ...props }) => {
  const baseStyles = "flex bg-blue bg-opacity-55 hover:bg-blue-700 text-white px-4 py-2 rounded-md";
  return (
    <button style={{textAlign: "center"}} className={`${baseStyles} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
