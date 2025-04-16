import React, { useState } from "react";
import CustomInputLabelInternal from "../Reusable/CustomInputLabelInternal";
import CustomInputLabelOver from "../Reusable/CustomInputLabelOver";
import CustomPasswordInput from "../Reusable/CustomPasswordInternal";
import CustomPasswordInputOver from "../Reusable/CustomPasswordOver";
import CustomButton from "../Reusable/CustomButton";
import { Mail, Lock, User, Check } from "lucide-react";
import { SignUpProps } from "../types/types";

/**
 * Dynamic SignUp component that allows configuration of multiple input fields
 */
const CustomSignUp: React.FC<SignUpProps> = ({
  // Main container style
  mainSignUpSectionStyle,
  //GridView
  gridView = false,
  // Fields configuration
  fields = [],

  // Common props for all fields
  labelPosition = "internal",
  labelMatchBackground,

  // Logo and title section
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

  // Checkbox section
  checkBokSectionClassName,
  checkBoxSectionStyle,
  checkboxStyle,
  primaryColorCheckbox,
  checkboxClassName,
  onCheckboxClick,
  termsValue,
  termsLabel,
  termsLabelStyle,
  termsLabelClassName,

  // Button section
  buttonSectionClassName,
  buttonSectionStyle,
  submitLabel = "Sign Up",
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

  // Links section
  linksSectionStyle,
  linksSectionClassName,
  haveAccountLabel = "Already have an account? ",
  onLogin,
  loginLabelStyle,
  loginLabelClassName,
  loginLabellinkStyle,
  loginLabellinkClassName,
  loginLabel = "Log In",
  termsAndConditionsLabel = "Terms and Conditions",
  termsAndConditionsLabelPStyle,
  termsAndConditionsLabelPClassName,
  termsAndConditionsLabelAStyle,
  termsAndConditionsLabelAClassName,
  onTermsAndConditions,

  ...props
}) => {
  // Render a field based on its configuration
  const renderField = (field: any, index: number) => {
    // Standard input props for all field types
    const commonProps = {
      inputLabel: field.inputLabel,
      inputValue: field.inputValue,
      inputOnChange: field.inputOnChange,
      inputstyletype: field.type || "text",
      inputName: field.inputName || `field-${index}`,
      inputId: field.inputId || `field-${index}`,
      inputRequired: field.inputRequired,
      inputRegex: field.inputRegex,
      inputError: field.inputError,
      inputHelperText: field.inputHelperText,
      inputRightIcon: field.inputRightIcon,
      inputLabelStyle: field.inputLabelStyle,
      inputHelperTextStyle: field.inputHelperTextStyle,
      inputFieldStyle: field.inputFieldStyle,
      inputHideOnError: field.inputHideOnError,
      inputErrorStyle: field.inputErrorStyle,
      inputContainerClassName: field.inputContainerClassName,
      inputLabelClassName: field.inputLabelClassName,
      inputHelperTextClassName: field.inputHelperTextClassName,
      inputFieldClassName: field.inputFieldClassName,
      inputErrorClassName: field.inputErrorClassName,
      inputLabelContainerClassName: field.inputLabelContainerClassName,
      inputLabelContainerStyle: field.inputLabelContainerStyle,
      inputLeftIcon: field.inputLeftIcon,
      inputOnValidation: field.inputOnValidation,
      inputPlaceholder: field.inputPlaceholder,
      inputContainerStyle: field.inputContainerStyle,
      labelMatchBackground: labelMatchBackground,
      ...props,
    };

    // For password type fields
    if (field.type === "password") {
      return labelPosition === "internal" ? (
        <CustomPasswordInput key={index} {...commonProps} />
      ) : (
        <CustomPasswordInputOver key={index} {...commonProps} />
      );
    }

    // For all other field types
    return labelPosition === "internal" ? (
      <CustomInputLabelInternal key={index} {...commonProps} />
    ) : (
      <CustomInputLabelOver key={index} {...commonProps} />
    );
  };

  function repeat(
    arg0: number,
    arg1: number,
    fr: any
  ):
    | import("csstype").Property.GridTemplateColumns<string | number>
    | undefined {
    throw new Error("Function not implemented.");
  }

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
        ...mainSignUpSectionStyle,
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

      {/* Title Section */}
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

      {/* Form Fields */}
      {gridView ? (
        <div
          style={{
            width: "100%",
            height: "fit-content",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            gridTemplateColumns: "45% 45%" /* Create 2 equal columns */,
            gap: "25px",
          }}
        >
          {fields.map((field, index) => renderField(field, index))}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {fields.map((field, index) => renderField(field, index))}
        </div>
      )}

      {/* Terms and Conditions Checkbox */}
      {termsLabel && (
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
              backgroundColor: termsValue ? primaryColorCheckbox : "white",
              borderRadius: "6px",
              border: `2px solid ${
                termsValue ? primaryColorCheckbox : "#CBD5E0"
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
            aria-checked={termsValue}
            tabIndex={0}
          >
            {termsValue && <Check size={16} color="white" />}
          </div>
          <label
            style={{ cursor: "pointer", ...termsLabelStyle }}
            className={termsLabelClassName}
          >
            {termsLabel}
          </label>
        </div>
      )}

      {/* Submit Button */}
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

      {/* Login Link and Terms & Conditions */}
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
          style={{ ...loginLabelStyle, padding: "0", margin: "2px 0" }}
          className={loginLabelClassName}
        >
          {haveAccountLabel}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onLogin) onLogin();
            }}
            style={{ ...loginLabellinkStyle }}
            className={loginLabellinkClassName}
          >
            {loginLabel}
          </a>
        </p>
        {onTermsAndConditions && (
          <p
            style={{
              ...termsAndConditionsLabelPStyle,
              padding: "0",
              margin: "2px 0",
            }}
            className={termsAndConditionsLabelPClassName}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onTermsAndConditions) onTermsAndConditions();
              }}
              style={{ ...termsAndConditionsLabelAStyle }}
              className={termsAndConditionsLabelAClassName}
            >
              {termsAndConditionsLabel}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomSignUp;
