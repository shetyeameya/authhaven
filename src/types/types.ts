/**
 * Input component
 */

import { ChangeEventHandler } from "react";

export interface InputTypes {
  /**
   * * Label text for the input field
   */
  inputLabel?: string;

  /**
   * Input type (e.g., "text", "email", "password")
   */
  inputstyletype?: string;

  /**
   * Icon displayed on the left side of the input
   */
  inputLeftIcon?: React.ReactNode;

  /** Icon displayed on the right side of the input */
  inputRightIcon?: React.ReactNode;

  /** Helper text displayed below the input */
  inputHelperText?: string;

  /** Error message to display */
  inputError?: string;

  /** Whether to hide helper text when error is shown */
  inputHideOnError?: boolean;

  /** CSS class for the outer container */
  inputContainerClassName?: string;

  /** Regular expression for validation */
  inputRegex?: string;

  /** Function called when input value changes */
  inputOnChange?: any;

  /** Input value */
  inputValue?: string;

  /** Placeholder text for the input */
  inputPlaceholder?: string;

  /** HTML ID attribute for the input */
  inputId?: string;

  /** HTML name attribute for the input */
  inputName?: string;

  /** Whether the input is required */
  inputRequired?: boolean;

  /** Custom styles for the outer container */
  inputContainerStyle?: React.CSSProperties;

  /** CSS class for the input label container */
  inputLabelContainerClassName?: string;

  /** Custom styles for the input label container */
  inputLabelContainerStyle?: React.CSSProperties;

  /** Custom styles for the input label */
  inputLabelStyle?: React.CSSProperties;

  /** CSS class for the input label */
  inputLabelClassName?: string;

  /** Custom styles for the helper text */
  inputHelperTextStyle?: React.CSSProperties;

  /** CSS class for the helper text */
  inputHelperTextClassName?: string;

  /** Custom styles for the input element */
  inputFieldStyle?: React.CSSProperties;

  /** CSS class for the input element */
  inputFieldClassName?: string;

  /** Custom styles for the error message */
  inputErrorStyle?: React.CSSProperties;

  /** CSS class for the error message */
  inputErrorClassName?: string;

  /** Function called when validation state changes */
  inputOnValidation?: (isValid: boolean) => void;

  /** Background color internal overlay to match background color of external div */
  labelMatchBackground?: string;
}

// Button component type definitions

// Define the variants, sizes, and colors available for the button
export type ButtonVariant = "solid" | "outline" | "ghost" | "link";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

// Define the complete props for the button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content of the button */
  buttonChildren?: string | React.ReactNode;

  /** The visual style variant of the button */
  buttonVariant?: ButtonVariant;

  /** The size of the button */
  buttonSize?: ButtonSize;

  /** The color scheme of the button */
  buttonColor?: ButtonColor;

  /** Optional icon to display before the button text */
  buttonLeftIcon?: React.ReactNode;

  /** Optional icon to display after the button text */
  buttonRightIcon?: React.ReactNode;

  /** If true, the button will take up the full width of its container */
  buttonFullWidth?: boolean;

  /** If true, the button will be rounded */
  buttonRounded?: boolean;

  /** If true, the button will be disabled */
  buttonDisabled?: boolean;

  /** Optional custom class names */
  buttonClassName?: string;

  /** Optional custom style object */
  buttonStyle?: React.CSSProperties;

  /** Optional function called when button is clicked */
  buttonOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Optional custom primary color (hex code) */
  primaryButtonColor?: string;

  /** Optional custom text color for primary buttons */
  primaryButtonTextColor?: string;
}

/// Login component type definitions
//Omit<ButtonProps, "buttonChildren">
/**
 * Props interface for the Login component
 */
export interface LoginProps extends ButtonProps, InputTypes {
  /**
   * Optional Style for the first div.
   */
  mainLoginSectionStyle?: React.CSSProperties;

  /**
   * Optional text alignment for the login component.
   * Accepts "center", "left", or "right".
   */
  divTextAlign?: "center" | "left" | "right";

  /**
   * Label text for the email input field.
   */
  emailInputLabel?: string;
  /**
   * Label Position to determine if the label is over or inside the input field.
   */
  labelPosition?: "over" | "internal";

  /**
   * The current value of the email input field.
   */
  emailInputValue?: string;

  /**
   * Callback function triggered on email input value change.
   * Receives the new value as a parameter.
   */
  handleInputEmailChange: (value: string) => void;

