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

/**
 * Props for the ForgotPasswordSelection component (Option selection UI)
 */
export interface ForgotPasswordSelectionProps extends ButtonProps {
  /**
   * Optional style for the main container
   */
  mainContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the main container
   */
  mainContainerClassName?: string;

  /**
   * Title text for the forgot password page
   */
  title?: string;

  /**
   * Optional style for the title
   */
  titleStyle?: React.CSSProperties;

  /**
   * Optional class name for the title
   */
  titleClassName?: string;

  /**
   * Subtitle or description text
   */
  subtitleText?: string;

  /**
   * Optional style for the subtitle
   */
  subtitleStyle?: React.CSSProperties;

  /**
   * Optional class name for the subtitle
   */
  subtitleClassName?: string;

  /**
   * Optional style for the options container
   */
  optionsContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the options container
   */
  optionsContainerClassName?: string;

  /**
   * Email option title text
   */
  emailOptionTitle?: string;

  /**
   * Email option description text
   */
  emailOptionDescription?: string;

  /**
   * Optional style for the email option container
   */
  emailOptionContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the email option container
   */
  emailOptionContainerClassName?: string;

  /**
   * Optional style for the email option title
   */
  emailOptionTitleStyle?: React.CSSProperties;

  /**
   * Optional class name for the email option title
   */
  emailOptionTitleClassName?: string;

  /**
   * Optional style for the email option description
   */
  emailOptionDescriptionStyle?: React.CSSProperties;

  /**
   * Optional class name for the email option description
   */
  emailOptionDescriptionClassName?: string;

  /**
   * Optional custom icon for the email option
   */
  emailIcon?: React.ReactNode;

  /**
   * Optional style for the email icon container
   */
  emailIconContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the email icon container
   */
  emailIconContainerClassName?: string;

  /**
   * Phone option title text
   */
  phoneOptionTitle?: string;

  /**
   * Phone option description text
   */
  phoneOptionDescription?: string;

  /**
   * Optional style for the phone option container
   */
  phoneOptionContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the phone option container
   */
  phoneOptionContainerClassName?: string;

  /**
   * Optional style for the phone option title
   */
  phoneOptionTitleStyle?: React.CSSProperties;

  /**
   * Optional class name for the phone option title
   */
  phoneOptionTitleClassName?: string;

  /**
   * Optional style for the phone option description
   */
  phoneOptionDescriptionStyle?: React.CSSProperties;

  /**
   * Optional class name for the phone option description
   */
  phoneOptionDescriptionClassName?: string;

  /**
   * Optional custom icon for the phone option
   */
  phoneIcon?: React.ReactNode;

  /**
   * Optional style for the phone icon container
   */
  phoneIconContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the phone icon container
   */
  phoneIconContainerClassName?: string;

  /**
   * Currently selected option ('email', 'phone', or null)
   */
  selectedOption?: "email" | "phone" | null;

  /**
   * Function called when an option is selected
   */
  onOptionSelect?: (option: "email" | "phone") => void;

  /**
   * Optional custom style for the selected option indicator
   */
  selectedOptionIndicatorStyle?: React.CSSProperties;

  /**
   * Optional class name for the selected option indicator
   */
  selectedOptionIndicatorClassName?: string;

  /**
   * Text for the send code button
   */
  sendCodeButtonText?: string;

  /**
   * Function called when send code button is clicked
   */
  onSendCode?: () => void;

  /**
   * Optional style for the send code button
   */
  sendCodeButtonStyle?: React.CSSProperties;

  /**
   * Optional class name for the send code button
   */
  sendCodeButtonClassName?: string;

  /**
   * Text for the resend link
   */
  resendLinkText?: string;

  /**
   * Function called when resend link is clicked
   */
  onResend?: () => void;

  /**
   * Optional style for the resend link container
   */
  resendContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the resend link container
   */
  resendContainerClassName?: string;

  /**
   * Text shown before the resend link
   */
  didntReceiveText?: string;

  /**
   * Optional style for the didn't receive text
   */
  didntReceiveTextStyle?: React.CSSProperties;

  /**
   * Optional class name for the didn't receive text
   */
  didntReceiveTextClassName?: string;

