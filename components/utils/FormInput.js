export const FormElement = (props) => {
  const { label, errormessage, id, as, error, ...inputProps } = props;
  
  const handleFocused = () => {

  };

  return (
    <div>
      <label>
        <p>{label}</p>
        {as === "textarea" ? (
          <textarea
            key={id}
            {...inputProps}
            focused={error.toString()}
            onBlur={handleFocused}
            errormessage={errormessage}
          />
        ) : (
          <input
            key={id}
            {...inputProps}
            focused={error.toString()}
            onBlur={handleFocused}
            errormessage={errormessage}
          />
        )}
        <span>{errormessage}</span>
      </label>
    </div>
  );
};