  /**
   * Optional HTML ID attribute for the email input field.
   */
  emailInputId?: string;

  /**
   * Optional flag indicating if the email input is required.
   */
  emailInputRequired?: boolean;

  /**
   * Optional regular expression string for validating the email format.
   */
  emailInputRegex?: string;

  /**
   * Error message to display if the email input is invalid.
   */
  emailInputError?: string;

  /**
   * Optional right icon to display in the email input field.
   */
  emailInputRightIcon?: React.ReactNode;

  /**
   * Helper text displayed below the email input field.
   */
  emailInputHelperText?: string;

  /**
   * Optional custom styles for the email input label.
   */
  emailInputLabelStyle?: React.CSSProperties;

  /**
   * Optional custom styles for the helper text of the email input.
   */
  emailHelperTextStyle?: React.CSSProperties;

  /**
   * Optional custom styles for the email input field.
   */
  emailInputFieldStyle?: React.CSSProperties;

  /**
   * If true, the helper text is hidden when there's an error on the email input.
   */
  emailInputHideOnError?: boolean;

  /**
   * Optional styles for the error message of the email input.
   */
  emailInputErrorStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the email input container.
   */
  emailInputContainerClassName?: string;

  /**
   * Optional CSS class name for the email input label.
   */
  emailInputLabelClassName?: string;

  /**
   * Optional CSS class name for the helper text of the email input.
   */
  emailInputHelperTextClassName?: string;

  /**
   * Optional CSS class name for the email input field.
   */
  emailInputFieldClassName?: string;

  /**
   * Optional CSS class name for the error message of the email input.
   */
  emailInputErrorClassName?: string;

  /**
   * Optional CSS class name for the email input label container.
   */
  emailInputLabelContainerClassName?: string;

  /**
   * Optional custom styles for the email input label container.
   */
  emailInputLabelContainerStyle?: React.CSSProperties;

  /**
   * Optional left icon to display in the email input field.
   */
  emailInputLeftIcon?: React.ReactNode;

  /**
   * Optional function called to handle the email input validation state changes.
   */
  emailInputOnValidation?: (isValid: boolean) => void;

  /**
   * Optional placeholder text for the email input field.
   */
  emailInputPlaceholder?: string;

  /**
   * Optional custom styles for the email input container.
   */
  emailInputContainerStyle?: React.CSSProperties;

  /**
   * Optional label for the password input field.
   */
  passwordInputLabel?: string;

  /**
   * The current value of the password input field.
   */
  passwordInputValue?: string;

  /**
   * Callback function triggered on password input value change.
   * Receives the new value as a parameter.
   */
  handleInputPasswordChange: (value: string) => void;

  /**
   * Optional HTML ID attribute for the password input field.
   */
  passwordInputId?: string;

  /**
   * Optional flag indicating if the password input is required.
   */
  passwordInputRequired?: boolean;

  /**
   * Error message to display if the password input is invalid.
   */
  passwordInputError?: string;

  /**
   * Helper text displayed below the password input field.
   */
  passwordInputHelperText?: string;

  /**
   * Optional left icon to display in the password input field.
   */
  passwordInputLeftIcon?: React.ReactNode;

  /**
   * Optional custom styles for the password input label.
   */
  passwordInputLabelStyle?: React.CSSProperties;
  /**
   * Optional custom styles for the password input helper text.
   */
  passwordInputHelperTextStyle?: React.CSSProperties;

  /**
   * Optional custom styles for the password input field.
   */
  passwordInputFieldStyle?: React.CSSProperties;

  /**
   * If true, the helper text is hidden when there's an error on the password input.
   */
  passwordInputHideOnError?: boolean;

  /**
   * Optional styles for the error message of the password input.
   */
  passwordInputErrorStyle?: React.CSSProperties;

  /**
   * Optional placeholder text for the password input field.
   */
  passwordInputPlaceholder?: string;

  /**
   * Optional CSS class name for the password input container.
   */
  passwordInputContainerClassName?: string;

  /**
   * Optional CSS class name for the password input label.
   */
  passwordInputLabelClassName?: string;

  /**
   * Optional CSS class name for the helper text of the password input.
   */
  passwordInputHelperTextClassName?: string;

  /**
   * Optional CSS class name for the password input field.
   */
  passwordInputFieldClassName?: string;

