import React, { useState, useRef, useEffect } from "react";
import { DigitInputProps } from "../types/types";

const DigitInput: React.FC<DigitInputProps> = ({
  digitCount = 4,
  value = "",
  onChange,
  digitStyle,
  digitClassName = "",
  containerStyle,
  containerClassName = "",
  digitPlaceholder = "",
  error = false,
  errorMessage = "",
  errorStyle,
  errorClassName = "",
  disabled = false,
  onComplete,
}) => {
  // Create an array of refs for the input elements
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, digitCount);
  }, [digitCount]);

  // Split the value into an array of characters
  const valueArray = value.split("").slice(0, digitCount);

  // Handle input change
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newChar = e.target.value.slice(-1);
    if (!/^\d*$/.test(newChar) && newChar !== "") return; // Only allow digits

    const newValue = [...valueArray];
    newValue[index] = newChar;

    // Clean up the array and join to string
    const updatedValue = newValue.join("");
    onChange(updatedValue);

    // Move focus to next input if we entered a digit
    if (newChar !== "" && index < digitCount - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all digits are filled
    if (updatedValue.length === digitCount && onComplete) {
      onComplete(updatedValue);
    }
  };

  // Handle key press
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // If backspace is pressed and input is empty, focus previous input
    if (e.key === "Backspace" && !valueArray[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // If ArrowLeft is pressed, focus previous input
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // If ArrowRight is pressed, focus next input
    if (e.key === "ArrowRight" && index < digitCount - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const digits = pastedData.replace(/\D/g, "").slice(0, digitCount);

    if (digits.length > 0) {
      onChange(digits);

      // If we pasted enough digits to fill the input, focus the last digit
      if (digits.length === digitCount) {
        inputRefs.current[digitCount - 1]?.focus();
        if (onComplete) {
          onComplete(digits);
        }
      } else {
        // Otherwise focus the next empty space
        inputRefs.current[digits.length]?.focus();
      }
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          ...containerStyle,
        }}
        className={containerClassName}
      >
        {Array.from({ length: digitCount }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={valueArray[index] || ""}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            placeholder={digitPlaceholder}
            style={{
              width: "50px",
              height: "60px",
              fontSize: "24px",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              outline: "none",
              boxShadow: error ? "0 0 0 2px rgba(220, 38, 38, 0.2)" : "none",
              borderColor: error ? "#dc2626" : undefined,
              ...digitStyle,
            }}
            className={digitClassName}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
          />
        ))}
      </div>
      {error && errorMessage && (
        <div
          style={{
            color: "#dc2626",
            fontSize: "14px",
            marginTop: "8px",
            textAlign: "center",
            ...errorStyle,
          }}
          className={errorClassName}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default DigitInput;
