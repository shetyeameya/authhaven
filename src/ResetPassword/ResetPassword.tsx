import React from "react";
import { ResetPasswordProps } from "../types/types";
import CustomText from "../Reusable/CustomTextBox";
import CustomButton from "../Reusable/CustomButton";
import CustomInputLabelOver from "../Reusable/CustomInputLabelOver";
import CustomInputLabelInternal from "../Reusable/CustomInputLabelInternal";
import CustomPasswordInputLabelOver from "../Reusable/CustomPasswordOver";
import { CustomPasswordInternal } from "..";
import CustomPasswordInput from "../Reusable/CustomPasswordInternal";

/**
 * ResetPassword component for setting a new password
 */
const ResetPassword: React.FC<ResetPasswordProps> = ({
  // Main container props
  mainContainerStyle,
  mainContainerClassName = "",
  logo,
  logoSectionClassName,
  logoStyle,

  // Title props
  title = "Set new password",
  titleStyle,
  titleClassName = "",

  // Description props
  descriptionText = "Your new password must be different to previously used passwords.",
  descriptionStyle,
  descriptionClassName = "",

  // Form container props
  formContainerStyle,
  formContainerClassName = "",

  // Password input props
  passwordInputLabel = "Password",
  passwordInputValue = "",
  handlePasswordChange,
  labelPosition = "over",
  passwordInputError,
  passwordInputHelperText = "Must be at least 8 characters.",
  passwordInputPlaceholder = "••••••••",
  passwordInputContainerStyle,
  passwordInputContainerClassName = "",

  // Confirm password input props
  confirmPasswordInputLabel = "Confirm password",
  confirmPasswordInputValue = "",
  handleConfirmPasswordChange,
  confirmPasswordInputError,
  confirmPasswordInputHelperText,
  confirmPasswordInputPlaceholder = "••••••••",
  confirmPasswordInputContainerStyle,
  confirmPasswordInputContainerClassName = "",

  // Reset button props
  onResetPassword = () => {},
  resetButtonText = "Reset password",
  resetButtonStyle,
  resetButtonClassName = "",

  // Back to login props
  backToLoginText = "Back to log in",
  onBackToLogin = () => {},
  backToLoginStyle,
  backToLoginClassName = "",

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
  // Shared input props for reuse
  const passwordInputProps = {
    inputLabel: passwordInputLabel,
    inputValue: passwordInputValue,
    inputOnChange: handlePasswordChange,
    inputError: passwordInputError,
    inputHelperText: passwordInputHelperText,
    inputPlaceholder: passwordInputPlaceholder,
    inputLeftIcon,
    inputRightIcon,
    inputContainerClassName,
    inputContainerStyle: {
      ...inputContainerStyle,
      ...passwordInputContainerStyle,
    },
    inputLabelClassName,
    inputLabelStyle,
    inputFieldClassName,
    inputFieldStyle,
    inputErrorClassName,
    inputErrorStyle,
    inputHelperTextClassName,
    inputHelperTextStyle,
    inputstyletype: "password",
    inputRequired: true,
  };

  const confirmPasswordInputProps = {
    inputLabel: confirmPasswordInputLabel,
    inputValue: confirmPasswordInputValue,
    inputOnChange: handleConfirmPasswordChange,
    inputError: confirmPasswordInputError,
    inputHelperText: confirmPasswordInputHelperText,
    inputPlaceholder: confirmPasswordInputPlaceholder,
    inputLeftIcon,
    inputRightIcon,
    inputContainerClassName,
    inputContainerStyle: {
      ...inputContainerStyle,
      ...confirmPasswordInputContainerStyle,
    },
    inputLabelClassName,
    inputLabelStyle,
    inputFieldClassName,
    inputFieldStyle,
    inputErrorClassName,
    inputErrorStyle,
    inputHelperTextClassName,
    inputHelperTextStyle,
    inputstyletype: "password",
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
        height: "fit-content",
        ...mainContainerStyle,
      }}
      className={mainContainerClassName}
    >
      {/* Logo Section */}
      {logo && (
        <div
          className={logoSectionClassName}
          style={{
            ...logoStyle,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "12px 0",
            margin: "12px 0",
          }}
        >
          {logo}
        </div>
      )}

      {/* Title */}
      <CustomText
        as="h1"
        text={title}
        textStyle={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "8px",
          color: "#333333",
          ...titleStyle,
        }}
        textClassName={titleClassName}
      />

      {/* Description */}
      <CustomText
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
          gap: "16px",
          ...formContainerStyle,
        }}
        className={formContainerClassName}
        onSubmit={(e) => {
          e.preventDefault();
          onResetPassword();
        }}
      >
        {/* Password Input - Render based on label position */}
        <div
          style={passwordInputContainerStyle}
          className={passwordInputContainerClassName}
        >
          {labelPosition === "over" ? (
            <CustomPasswordInputLabelOver {...passwordInputProps} />
          ) : (
            <CustomPasswordInput {...passwordInputProps} />
          )}
        </div>

        {/* Confirm Password Input - Render based on label position */}
        <div
          style={confirmPasswordInputContainerStyle}
          className={confirmPasswordInputContainerClassName}
        >
          {labelPosition === "over" ? (
            <CustomPasswordInputLabelOver {...confirmPasswordInputProps} />
          ) : (
            <CustomPasswordInput {...confirmPasswordInputProps} />
          )}
        </div>

        {/* Reset Button */}
        <CustomButton
          buttonChildren={resetButtonText}
          buttonVariant={buttonVariant}
          buttonColor={buttonColor}
          buttonFullWidth={buttonFullWidth}
          buttonDisabled={
            !passwordInputValue || !confirmPasswordInputValue || buttonDisabled
          }
          buttonOnClick={onResetPassword}
          type="submit"
          buttonStyle={{
            padding: "12px",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "8px",
            backgroundColor: "orange",
            ...resetButtonStyle,
          }}
          buttonClassName={resetButtonClassName}
          {...rest}
        />

        {/* Back to Login Link */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <CustomText
            as="span"
            text={backToLoginText}
            textStyle={{
              color: "#6B7280",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              ...backToLoginStyle,
            }}
            textClassName={backToLoginClassName}
            onClick={onBackToLogin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "8px" }}
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {backToLoginText}
          </CustomText>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
