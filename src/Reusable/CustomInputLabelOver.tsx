import React, { useEffect, useState, useRef } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { InputTypes } from "../types/types";

const CustomInputLabelOver: React.FC<InputTypes> = ({
  inputValue = "",
  inputLabel,
  inputLabelStyle,
  inputHelperText,
  inputHelperTextStyle,
  inputFieldStyle,
  inputError,
  inputHideOnError,
  inputErrorStyle,
  inputPlaceholder,
  inputId,
  inputName,
  inputRequired,
  inputContainerClassName,
  inputLabelClassName,
  inputHelperTextClassName,
  inputFieldClassName,
  inputErrorClassName,
  inputLabelContainerClassName,
  inputLabelContainerStyle,
  inputLeftIcon,
  inputRightIcon,
  inputOnChange,
  inputstyletype = "text",
  inputRegex,
  inputContainerStyle,
  inputOnValidation,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValueState, setInputValueState] = useState(inputValue);
  const [isValid, setIsValid] = useState(true);

  // Determine if label should be in the active position (top)
  const isLabelActive = isFocused || inputValueState.length > 0;

  // Validate input against regex if provided
  const validateInput = (value: string) => {
    if (!inputRegex) return true;

    try {
      const pattern = new RegExp(inputRegex);
      const valid = pattern.test(value);
      setIsValid(valid);

      if (inputOnValidation) {
        inputOnValidation(valid);
      }

      return valid;
    } catch (e) {
      console.error("Invalid regex pattern:", e);
      return true; // If regex is invalid, don't block the input
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValueState(newValue);

    // Validate against regex
    validateInput(newValue);

    if (inputOnChange) {
      inputOnChange(newValue, isValid);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Validate on blur for better UX
    validateInput(inputValueState);
  };

  // Update internal state when value prop changes
  useEffect(() => {
    setInputValueState(inputValue);
    validateInput(inputValue);
  }, [inputValue, inputRegex]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "560px",
        textAlign: "left",
        ...inputContainerStyle,
      }}
      className={inputContainerClassName}
      id={inputId}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          ...inputLabelStyle,
          color: inputError ? "red" : "black",
        }}
        className={inputLabelClassName}
      >
        {inputLabel}
        {inputRequired && (
          <span style={{ color: "red", marginLeft: "4px" }}>*</span>
        )}
      </div>

      <div
        className={inputLabelContainerClassName}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          border: `1px solid ${
            inputError ? "red" : isFocused ? "blue" : "black"
          }`,

          borderRadius: "5px",
          padding: "4px",
          marginTop: "4px",
          marginBottom: "4px",
          minHeight: "54px",
          ...inputLabelContainerStyle,
        }}
      >
        {/* Left icon */}
        {inputLeftIcon && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "8px",
            }}
          >
            {inputLeftIcon}
          </div>
        )}

        <input
          ref={inputRef}
          name={inputName}
          value={inputValueState}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={inputPlaceholder}
          className={inputFieldClassName}
          style={{
            borderColor: "transparent",
            outline: "none",
            padding: "8px",
            width: "100%",
            fontSize: "16px",
            ...inputFieldStyle,
          }}
          type={inputstyletype}
          {...props}
        />

        {/* Right icon or default Mail icon */}
        {inputRightIcon ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            {inputRightIcon}
          </div>
        ) : (
          <Mail size={20} style={{ color: "#666", marginRight: "8px" }} />
        )}
      </div>
      {(inputError || !isValid) && (
        <div
          style={{
            color: "red",
            fontSize: "14px",
            marginTop: "4px",
            ...inputErrorStyle,
          }}
          className={inputErrorClassName}
        >
          {inputError}
        </div>
      )}
      {inputHelperText &&
        (!inputHideOnError || !inputError ? (
          <div
            className={inputHelperTextClassName}
            style={{ ...inputHelperTextStyle }}
          >
            {inputHelperText}
          </div>
        ) : null)}
    </div>
  );
};

export default CustomInputLabelOver;
