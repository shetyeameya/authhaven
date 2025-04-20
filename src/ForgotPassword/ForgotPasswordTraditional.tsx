import React from "react";
import { ForgotPasswordTraditionalProps } from "../types/types";
import CustomTextBox from "../Reusable/CustomTextBox";
import CustomButton from "../Reusable/CustomButton";
import CustomInputLabelOver from "../Reusable/CustomInputLabelOver";
import CustomInputLabelInternal from "../Reusable/CustomPasswordInternal";

/**
 * Traditional forgot password component with email input
 */
const ForgotPasswordTraditional: React.FC<ForgotPasswordTraditionalProps> = ({
  // Main container props
  mainContainerStyle,
  mainContainerClassName = "",

  // Title props
  title = "Forgot your password?",
  titleStyle,
  titleClassName = "",

  // Description props
  descriptionText = "A code will be sent to your email to help reset password",
  descriptionStyle,
  descriptionClassName = "",

  // Form container props
  formContainerStyle,
  formContainerClassName = "",

  // Email input props
  emailInputLabel = "Email Address",
  emailInputValue = "",
  handleEmailChange,
  labelPosition = "over",
  emailInputError,
  emailInputHelperText,
  emailInputPlaceholder = "Enter your email address",

  // Reset button props
  onResetPassword = () => {},
  resetButtonText = "Reset password",
  resetButtonStyle,
  resetButtonClassName = "",

  // Back to login props
  backToLoginText = "Back to login",
  onBackToLogin = () => {},
  backToLoginStyle,
  backToLoginClassName = "",

  // Cancel button props
  cancelButtonText = "Cancel",
  onCancel = () => {},
  cancelButtonStyle,
  cancelButtonClassName = "",

  // Button props
  buttonColor = "primary",
  buttonVariant = "solid",
  buttonDisabled = false,
  buttonFullWidth = true,

  // Custom input props for passing to input components
  inputLeftIcon,
  inputRightIcon,
  inputContainerClassName = "",
  inputContainerStyle,
  inputLabelClassName = "",
  inputLabelStyle,
  inputFieldClassName = "",
  inputFieldStyle,
  inputErrorClassName = "",
  inputErrorStyle,
  inputHelperTextClassName = "",
  inputHelperTextStyle,

  // Other props
  ...rest
}) => {
  // Email validation regex
  const emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

  // Input props for reuse
  const inputProps = {
    inputLabel: emailInputLabel,
    inputValue: emailInputValue,
    inputOnChange: handleEmailChange,
    inputError: emailInputError,
    inputHelperText: emailInputHelperText,
    inputPlaceholder: emailInputPlaceholder,
    inputLeftIcon,
    inputRightIcon,
    inputContainerClassName,
    inputContainerStyle,
    inputLabelClassName,
    inputLabelStyle,
    inputFieldClassName,
    inputFieldStyle,
    inputErrorClassName,
    inputErrorStyle,
    inputHelperTextClassName,
    inputHelperTextStyle,
    inputRegex: emailRegex,
    inputstyletype: "email",
    inputRequired: true,
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "24px",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        ...mainContainerStyle,
      }}
      className={mainContainerClassName}
    >
      {/* Title */}
      <CustomTextBox
        as="h1"
        text={title}
        textStyle={{
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "12px",
          color: "#333333",
          ...titleStyle,
        }}
        textClassName={titleClassName}
      />

      {/* Description */}
      <CustomTextBox
        text={descriptionText}
        textStyle={{
          fontSize: "16px",
          textAlign: "center",
          marginBottom: "24px",
          color: "#666666",
          ...descriptionStyle,
        }}
        textClassName={descriptionClassName}
      />

      {/* Form Container */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          ...formContainerStyle,
        }}
        className={formContainerClassName}
        onSubmit={(e) => {
          e.preventDefault();
          onResetPassword();
        }}
      >
        {/* Email Input - Render based on label position */}
        {labelPosition === "over" ? (
          <CustomInputLabelOver {...inputProps} />
        ) : (
          <CustomInputLabelInternal {...inputProps} />
        )}

        {/* Reset Button */}
        <CustomButton
          buttonChildren={resetButtonText}
          buttonColor={buttonColor}
          buttonVariant={buttonVariant}
          buttonFullWidth={buttonFullWidth}
          buttonDisabled={!emailInputValue || buttonDisabled}
          buttonOnClick={onResetPassword}
          type="submit"
          buttonStyle={{
            padding: "12px",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "8px",
            ...resetButtonStyle,
          }}
          buttonClassName={resetButtonClassName}
          {...rest}
        />

        {/* Cancel Button */}
        <CustomButton
          buttonChildren={cancelButtonText}
          buttonColor="light"
          buttonVariant="ghost"
          buttonFullWidth={buttonFullWidth}
          buttonOnClick={onCancel}
          buttonStyle={{
            padding: "12px",
            fontSize: "16px",
            fontWeight: "600",
            ...cancelButtonStyle,
          }}
          buttonClassName={cancelButtonClassName}
        />

        {/* Back to Login Link */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          <CustomTextBox
            as="span"
            text={backToLoginText}
            textStyle={{
              color: "#3B82F6",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              ...backToLoginStyle,
            }}
            textClassName={backToLoginClassName}
            onClick={onBackToLogin}
          />
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordTraditional;