  /**
   * Optional style for the resend link text
   */
  resendLinkStyle?: React.CSSProperties;

  /**
   * Optional class name for the resend link text
   */
  resendLinkClassName?: string;

  /**
   * Text for the cancel button
   */
  cancelButtonText?: string;

  /**
   * Function called when cancel button is clicked
   */
  onCancel?: () => void;

  /**
   * Optional style for the cancel button
   */
  cancelButtonStyle?: React.CSSProperties;

  /**
   * Optional class name for the cancel button
   */
  cancelButtonClassName?: string;
}

/**
 * Props for the traditional ForgotPassword component with email input
 */
export interface ForgotPasswordTraditionalProps
  extends ButtonProps,
    InputTypes {
  /**
   * Optional style for the main container
   */
  mainContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the main container
   */
  mainContainerClassName?: string;

  /**
   * Title text for the forgot password page
   */
  title?: string;

  /**
   * Optional style for the title
   */
  titleStyle?: React.CSSProperties;

  /**
   * Optional class name for the title
   */
  titleClassName?: string;

  /**
   * Description text for the forgot password page
   */
  descriptionText?: string;

  /**
   * Optional style for the description text
   */
  descriptionStyle?: React.CSSProperties;

  /**
   * Optional class name for the description text
   */
  descriptionClassName?: string;

  /**
   * Label for the email input field
   */
  emailInputLabel?: string;

  /**
   * Current value of the email input
   */
  emailInputValue?: string;

  /**
   * Function called when email input changes
   */
  handleEmailChange: (value: string) => void;

  /**
   * Position of the label for the email input ('over' or 'internal')
   */
  labelPosition?: "over" | "internal";

  /**
   * Error message to display for the email input
   */
  emailInputError?: string;

  /**
   * Helper text to display below the email input
   */
  emailInputHelperText?: string;

  /**
   * Placeholder text for the email input
   */
  emailInputPlaceholder?: string;

  /**
   * Function called when the reset button is clicked
   */
  onResetPassword?: () => void;

  /**
   * Text for the reset button
   */
  resetButtonText?: string;

  /**
   * Optional style for the reset button
   */
  resetButtonStyle?: React.CSSProperties;

  /**
   * Optional class name for the reset button
   */
  resetButtonClassName?: string;

  /**
   * Text for the back to login link
   */
  backToLoginText?: string;

  /**
   * Function called when back to login link is clicked
   */
  onBackToLogin?: () => void;

  /**
   * Optional style for the back to login link
   */
  backToLoginStyle?: React.CSSProperties;

  /**
   * Optional class name for the back to login link
   */
  backToLoginClassName?: string;

  /**
   * Optional style for the form container
   */
  formContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the form container
   */
  formContainerClassName?: string;

  /**
   * Text for the cancel button
   */
  cancelButtonText?: string;

  /**
   * Function called when cancel button is clicked
   */
  onCancel?: () => void;

  /**
   * Optional style for the cancel button
   */
  cancelButtonStyle?: React.CSSProperties;

  /**
   * Optional class name for the cancel button
   */
  cancelButtonClassName?: string;
}

export interface CustomTextProps {
  /**
   * The text content to display
   */
  text?: string;

  /**
   * Optional custom styles for the text
   */
  textStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the text
   */
  textClassName?: string;

  /**
   * HTML element to use for the text ('p', 'span', 'h1', 'h2', 'h3', etc.)
   */
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

  /**
   * Optional custom styles for the container
   */
  containerStyle?: React.CSSProperties;

  /**
   * Optional CSS class name for the container
   */
  containerClassName?: string;

  /**
   * Optional child elements
   */
  children?: React.ReactNode;

  /**
   * Optional onClick handler
   */
  onClick?: () => void;
}

/**
 * Props for the TwoFactorSetup component (first screen)
 */
export interface TwoFactorSetupProps extends ButtonProps {
  /**
   * Optional style for the main container
   */
  mainContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the main container
   */
  mainContainerClassName?: string;

  /**
   * Title text for the 2FA setup screen
   */
  title?: string;

  /**
   * Optional style for the title
   */
  titleStyle?: React.CSSProperties;

  /**
   * Optional class name for the title
   */
  titleClassName?: string;

