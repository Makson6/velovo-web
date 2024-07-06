import React from "react";


const Button = ({ title, onClick, className = "" }) => {
  return (
    <button
      className={`bg-slate-800 hover:bg-slate-700 font-semibold px-6 h-10 rounded-md ${className} text-gray-50`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
