import React from "react";
import CustomInputLabelInternal from "../Reusable/CustomInputLabelInternal";
import CustomInputLabelOver from "../Reusable/CustomInputLabelOver";
import CustomPasswordInput from "../Reusable/CustomPasswordInternal";
import CustomPasswordInputOver from "../Reusable/CustomPasswordOver";
import CustomButton from "../Reusable/CustomButton";
import { Check } from "lucide-react";
import { LoginProps } from "../types/types";

/**
 * Modern styled login component that resembles the provided design
 */
const ModernLogin: React.FC<LoginProps> = ({
  mainLoginSectionStyle,
  emailInputLabel,
  emailInputValue,
  handleInputEmailChange,
  emailInputId,
  emailInputRequired,
  emailInputRegex,
  emailInputError,
  emailInputRightIcon,
  emailInputHelperText,
  labelPosition = "over",
  passwordInputLabel,
  passwordInputValue,
  handleInputPasswordChange,
  passwordInputId,
  passwordInputRequired,
  passwordInputError,
  passwordInputHelperText,
  passwordInputLeftIcon,
  logo,
  logoSectionClassName,
  logoStyle,
  title,
  subTitle,
  titleSectionStyle,
  titleSectionClassName,
  titleStyle,
  titleClassName,
  subTitleStyle,
  subTitleClassName,
  checkBokSectionClassName,
  checkBoxSectionStyle,
  checkboxStyle,
  primaryColorCheckbox,
  checkboxClassName,
  onCheckboxClick,
  rememberMeValue,
  rememberMeLabel,
  rememberMeLabelStyle,
  rememberMeLabelClassName,
  buttonSectionClassName,
  buttonSectionStyle,
  submitLabel,
  primaryButtonColor,
  primaryButtonTextColor,
  buttonStyle,
  buttonRightIcon,
  buttonVariant,
  buttonSize,
  buttonColor,
  buttonLeftIcon,
  buttonFullWidth,
  buttonRounded,
  buttonDisabled,
  buttonClassName,
  buttonOnClick,
  buttonType = "submit",
  buttonChildren,
  linksSectionStyle,
  linksSectionClassName,
  noAccountLabel = `Don't have an account?${" "}`,
  onCreateAccount,
  noAccountLabelStyle,
  noAccountLabelClassName,
  createAccountLabellinkStyle,
  createAccountLabellinkClassName,
  createAccountLabel = "Sign Up",
  forgotPasswordLabel = "Forgot password",
  forgotPasswordLabelPStyle,
  forgotPasswordLabelPClassName,
  forgotPasswordLabelAStyle,
  forgotPasswordLabelAClassName,
  onForgotPassword,
  emailInputLabelStyle,
  emailHelperTextStyle,
  emailInputFieldStyle,
  emailInputHideOnError,
  emailInputErrorStyle,
  emailInputContainerClassName,
  emailInputLabelClassName,
  emailInputHelperTextClassName,
  emailInputFieldClassName,
  emailInputErrorClassName,
  emailInputLabelContainerClassName,
  emailInputLabelContainerStyle,
  emailInputLeftIcon,
  emailInputOnValidation,
  emailInputPlaceholder,
  emailInputContainerStyle,
  passwordInputLabelStyle,
  passwordInputHelperTextStyle,
  passwordInputFieldStyle,
  passwordInputHideOnError,
  passwordInputErrorStyle,
  passwordInputPlaceholder,
  passwordInputContainerClassName,
  passwordInputLabelClassName,
  passwordInputHelperTextClassName,
  passwordInputFieldClassName,
  passwordInputErrorClassName,
  passwordInputLabelContainerClassName,
  passwordInputLabelContainerStyle,
  passwordInputContainerStyle,
  labelMatchBackground,
  ...props
}) => {
  // State for form values

  // Render the appropriate email input based on label position
  const renderEmailInput = () => {
    const commonProps = {
      inputLabel: emailInputLabel,
      inputValue: emailInputValue,
      inputOnChange: handleInputEmailChange,
      inputstyletype: "email",
      inputName: "email",
      inputId: emailInputId,
      inputRequired: emailInputRequired,
      inputRegex: emailInputRegex,
      inputError: emailInputError,
      inputHelperText: emailInputHelperText,
      inputRightIcon: emailInputRightIcon,
      inputLabelStyle: emailInputLabelStyle,
      inputHelperTextStyle: emailHelperTextStyle,
      inputFieldStyle: emailInputFieldStyle,
      inputHideOnError: emailInputHideOnError,
      inputErrorStyle: emailInputErrorStyle,
      inputContainerClassName: emailInputContainerClassName,
      inputLabelClassName: emailInputLabelClassName,
      inputHelperTextClassName: emailInputHelperTextClassName,
      inputFieldClassName: emailInputFieldClassName,
      inputErrorClassName: emailInputErrorClassName,
      inputLabelContainerClassName: emailInputLabelContainerClassName,
      inputLabelContainerStyle: emailInputLabelContainerStyle,
      inputLeftIcon: emailInputLeftIcon,
      inputOnValidation: emailInputOnValidation,
      inputPlaceholder: emailInputPlaceholder,
      inputContainerStyle: emailInputContainerStyle,
      labelMatchBackground: labelMatchBackground,
      ...props,
      // inputContainerStyle: defaultInputStyle,
    };

    return labelPosition === "internal" ? (
      <CustomInputLabelInternal {...commonProps} />
    ) : (
      <CustomInputLabelOver {...commonProps} />
    );
  };
  console.log("emailInputHideOnError", emailInputHideOnError);
  // Render the appropriate password input based on label position
  console.log("passwordInputHideOnError", passwordInputHideOnError);
  const renderPasswordInput = () => {
    const commonProps = {
      inputLabel: passwordInputLabel,
      inputValue: passwordInputValue,
      inputOnChange: handleInputPasswordChange,
      inputstyletype: "password",
      inputName: "password",
      inputId: passwordInputId,
      inputRequired: passwordInputRequired,
      inputError: passwordInputError,
      inputHelperText: passwordInputHelperText,
      inputLeftIcon: passwordInputLeftIcon,
      inputLabelStyle: passwordInputLabelStyle,
      inputHelperTextStyle: passwordInputHelperTextStyle,
      inputFieldStyle: passwordInputFieldStyle,
      inputHideOnError: passwordInputHideOnError,
      inputErrorStyle: passwordInputErrorStyle,
      inputPlaceholder: passwordInputPlaceholder,
      inputContainerClassName: passwordInputContainerClassName,
      inputLabelClassName: passwordInputLabelClassName,
      inputHelperTextClassName: passwordInputHelperTextClassName,
      inputFieldClassName: passwordInputFieldClassName,
      inputErrorClassName: passwordInputErrorClassName,
      inputLabelContainerClassName: passwordInputLabelContainerClassName,
      inputLabelContainerStyle: passwordInputLabelContainerStyle,
      inputContainerStyle: passwordInputContainerStyle,
      labelMatchBackground: labelMatchBackground,
      props,
      // inputContainerStyle: defaultInputStyle,
    };

    return labelPosition === "internal" ? (
      <CustomPasswordInput {...commonProps} />
    ) : (
      <CustomPasswordInputOver {...commonProps} />
    );
  };

  return (
    <div
      style={{
        minWidth: "270px",
        height: "fit-content",
        backgroundColor: "#ffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        ...mainLoginSectionStyle,
      }}
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
      {title && (
        <div
          style={{
            ...titleSectionStyle,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "12px 0",
            margin: "12px 0",
          }}
          className={titleSectionClassName}
        >
          <p
            style={{
              ...titleStyle,
              fontSize: "32px",
              margin: "5px",
            }}
            className={titleClassName}
          >
            {title}
          </p>
          <p
            style={{
              ...subTitleStyle,
              fontSize: "18px",
              margin: "5px",
            }}
            className={subTitleClassName}
          >
            {subTitle}
          </p>
        </div>
      )}
      <div style={{ width: "100%", height: "fit-content" }}>
        {renderEmailInput()}
        {renderPasswordInput()}
      </div>
      {/* Remember Me Checkbox - Custom styled to match design */}
      <div
        style={{
          ...checkBoxSectionStyle,
          display: "flex",
          alignItems: "center",
          marginBottom: "22px",
          width: "100%",
          padding: "12px 0",
        }}
        className={checkBokSectionClassName}
      >
        <div
          style={{
            ...checkboxStyle,
            width: "24px",
            height: "24px",
            backgroundColor: rememberMeValue ? primaryColorCheckbox : "white",
            borderRadius: "6px",
            border: `2px solid ${
              rememberMeValue ? primaryColorCheckbox : "#CBD5E0"
            }`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "12px",
            cursor: "pointer",
          }}
          className={checkboxClassName}
          onClick={(e: any) => onCheckboxClick && onCheckboxClick(e)}
          role="checkbox"
          aria-checked={rememberMeValue}
          tabIndex={0}
        >
          {rememberMeValue && <Check size={16} color="red" />}
        </div>
        <label
          style={{ cursor: "pointer", ...rememberMeLabelStyle }}
          className={rememberMeLabelClassName}
        >
          {rememberMeLabel}
        </label>
      </div>
      {/* Submit Button using CustomButton */}
      <div style={{ ...buttonSectionStyle }} className={buttonSectionClassName}>
        <CustomButton
          primaryButtonColor={primaryButtonColor}
          primaryButtonTextColor={primaryButtonTextColor}
          buttonStyle={buttonStyle}
          buttonRightIcon={buttonRightIcon}
          buttonVariant={buttonVariant}
          buttonSize={buttonSize}
          buttonColor={buttonColor}
          buttonLeftIcon={buttonLeftIcon}
          buttonFullWidth={buttonFullWidth}
          buttonRounded={buttonRounded}
          buttonDisabled={buttonDisabled}
          buttonClassName={buttonClassName}
          buttonOnClick={buttonOnClick}
          type={buttonType}
          buttonChildren={buttonChildren ? buttonChildren : submitLabel}
        />
      </div>
      {/* Sign Up and Forgot Password Links */}
      <div
        style={{
          ...linksSectionStyle,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
        className={linksSectionClassName}
      >
        <p
          style={{ ...noAccountLabelStyle, padding: "0", margin: "2px 0" }}
          className={noAccountLabelClassName}
        >
          {noAccountLabel}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onCreateAccount) onCreateAccount();
            }}
            style={{ ...createAccountLabellinkStyle }}
            className={createAccountLabellinkClassName}
          >
            {createAccountLabel}
          </a>
        </p>
        <p
          style={{
            ...forgotPasswordLabelPStyle,
            padding: " 0",
            margin: "2px 0",
          }}
          className={forgotPasswordLabelPClassName}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onForgotPassword) onForgotPassword();
            }}
            style={{ ...forgotPasswordLabelAStyle }}
            className={forgotPasswordLabelAClassName}
          >
            {forgotPasswordLabel}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ModernLogin;