  /**
   * Subtitle or description text
   */
  subtitleText?: string;

  /**
   * Optional style for the subtitle
   */
  subtitleStyle?: React.CSSProperties;

  /**
   * Optional class name for the subtitle
   */
  subtitleClassName?: string;

  /**
   * Options container style
   */
  optionsContainerStyle?: React.CSSProperties;

  /**
   * Options container class name
   */
  optionsContainerClassName?: string;

  /**
   * Selected authentication method ('app' or 'sms')
   */
  selectedMethod?: "app" | "sms" | null;

  /**
   * Function called when an authentication method is selected
   */
  onMethodSelect?: (method: "app" | "sms") => void;

  /**
   * App option title text
   */
  appOptionTitle?: string;

  /**
   * App option description text
   */
  appOptionDescription?: string;

  /**
   * Optional style for the app option container
   */
  appOptionContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the app option container
   */
  appOptionContainerClassName?: string;

  /**
   * Optional style for the app option title
   */
  appOptionTitleStyle?: React.CSSProperties;

  /**
   * Optional class name for the app option title
   */
  appOptionTitleClassName?: string;

  /**
   * Optional style for the app option description
   */
  appOptionDescriptionStyle?: React.CSSProperties;

  /**
   * Optional class name for the app option description
   */
  appOptionDescriptionClassName?: string;

  /**
   * SMS option title text
   */
  smsOptionTitle?: string;

  /**
   * SMS option description text
   */
  smsOptionDescription?: string;

  /**
   * Optional style for the SMS option container
   */
  smsOptionContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the SMS option container
   */
  smsOptionContainerClassName?: string;

  /**
   * Optional style for the SMS option title
   */
  smsOptionTitleStyle?: React.CSSProperties;

  /**
   * Optional class name for the SMS option title
   */
  smsOptionTitleClassName?: string;

  /**
   * Optional style for the SMS option description
   */
  smsOptionDescriptionStyle?: React.CSSProperties;

  /**
   * Optional class name for the SMS option description
   */
  smsOptionDescriptionClassName?: string;

  /**
   * Text for the recommended badge
   */
  recommendedText?: string;

  /**
   * Style for the recommended badge
   */
  recommendedBadgeStyle?: React.CSSProperties;

  /**
   * Class name for the recommended badge
   */
  recommendedBadgeClassName?: string;

  /**
   * Radio button container style
   */
  radioContainerStyle?: React.CSSProperties;

  /**
   * Radio button container class name
   */
  radioContainerClassName?: string;

  /**
   * Radio button style
   */
  radioStyle?: React.CSSProperties;

  /**
   * Radio button class name
   */
  radioClassName?: string;

  /**
   * Continue button text
   */
  continueButtonText?: string;

  /**
   * Function called when continue button is clicked
   */
  onContinue?: () => void;

  /**
   * Style for the continue button
   */
  continueButtonStyle?: React.CSSProperties;

  /**
   * Class name for the continue button
   */
  continueButtonClassName?: string;

  /**
   * Cancel button text
   */
  cancelButtonText?: string;

  /**
   * Function called when cancel button is clicked
   */
  onCancel?: () => void;

  /**
   * Style for the cancel button
   */
  cancelButtonStyle?: React.CSSProperties;

  /**
   * Class name for the cancel button
   */
  cancelButtonClassName?: string;

  /**
   * Buttons container style
   */
  buttonsContainerStyle?: React.CSSProperties;

  /**
   * Buttons container class name
   */
  buttonsContainerClassName?: string;
}

/**
 * Props for the TwoFactorVerify component (second screen)
 */
export interface TwoFactorVerifyProps extends ButtonProps, InputTypes {
  /**
   * Optional style for the main container
   */
  mainContainerStyle?: React.CSSProperties;

  /**
   * Optional class name for the main container
   */
  mainContainerClassName?: string;

  /**
   * Label Position to determine if the label is over or inside the input field.
   */
  labelPosition?: "over" | "internal";

  /**
   * Title text for the 2FA verification screen
   */
  title?: string;

  /**
   * Optional style for the title
   */
  titleStyle?: React.CSSProperties;

  /**
   * Optional class name for the title
   */
  titleClassName?: string;

