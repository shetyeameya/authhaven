import React from "react";
import { TwoFactorVerifyProps } from "../types/types";
import CustomText from "../Reusable/CustomTextBox";
import CustomButton from "../Reusable/CustomButton";
import CustomInputLabelOver from "../Reusable/CustomInputLabelOver";
import DigitInput from "../Reusable/CustomDigitInput";
import CustomInputLabelInternal from "../Reusable/CustomInputLabelInternal";

/**
 * TwoFactorVerify component for verifying a 2FA code
 */
const TwoFactorVerify: React.FC<TwoFactorVerifyProps> = ({
  // Main container props
  mainContainerStyle,
  mainContainerClassName = "",
  logo,
  logoSectionClassName,
  logoStyle,

  // Title props
  title = "2-Factor Authentication Setup",
  titleStyle,
  titleClassName = "",

  // Notification text props
  notificationText = "A verification code has been sent to",
  notificationTextStyle,
  notificationTextClassName = "",

  // Masked destination props (phone/email)
  maskedDestination = "+xxxxxxx649",
  maskedDestinationStyle,
  maskedDestinationClassName = "",

  // Instructions props
  instructionsText = "Please confirm by entering the code below.",
  instructionsTextStyle,
  instructionsTextClassName = "",

  // Verification code field props
  verificationCodeLabel = "Verification Code",
  verificationCodeLabelStyle,
  verificationCodeLabelClassName = "",
  verificationCodeValue = "",
  handleVerificationCodeChange,
  verificationCodeError,

  // Digit input props
  useDigitInput = false,
  digitCount = 4,
  digitInputStyle,
  digitInputClassName = "",
  digitInputContainerStyle,
  digitInputContainerClassName = "",

  // Additional info text props
  additionalInfoText = "We use this code to verify your identity whenever a sign-in attempt is detected from an unrecognized location.",
  additionalInfoTextStyle,
  additionalInfoTextClassName = "",

  // Button props
  continueButtonText = "Continue",
  onContinue = () => {},
  continueButtonStyle,
  continueButtonClassName = "",
  backButtonText = "Back",
  onBack = () => {},
  backButtonStyle,
  backButtonClassName = "",
  buttonsContainerStyle,
  buttonsContainerClassName = "",

  // Button configuration props
  buttonColor = "primary",
  buttonVariant = "solid",
  buttonDisabled = false,
  buttonFullWidth = false,

  // Input props
  labelPosition,
  inputLabel,
  inputPlaceholder = "Enter Code",
  inputHelperText,
  inputContainerStyle,
  inputContainerClassName = "",
  inputLabelStyle,
  inputLabelClassName = "",
  inputFieldStyle,
  inputFieldClassName = "",
  inputErrorStyle,
  inputErrorClassName = "",
  inputHelperTextStyle,
  inputHelperTextClassName = "",
  inputValue,
  inputOnChange,
  inputName,
  inputId,
  inputRequired,
  inputRegex,
  inputError,
  inputRightIcon,
  inputHideOnError,
  inputLabelContainerClassName,
  inputLabelContainerStyle,
  inputLeftIcon,
  inputOnValidation,
  labelMatchBackground,

  // Other props
  ...rest
}) => {
  // Function to determine if the continue button should be disabled
  const isContinueDisabled = () => {
    if (buttonDisabled) return true;
    if (useDigitInput) {
      return verificationCodeValue.length !== digitCount;
    }
    return !verificationCodeValue;
  };

  // Render a field based on its configuration
  const renderField = () => {
    // Standard input props for all field types
    const commonProps = {
      inputLabel,
      inputValue,
      inputOnChange,
      inputstyletype: "text",
      inputName,
      inputId,
      inputRequired,
      inputRegex,
      inputError,
      inputHelperText,
      inputRightIcon,
      inputLabelStyle,
      inputHelperTextStyle,
      inputFieldStyle,
      inputHideOnError,
      inputErrorStyle,
      inputContainerClassName,
      inputLabelClassName,
      inputHelperTextClassName,
      inputFieldClassName,
      inputErrorClassName,
      inputLabelContainerClassName,
      inputLabelContainerStyle,
      inputLeftIcon,
      inputOnValidation,
      inputPlaceholder,
      inputContainerStyle,
      labelMatchBackground,
      ...rest,
    };

    // For all other field types
    return labelPosition === "internal" ? (
      <CustomInputLabelInternal key={inputLabel} {...commonProps} />
    ) : (
      <CustomInputLabelOver key={inputLabel} {...commonProps} />
    );
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
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "24px",
          color: "#333333",
          ...titleStyle,
        }}
        textClassName={titleClassName}
      />

      {/* Notification and Masked Destination */}
      <div style={{ marginBottom: "8px" }}>
        <CustomText
          text={notificationText}
          textStyle={{
            fontSize: "16px",
            color: "#666666",
            display: "inline",
            ...notificationTextStyle,
          }}
          textClassName={notificationTextClassName}
        />{" "}
        <CustomText
          as="span"
          text={maskedDestination}
          textStyle={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#333333",
            display: "inline",
            ...maskedDestinationStyle,
          }}
          textClassName={maskedDestinationClassName}
        />
        <CustomText
          text="."
          textStyle={{
            fontSize: "16px",
            color: "#666666",
          }}
        />
      </div>

      {/* Instructions */}
      <CustomText
        text={instructionsText}
        textStyle={{
          fontSize: "16px",
          color: "#666666",
          marginBottom: "24px",
          ...instructionsTextStyle,
        }}
        textClassName={instructionsTextClassName}
      />

      {/* Verification Code Input */}
      <div style={{ marginBottom: "24px" }}>
        <CustomText
          as="h2"
          text={verificationCodeLabel}
          textStyle={{
            display: "block",
            fontSize: "16px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "8px",
            ...verificationCodeLabelStyle,
          }}
          textClassName={verificationCodeLabelClassName}
        />
        {useDigitInput ? (
          /* Digit Input for verification code */
          <DigitInput
            digitCount={digitCount}
            value={verificationCodeValue}
            onChange={handleVerificationCodeChange}
            digitStyle={digitInputStyle}
            digitClassName={digitInputClassName}
            containerStyle={digitInputContainerStyle}
            containerClassName={digitInputContainerClassName}
            error={!!verificationCodeError}
            errorMessage={verificationCodeError}
          />
        ) : (
          /* Standard input for verification code */
          renderField()
        )}{" "}
      </div>

      {/* Additional Info Text */}
      {additionalInfoText && (
        <CustomText
          text={additionalInfoText}
          textStyle={{
            fontSize: "14px",
            color: "#6B7280",
            marginBottom: "30px",
            ...additionalInfoTextStyle,
          }}
          textClassName={additionalInfoTextClassName}
        />
      )}

      {/* Buttons Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
          ...buttonsContainerStyle,
        }}
        className={buttonsContainerClassName}
      >
        {/* Back Button */}
        <CustomButton
          buttonChildren={backButtonText}
          buttonVariant="outline"
          buttonColor="light"
          buttonOnClick={onBack}
          buttonStyle={{
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: "500",
            ...backButtonStyle,
          }}
          buttonClassName={backButtonClassName}
        />

        {/* Continue Button */}
        <CustomButton
          buttonChildren={continueButtonText}
          buttonVariant={buttonVariant}
          buttonColor={buttonColor}
          buttonDisabled={isContinueDisabled()}
          buttonOnClick={onContinue}
          buttonStyle={{
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: "500",
            ...continueButtonStyle,
          }}
          buttonClassName={continueButtonClassName}
          {...rest}
        />
      </div>
    </div>
  );
};

export default TwoFactorVerify;
