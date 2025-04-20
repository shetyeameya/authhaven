import React, { useEffect, useState, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { InputTypes } from "../types/types";

const CustomPasswordInputLabelOver: React.FC<InputTypes> = ({
  inputValue = "",
  inputLabel = "",
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
  inputContainerStyle,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValueState, setInputValueState] = useState(inputValue);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValueState(newValue);

    if (inputOnChange) {
      inputOnChange(newValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Update internal state when value prop changes
  useEffect(() => {
    setInputValueState(inputValue);
  }, [inputValue]);

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
          type={showPassword ? "text" : "password"}
          {...props}
        />

        {/* Right icon if provided */}
        {inputRightIcon && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            {inputRightIcon}
          </div>
        )}

        {/* Password visibility toggle button */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            marginRight: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff size={20} style={{ color: "#666" }} />
          ) : (
            <Eye size={20} style={{ color: "#666" }} />
          )}
        </button>
      </div>
      {inputError && (
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

export default CustomPasswordInputLabelOver;