  /**
   * Phone number or email where code was sent (will be partially masked)
   */
  maskedDestination?: string;

  /**
   * Optional style for the masked destination text
   */
  maskedDestinationStyle?: React.CSSProperties;

  /**
   * Optional class name for the masked destination text
   */
  maskedDestinationClassName?: string;

  /**
   * Text for the notification about code being sent
   */
  notificationText?: string;

  /**
   * Optional style for the notification text
   */
  notificationTextStyle?: React.CSSProperties;

  /**
   * Optional class name for the notification text
   */
  notificationTextClassName?: string;

  /**
   * Text for the verification instructions
   */
  instructionsText?: string;

  /**
   * Optional style for the instructions text
   */
  instructionsTextStyle?: React.CSSProperties;

  /**
   * Optional class name for the instructions text
   */
  instructionsTextClassName?: string;

  /**
   * Label for the verification code input
   */
  verificationCodeLabel?: string;

  /**
   * Optional style for the verification code label
   */
  verificationCodeLabelStyle?: React.CSSProperties;

  /**
   * Optional class name for the verification code label
   */
  verificationCodeLabelClassName?: string;

  /**
   * Current value of the verification code
   */
  verificationCodeValue?: string;

  /**
   * Function called when verification code changes
   */
  handleVerificationCodeChange: (value: string) => void;

  /**
   * Error message to display for the verification code
   */
  verificationCodeError?: string;

  /**
   * Whether to use the digit input (true) or the standard input (false)
   */
  useDigitInput?: boolean;

  /**
   * Number of digits in the verification code (for digit input)
   */
  digitCount?: number;

  /**
   * Style for each digit input box
   */
  digitInputStyle?: React.CSSProperties;

  /**
   * Class name for each digit input box
   */
  digitInputClassName?: string;

  /**
   * Style for the digit input container
   */
  digitInputContainerStyle?: React.CSSProperties;

  /**
   * Class name for the digit input container
   */
  digitInputContainerClassName?: string;

  /**
   * Additional text shown below the verification code
   */
  additionalInfoText?: string;

  /**
   * Optional style for the additional info text
   */
  additionalInfoTextStyle?: React.CSSProperties;

  /**
   * Optional class name for the additional info text
   */
  additionalInfoTextClassName?: string;

  /**
   * Continue button text
   */
  continueButtonText?: string;

  /**
   * Function called when continue button is clicked
   */
  onContinue?: () => void;

  /**
   * Style for the continue button
   */
  continueButtonStyle?: React.CSSProperties;

  /**
   * Class name for the continue button
   */
  continueButtonClassName?: string;

  /**
   * Back button text
   */
  backButtonText?: string;

  /**
   * Function called when back button is clicked
   */
  onBack?: () => void;

  /**
   * Style for the back button
   */
  backButtonStyle?: React.CSSProperties;

  /**
   * Class name for the back button
   */
  backButtonClassName?: string;

  /**
   * Buttons container style
   */
  buttonsContainerStyle?: React.CSSProperties;

  /**
   * Buttons container class name
   */
  buttonsContainerClassName?: string;
}

export interface DigitInputProps {
  /**
   * Number of digits to display
   */
  digitCount: number;

  /**
   * Current value of the verification code
   */
  value: string;

  /**
   * Function called when verification code changes
   */
  onChange: (value: string) => void;

  /**
   * Optional style for each digit input box
   */
  digitStyle?: React.CSSProperties;

  /**
   * Optional class name for each digit input box
   */
  digitClassName?: string;

  /**
   * Optional style for the digit input container
   */
  containerStyle?: React.CSSProperties;

  /**
   * Optional class name for the digit input container
   */
  containerClassName?: string;

  /**
   * Optional placeholder for each digit input (default is empty)
   */
  digitPlaceholder?: string;

  /**
   * Error state for the input
   */
  error?: boolean;

  /**
   * Error message to display
   */
  errorMessage?: string;

  /**
   * Style for the error message
   */
  errorStyle?: React.CSSProperties;

  /**
   * Class name for the error message
   */
  errorClassName?: string;

  /**
   * Whether the input is disabled
   */
  disabled?: boolean;

  /**
   * Callback when all digits are filled
   */
  onComplete?: (value: string) => void;
}