  /**
   * Optional CSS class name for the error message of the password input.
   */
  passwordInputErrorClassName?: string;

  /**
   * Optional CSS class name for the password input label container.
   */
  passwordInputLabelContainerClassName?: string;

  /**
   * Optional custom styles for the password input label container.
   */
  passwordInputLabelContainerStyle?: React.CSSProperties;

  /**
   * Optional custom styles for the password input container.
   */
  passwordInputContainerStyle?: React.CSSProperties;

  /**
   * Optional logo that can be displayed in the login component.
   */
  logo?: string | React.ReactNode;

  /**
   * Optional CSS class name for the logo section.
   */
  logoSectionClassName?: string;

  /**
   * Optional custom styles for the logo image or text.
   */
  logoStyle?: React.CSSProperties;

  /**
   * Optional custom styles for the title section.
   */
  titleSectionStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the title section.
   */
  titleSectionClassName?: string;

  /**
   * Optional title text to display on the login component.
   */
  title?: string;

  /**
   * Optional custom styles for the title text.
   */
  titleStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the title text.
   */
  titleClassName?: string;

  /**
   * Optional subtitle text to display in the login component.
   */
  subTitle?: string;

  /**
   * Optional custom styles for the subtitle text.
   */
  subTitleStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the subtitle text.
   */
  subTitleClassName?: string;
  /**
   * Optional CSS class name for the checkbox section.
   */
  checkBokSectionClassName?: string;

  /**
   * Optional custom styles for the checkbox section.
   */
  checkBoxSectionStyle?: React.CSSProperties;

  /**
   * Optional custom styles for the individual checkbox element.
   */
  checkboxStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the checkbox element.
   */
  checkboxClassName?: string;

  /**
   * Optional function called when the checkbox is clicked.
   */
  onCheckboxClick?: (value: any) => void;

  /**
   * Optional custom primary color for the checkbox.
   */
  primaryColorCheckbox?: string;

  /**
   * Value indicating whether the "Remember Me" checkbox is checked.
   */
  rememberMeValue?: boolean;

  /**
   * Label text for the "Remember Me" checkbox.
   */
  rememberMeLabel?: string;

  /**
   * Optional custom styles for the "Remember Me" label text.
   */
  rememberMeLabelStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the "Remember Me" label.
   */
  rememberMeLabelClassName?: string;

  /**
   * Optional custom styles for the button section.
   */
  buttonSectionStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the button section.
   */
  buttonSectionClassName?: string;

  /**
   * Label text for the submit button.
   */
  submitLabel?: string;

  /**
   * Type of the button; can be "submit", "button", or "reset".
   */
  buttonType?: "submit" | "button" | "reset" | undefined;

  /**
   * Optional custom styles for the links section.
   */
  linksSectionStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the links section.
   */
  linksSectionClassName?: string;

  /**
   * Optional label text for the "No Account" message.
   */
  noAccountLabel?: string;

  /**
   * Optional custom styles for the "No Account" label text.
   */
  noAccountLabelStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the "No Account" label.
   */
  noAccountLabelClassName?: string;

  /**
   * Optional function called when the user wants to create a new account.
   */
  onCreateAccount?: () => void;

  /**
   * Optional custom styles for the "Create Account" link text.
   */
  createAccountLabellinkStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the "Create Account" link.
   */
  createAccountLabellinkClassName?: string;

  /**
   * Label text for the "Create Account" action.
   */
  createAccountLabel?: string;

  /**
   * Label text for the "Forgot Password" action.
   */
  forgotPasswordLabel?: string;

  /**
   * Optional custom styles for the paragraph containing the "Forgot Password" label.
   */
  forgotPasswordLabelPStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the paragraph containing the "Forgot Password" label.
   */
  forgotPasswordLabelPClassName?: string;

  /**
   * Optional custom styles for the anchor text of the "Forgot Password" link.
   */
  forgotPasswordLabelAStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the anchor text of the "Forgot Password" link.
   */
  forgotPasswordLabelAClassName?: string;

  /**
   * Optional function called when the user triggers a forgot password action.
   */
  onForgotPassword?: () => void;
}

/**
 * Props interface for the Login component
 */

/**
 * Props interface for the SignUp component
 */
export interface SignUpProps extends ButtonProps, InputTypes {
  /**
   * Optional function called when the user triggers a forgot password action.
   */
  onForgotPassword?: () => void;
  /**
   * Optional Style for the main signup container.
   */
  mainSignUpSectionStyle?: React.CSSProperties;

