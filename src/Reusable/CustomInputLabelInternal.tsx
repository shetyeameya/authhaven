import React, { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { InputTypes } from "../types/types";

const CustomInputLabelInternal: React.FC<InputTypes> = ({
  inputLabel,
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
  inputstyletype = "text",
  inputRegex,
  inputOnValidation,
  inputPlaceholder,
  inputContainerStyle,
  labelMatchBackground,
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
    const valid = validateInput(newValue);

    if (inputOnChange) {
      inputOnChange(newValue, valid);
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
          className={inputFieldClassName}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingTop: isLabelActive ? "4px" : "0",
            minHeight: "54px",
            ...inputFieldStyle,
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
            placeholder={!inputLabel ? inputPlaceholder : ""}
            style={{
              borderColor: "transparent",
              outline: "none",
              padding: "8px",
              width: "100%",
              fontSize: "16px",
            }}
            type={inputstyletype}
            {...props}
          />

          {/* Right icon or default Mail icon */}
          {!inputLeftIcon ? (
            inputRightIcon ? (
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
              <Mail size={20} style={{ marginRight: "12px" }} />
            )
          ) : (
            ""
          )}
        </div>
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

export default CustomInputLabelInternal;
