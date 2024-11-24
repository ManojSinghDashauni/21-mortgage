import React from "react";

const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <div>
      <button type={type} className={`${className}`} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