  /**
   * Array of field configurations for the form
   */
  fields: Array<{
    /**
     * Type of input field
     */
    type?: string;

    /**
     * All input props can be specified for each field
     */
    [key: string]: any;
  }>;

  /**
   * Position of the input labels
   */
  labelPosition?: "internal" | "over";

  /**
   * Optional logo that can be displayed in the signup component
   */
  logo?: string | React.ReactNode;

  /**
   * Optional CSS class name for the logo section
   */
  logoSectionClassName?: string;

  /**
   * Optional custom styles for the logo
   */
  logoStyle?: React.CSSProperties;

  /**
   * Title for the signup form
   */
  title?: string;

  /**
   * Custom styles for the title section
   */
  titleSectionStyle?: React.CSSProperties;

  /**
   * CSS class name for the title section
   */
  titleSectionClassName?: string;

  /**
   * Custom styles for the title text
   */
  titleStyle?: React.CSSProperties;

  /**
   * CSS class name for the title
   */
  titleClassName?: string;

  /**
   * Subtitle for the signup form
   */
  subTitle?: string;

  /**
   * Custom styles for the subtitle
   */
  subTitleStyle?: React.CSSProperties;

  /**
   * CSS class name for the subtitle
   */
  subTitleClassName?: string;

  /**
   * CSS class name for the terms checkbox section
   */
  checkBokSectionClassName?: string;

  /**
   * Custom styles for the terms checkbox section
   */
  checkBoxSectionStyle?: React.CSSProperties;

  /**
   * Custom styles for the terms checkbox
   */
  checkboxStyle?: React.CSSProperties;

  /**
   * CSS class name for the terms checkbox
   */
  checkboxClassName?: string;

  /**
   * Function called when terms checkbox is clicked
   */
  onCheckboxClick?: (value: any) => void;

  /**
   * Custom primary color for the checkbox when checked
   */
  primaryColorCheckbox?: string;

  /**
   * Value of the terms checkbox (checked or not)
   */
  termsValue?: boolean;

  /**
   * Label text for the terms checkbox
   */
  termsLabel?: string;

  /**
   * Custom styles for the terms checkbox label
   */
  termsLabelStyle?: React.CSSProperties;

  /**
   * CSS class name for the terms checkbox label
   */
  termsLabelClassName?: string;

  /**
   * Custom styles for the button section
   */
  buttonSectionStyle?: React.CSSProperties;

  /**
   * CSS class name for the button section
   */
  buttonSectionClassName?: string;

  /**
   * Label text for the submit button
   */
  submitLabel?: string;

  /**
   * Custom styles for the links section
   */
  linksSectionStyle?: React.CSSProperties;

  /**
   * CSS class name for the links section
   */
  linksSectionClassName?: string;

  /**
   * Text for "Already have an account?" message
   */
  haveAccountLabel?: string;

  /**
   * Function called when login link is clicked
   */
  onLogin?: () => void;

  /**
   * Custom styles for the login label
   */
  loginLabelStyle?: React.CSSProperties;

  /**
   * CSS class name for the login label
   */
  loginLabelClassName?: string;

  /**
   * Custom styles for the login link
   */
  loginLabellinkStyle?: React.CSSProperties;

  /**
   * CSS class name for the login link
   */
  loginLabellinkClassName?: string;

  /**
   * Label text for the login link
   */
  loginLabel?: string;

  /**
   * Label text for the terms and conditions link
   */
  termsAndConditionsLabel?: string;

  /**
   * Custom styles for the terms and conditions paragraph
   */
  termsAndConditionsLabelPStyle?: React.CSSProperties;

  /**
   * CSS class name for the terms and conditions paragraph
   */
  termsAndConditionsLabelPClassName?: string;

  /**
   * Custom styles for the terms and conditions link
   */
  termsAndConditionsLabelAStyle?: React.CSSProperties;

  /**
   * CSS class name for the terms and conditions link
   */
  termsAndConditionsLabelAClassName?: string;

  /**
   * Function called when terms and conditions link is clicked
   */
  onTermsAndConditions?: () => void;
  /**
   * Type of the button; can be "submit", "button", or "reset".
   */
  buttonType?: "submit" | "button" | "reset" | undefined;
  /**
   * Grid view or layout straight
   */
  gridView?: boolean;
}
