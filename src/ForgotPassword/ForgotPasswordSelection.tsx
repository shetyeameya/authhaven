import React from "react";
import { ForgotPasswordSelectionProps } from "../types/types";
import CustomTextBox from "../Reusable/CustomTextBox";
import CustomButton from "../Reusable/CustomButton";

/**
 * ForgotPasswordSelection component that lets users choose between email or phone for password reset
 */
const ForgotPasswordSelection: React.FC<ForgotPasswordSelectionProps> = ({
  // Main container props
  mainContainerStyle,
  mainContainerClassName = "",
  logo,
  logoSectionClassName,
  logoStyle,

  // Title props
  title = "Forgot Password?",
  titleStyle,
  titleClassName = "",

  // Subtitle props
  subtitleText = "Please select option to send link reset password",
  subtitleStyle,
  subtitleClassName = "",

  // Options container props
  optionsContainerStyle,
  optionsContainerClassName = "",

  // Email option props
  emailOptionTitle = "Reset Via Email",
  emailOptionDescription = "Code will be sent to your registered email address.",
  emailOptionContainerStyle,
  emailOptionContainerClassName = "",
  emailOptionTitleStyle,
  emailOptionTitleClassName = "",
  emailOptionDescriptionStyle,
  emailOptionDescriptionClassName = "",
  emailIcon,
  emailIconContainerStyle,
  emailIconContainerClassName = "",

  // Phone option props
  phoneOptionTitle = "Reset Via Phone",
  phoneOptionDescription = "Code will be sent to your registered Phone Number.",
  phoneOptionContainerStyle,
  phoneOptionContainerClassName = "",
  phoneOptionTitleStyle,
  phoneOptionTitleClassName = "",
  phoneOptionDescriptionStyle,
  phoneOptionDescriptionClassName = "",
  phoneIcon,
  phoneIconContainerStyle,
  phoneIconContainerClassName = "",

  // Selection state props
  selectedOption = null,
  onOptionSelect = () => {},
  selectedOptionIndicatorStyle,
  selectedOptionIndicatorClassName = "",

  // Send code button props
  sendCodeButtonText = "Send Code",
  onSendCode = () => {},
  sendCodeButtonStyle,
  sendCodeButtonClassName = "",

  // Resend props
  resendLinkText = "Resend",
  onResend = () => {},
  resendContainerStyle,
  resendContainerClassName = "",
  didntReceiveText = "Didn't received link?",
  didntReceiveTextStyle,
  didntReceiveTextClassName = "",
  resendLinkStyle,
  resendLinkClassName = "",

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

  // Other props
  ...rest
}) => {
  // Default email icon if not provided
  const defaultEmailIcon = (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#6B68D8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...emailIconContainerStyle,
      }}
      className={emailIconContainerClassName}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M3 9L10.2 13.65C10.8802 14.1 11.2202 14.325 11.5839 14.3941C11.8279 14.4514 12.1721 14.4514 12.4161 14.3941C12.7798 14.325 13.1198 14.1 13.8 13.65L21 9"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  // Default phone icon if not provided
  const defaultPhoneIcon = (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#6B68D8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...phoneIconContainerStyle,
      }}
      className={phoneIconContainerClassName}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5768 3.16 18.0268 3.75543 19.1679 4.75944C20.309 5.76345 21.0023 7.11769 21 8.5M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  // Default selected indicator
  const defaultSelectedIndicator = (
    <div
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: "#6B68D8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...selectedOptionIndicatorStyle,
      }}
      className={selectedOptionIndicatorClassName}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3334 4L6.00008 11.3333L2.66675 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

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
      <CustomTextBox
        as="h1"
        text={title}
        textStyle={{
          color: "black",
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "12px",
          ...titleStyle,
        }}
        textClassName={titleClassName}
      />

      {/* Subtitle */}
      <CustomTextBox
        text={subtitleText}
        textStyle={{
          color: "darkgray",
          fontSize: "16px",
          textAlign: "center",
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
          marginBottom: "24px",
          ...optionsContainerStyle,
        }}
        className={optionsContainerClassName}
      >
        {/* Email Option */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            borderRadius: "12px",
            cursor: "pointer",
            border:
              selectedOption === "email"
                ? "1px solid #6B68D8"
                : "1px solid black",
            ...emailOptionContainerStyle,
          }}
          className={emailOptionContainerClassName}
          onClick={() => onOptionSelect("email")}
        >
          {/* Email Icon */}
          {emailIcon || defaultEmailIcon}

          {/* Email Text Container */}
          <div style={{ marginLeft: "16px", flex: 1 }}>
            <CustomTextBox
              as="h3"
              text={emailOptionTitle}
              textStyle={{
                color: "black",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "4px",
                ...emailOptionTitleStyle,
              }}
              textClassName={emailOptionTitleClassName}
            />
            <CustomTextBox
              text={emailOptionDescription}
              textStyle={{
                color: "darkgray",
                fontSize: "14px",
                ...emailOptionDescriptionStyle,
              }}
              textClassName={emailOptionDescriptionClassName}
            />
          </div>

          {/* Selected Indicator */}
          {selectedOption === "email" && defaultSelectedIndicator}
        </div>

        {/* Phone Option */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            borderRadius: "12px",
            cursor: "pointer",
            border:
              selectedOption === "phone"
                ? "1px solid #6B68D8"
                : "1px solid black",
            ...phoneOptionContainerStyle,
          }}
          className={phoneOptionContainerClassName}
          onClick={() => onOptionSelect("phone")}
        >
          {/* Phone Icon */}
          {phoneIcon || defaultPhoneIcon}

          {/* Phone Text Container */}
          <div style={{ marginLeft: "16px", flex: 1 }}>
            <CustomTextBox
              as="h3"
              text={phoneOptionTitle}
              textStyle={{
                color: "black",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "4px",
                ...phoneOptionTitleStyle,
              }}
              textClassName={phoneOptionTitleClassName}
            />
            <CustomTextBox
              text={phoneOptionDescription}
              textStyle={{
                color: "darkgray",
                fontSize: "14px",
                ...phoneOptionDescriptionStyle,
              }}
              textClassName={phoneOptionDescriptionClassName}
            />
          </div>

          {/* Selected Indicator */}
          {selectedOption === "phone" && defaultSelectedIndicator}
        </div>
      </div>

      {/* Send Code Button */}
      <CustomButton
        buttonChildren={sendCodeButtonText}
        buttonColor={buttonColor}
        buttonVariant={buttonVariant}
        buttonFullWidth={buttonFullWidth}
        buttonDisabled={!selectedOption || buttonDisabled}
        buttonOnClick={onSendCode}
        buttonStyle={{
          padding: "16px",
          backgroundColor: "#9D8DF8",
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "16px",
          ...sendCodeButtonStyle,
        }}
        buttonClassName={sendCodeButtonClassName}
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
          padding: "16px",
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "16px",
          ...cancelButtonStyle,
        }}
        buttonClassName={cancelButtonClassName}
      />

      {/* Resend Link */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          ...resendContainerStyle,
        }}
        className={resendContainerClassName}
      >
        <CustomTextBox
          text={didntReceiveText}
          textStyle={{
            color: "#C8C8D8",
            fontSize: "14px",
            ...didntReceiveTextStyle,
          }}
          textClassName={didntReceiveTextClassName}
        />
        <CustomTextBox
          as="span"
          text={resendLinkText}
          textStyle={{
            color: "#9D8DF8",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            ...resendLinkStyle,
          }}
          textClassName={resendLinkClassName}
          onClick={onResend}
        />
      </div>
    </div>
  );
};

export default ForgotPasswordSelection;
