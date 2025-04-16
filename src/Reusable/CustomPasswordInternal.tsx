import React, { useState, useRef, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { InputTypes } from "../types/types";

const CustomPasswordInput: React.FC<InputTypes> = ({
  inputLabel = "",
  inputLabelStyle,
  inputHelperText,
  inputHelperTextStyle,
  inputFieldStyle,
  inputError,
  inputHideOnError,
  inputErrorStyle,
  inputValue = "",
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
  inputPlaceholder,
  labelMatchBackground,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValueState, setInputValueState] = useState(inputValue);
  const [showPassword, setShowPassword] = useState(false);
  console.log("inputHideOnError", inputHideOnError);
  // Determine if label should be in the active position (top)
  const isLabelActive = isFocused || inputValueState.length > 0;

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
        marginBottom: "10px",
        ...inputContainerStyle,
      }}
      className={inputContainerClassName}
      id={inputId}
    >
      <div
        className={inputLabelContainerClassName}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "flex-start",
          border: `1px solid ${
            inputError ? "red" : isFocused ? "blue" : "black"
          }`,

          borderRadius: "5px",
          padding: "4px",
          marginTop: "4px",
          marginBottom: "4px",
          ...inputLabelContainerStyle,
          position: "relative",
        }}
      >
        {/* Label with animated positioning */}
        <div
          style={{
            position: "absolute",
            top: isLabelActive ? "-10px" : "20px",
            left: isLabelActive ? "12px" : inputLeftIcon ? "38px" : "15px",
            fontSize: isLabelActive ? "14px" : "17px",
            transition: "all 0.2s ease-in-out",
            backgroundColor: isLabelActive
              ? labelMatchBackground
                ? labelMatchBackground
                : "white"
              : "transparent",
            padding: isLabelActive ? "0 4px " : "0",
            zIndex: 1,
            color: inputError ? "red" : "black",

            ...inputLabelStyle,
          }}
          className={inputLabelClassName}
        >
          {inputLabel}
          {inputRequired && (
            <span style={{ color: "red", marginLeft: "2px" }}>*</span>
          )}
        </div>

        <div
          className={inputLabelContainerClassName}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingTop: isLabelActive ? "4px" : "0",
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
            placeholder={!inputLabel ? inputPlaceholder : ""}
            {...props}
          />

          {/* Right icon */}
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
              marginRight: "8px",
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

export default CustomPasswordInput;
