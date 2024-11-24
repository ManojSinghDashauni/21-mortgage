import React, { useId } from "react";

const Select = React.forwardRef(function (
  { options, label, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select {...props} id={id} ref={ref} className={`${className}`}>
        {options?.map((option, index) => {
          <option key={index} value={option}>
            {option}
          </option>;
        })}
      </select>
    </div>
  );
});

export default Select;
