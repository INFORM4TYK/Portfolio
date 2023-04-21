import { useState } from "react";
export const FormElement = (props) => {
  const { label, errormessage,id,as, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  }
  return (
    <div>
    <label>
      {label}
      {as === "textarea" ? (
        <textarea
          key={id}
          {...inputProps}
          focused={focused.toString()}
          onBlur={handleFocus}
          errormessage={errormessage}
        />
      ) : (
        <input
          key={id}
          {...inputProps}
          focused={focused.toString()}
          onBlur={handleFocus}
          errormessage={errormessage}
        />
      )}
    <span>{errormessage}</span>
    </label>
    </div>
   
  );
};
