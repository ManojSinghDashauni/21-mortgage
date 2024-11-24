import React, { useId, forwardRef } from "react";

const Input = (
  { children, label, type = "text", className = "", ...props },
  ref
) => {
  const id = useId();
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className=" my-2 text-sm font-medium text-slate-500"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className} border-slate-500 border-[1px] focus:outline-none py-2 rounded-md`}
        {...props}
        id={id}
        ref={ref}
      />
    </div>
  );
};

export default forwardRef(Input);
