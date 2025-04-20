import React from "react";
import { TwoFactorSetupProps } from "../types/types";
import CustomText from "../Reusable/CustomTextBox";
import CustomButton from "../Reusable/CustomButton";

/**
 * TwoFactorSetup component allows users to choose their preferred 2FA method
 */
const TwoFactorSetup: React.FC<TwoFactorSetupProps> = ({
  // Main container props
  mainContainerStyle,
  mainContainerClassName = "",

  // Title props
  title = "2-Factor Authentication Setup",
  titleStyle,
  titleClassName = "",

  // Subtitle props
  subtitleText = "How would you like to receive your authentication codes?",
  subtitleStyle,
  subtitleClassName = "",

  // Options container props
  optionsContainerStyle,
  optionsContainerClassName = "",

  // Authentication method props
  selectedMethod = null,
  onMethodSelect = () => {},

  // App option props
  appOptionTitle = "Authentication App",
  appOptionDescription = "Use an app like Authy or Google Authenticator to generate your authentication code.",
  appOptionContainerStyle,
  appOptionContainerClassName = "",
  appOptionTitleStyle,
  appOptionTitleClassName = "",
  appOptionDescriptionStyle,
  appOptionDescriptionClassName = "",

  // SMS option props
  smsOptionTitle = "SMS Text Messages",
  smsOptionDescription = "Receive an authentication code via text message on your mobile device.",
  smsOptionContainerStyle,
  smsOptionContainerClassName = "",
  smsOptionTitleStyle,
  smsOptionTitleClassName = "",
  smsOptionDescriptionStyle,
  smsOptionDescriptionClassName = "",

  // Recommended badge props
  recommendedText = "RECOMMENDED",
  recommendedBadgeStyle,
  recommendedBadgeClassName = "",

  // Radio button props
  radioContainerStyle,
  radioContainerClassName = "",
  radioStyle,
  radioClassName = "",

  // Button props
  continueButtonText = "Continue",
  onContinue = () => {},
  continueButtonStyle,
  continueButtonClassName = "",
  cancelButtonText = "Cancel",
  onCancel = () => {},
  cancelButtonStyle,
  cancelButtonClassName = "",
  buttonsContainerStyle,
  buttonsContainerClassName = "",

  // Button configuration props
  buttonColor = "primary",
  buttonVariant = "solid",
  buttonDisabled = false,
  buttonFullWidth = false,

  // Other props
  ...rest
}) => {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        ...mainContainerStyle,
      }}
      className={mainContainerClassName}
    >
      {/* Title */}
      <CustomText
        as="h1"
        text={title}
        textStyle={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "16px",
          color: "#333333",
          ...titleStyle,
        }}
        textClassName={titleClassName}
      />

      {/* Subtitle */}
      <CustomText
        text={subtitleText}
        textStyle={{
          fontSize: "16px",
          color: "#666666",
          marginBottom: "24px",
          ...subtitleStyle,
        }}
        textClassName={subtitleClassName}
      />

      {/* Options Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "30px",
          ...optionsContainerStyle,
        }}
        className={optionsContainerClassName}
      >
        {/* Authentication App Option */}
        <div
          style={{
            display: "flex",
            padding: "16px",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor:
              selectedMethod === "app" ? "#F9FAFB" : "transparent",
            ...appOptionContainerStyle,
          }}
          className={appOptionContainerClassName}
          onClick={() => onMethodSelect("app")}
        >
          {/* Radio Button */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              padding: "4px",
              ...radioContainerStyle,
            }}
            className={radioContainerClassName}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "2px solid #D1D5DB",
                backgroundColor:
                  selectedMethod === "app" ? "#FFFFFF" : "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...radioStyle,
              }}
              className={radioClassName}
            >
              {selectedMethod === "app" && (
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#4F46E5",
                  }}
                />
              )}
            </div>
          </div>

          {/* Option Text */}
          <div style={{ flex: 1, marginLeft: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <CustomText
                as="h3"
                text={appOptionTitle}
                textStyle={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  ...appOptionTitleStyle,
                }}
                textClassName={appOptionTitleClassName}
              />

              {/* Recommended Badge */}
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  padding: "2px 8px",
                  backgroundColor: "#DCFCE7",
                  color: "#166534",
                  borderRadius: "4px",
                  ...recommendedBadgeStyle,
                }}
                className={recommendedBadgeClassName}
              >
                {recommendedText}
              </div>
            </div>

            <CustomText
              text={appOptionDescription}
              textStyle={{
                fontSize: "14px",
                color: "#6B7280",
                marginTop: "4px",
                ...appOptionDescriptionStyle,
              }}
              textClassName={appOptionDescriptionClassName}
            />
          </div>
        </div>

        {/* SMS Option */}
        <div
          style={{
            display: "flex",
            padding: "16px",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor:
              selectedMethod === "sms" ? "#F9FAFB" : "transparent",
            ...smsOptionContainerStyle,
          }}
          className={smsOptionContainerClassName}
          onClick={() => onMethodSelect("sms")}
        >
          {/* Radio Button */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              padding: "4px",
              ...radioContainerStyle,
            }}
            className={radioContainerClassName}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "2px solid #D1D5DB",
                backgroundColor:
                  selectedMethod === "sms" ? "#FFFFFF" : "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...radioStyle,
              }}
              className={radioClassName}
            >
              {selectedMethod === "sms" && (
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#4F46E5",
                  }}
                />
              )}
            </div>
          </div>

          {/* Option Text */}
          <div style={{ flex: 1, marginLeft: "12px" }}>
            <CustomText
              as="h3"
              text={smsOptionTitle}
              textStyle={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                ...smsOptionTitleStyle,
              }}
              textClassName={smsOptionTitleClassName}
            />

            <CustomText
              text={smsOptionDescription}
              textStyle={{
                fontSize: "14px",
                color: "#6B7280",
                marginTop: "4px",
                ...smsOptionDescriptionStyle,
              }}
              textClassName={smsOptionDescriptionClassName}
            />
          </div>
        </div>
      </div>

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
        {/* Cancel Button */}
        <CustomButton
          buttonChildren={cancelButtonText}
          buttonVariant="outline"
          buttonColor="light"
          buttonOnClick={onCancel}
          buttonStyle={{
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: "500",
            ...cancelButtonStyle,
          }}
          buttonClassName={cancelButtonClassName}
        />

        {/* Continue Button */}
        <CustomButton
          buttonChildren={continueButtonText}
          buttonVariant={buttonVariant}
          buttonColor={buttonColor}
          buttonDisabled={!selectedMethod || buttonDisabled}
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

export default TwoFactorSetup;
