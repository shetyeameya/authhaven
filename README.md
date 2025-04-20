# Auth Library

A modern React component library providing customizable authentication UI components including inputs, buttons, login and signup pages, forgot password flows, and two-factor authentication.

## Installation

```bash
npm install authhaven
# or
yarn add authhaven
```

## Components

This library includes the following components:

### Form Controls

- **CustomButton**: Versatile button component with multiple variants
- **CustomInputLabelInternal**: Text input with internal label
- **CustomInputLabelOver**: Text input with label positioned above
- **CustomPasswordInternal**: Password input with internal label
- **CustomPasswordOver**: Password input with label positioned above
- **CustomText**: Versatile text component with styling options
- **DigitInput**: Specialized input for verification codes

### Authentication Pages

- **Login**: Complete login page with form validation
- **SignUp**: Ready-to-use signup page with validation
- **ForgotPasswordSelection**: Selection interface for password reset method
- **ForgotPasswordTraditional**: Email-based password reset form
- **TwoFactorSetup**: Two-factor authentication setup interface
- **TwoFactorVerify**: Verification code entry for two-factor authentication

## Usage Examples

### Basic Components

```jsx
import React, { useState } from "react";
import {
  CustomLogin,
  CustomSignUp,
  ForgotPasswordSelection,
  ForgotPasswordTraditional,
  TwoFactorSetup,
  TwoFactorVerify,
} from "authhaven";
import { User, Mail, Lock } from "lucide-react";

function App() {
  // Sample logo component
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  const CustomLogo = () => {
    return (
      <div className="p-3 bg-blue-100 rounded-lg inline-block">
        <span className="text-2xl font-bold text-blue-600">Auth</span>
        <span className="text-red-500 text-2xl font-bold">•••</span>
      </div>
    );
  };

  const handleEmail = (value) => {
    setEmailValue(value);
  };

  const handlePassword = (value) => {
    setPasswordValue(value);
  };

  const onCheckboxClick = () => {
    setCheckBoxValue(!checkBoxValue);
  };

  const onSubmit = () => {
    console.log("Login submitted with:", emailValue, passwordValue);
  };

  // More handlers for other components...

  return (
    <div>
      {/* Login component */}
      <CustomLogin
        logo={<CustomLogo />}
        emailInputValue={emailValue}
        passwordInputValue={passwordValue}
        handleInputEmailChange={handleEmail}
        handleInputPasswordChange={handlePassword}
        title="Welcome Back"
        subTitle="Enter your credentials to continue"
        rememberMeLabel="Remember Me"
        submitLabel="Sign In"
        labelPosition="internal"
        onCheckboxClick={onCheckboxClick}
        rememberMeValue={checkBoxValue}
        buttonOnClick={onSubmit}
      />

      {/* More components... */}
    </div>
  );
}
```

## Detailed Component Documentation

### Button Component

```jsx
<CustomButton
  buttonVariant="solid"
  buttonSize="md"
  buttonColor="primary"
  buttonChildren="Click Me"
  buttonOnClick={() => console.log("Button clicked")}
  buttonFullWidth={false}
  buttonDisabled={false}
/>
```

### Input Components

```jsx
<CustomInputLabelOver
  inputLabel="Email"
  inputValue={email}
  inputOnChange={setEmail}
  inputError={emailError}
  inputHelperText="We'll never share your email"
  inputLeftIcon={<MailIcon />}
/>

<CustomInputLabelInternal
  inputLabel="Username"
  inputValue={username}
  inputOnChange={setUsername}
  inputPlaceholder="Enter username"
/>
```

### Login Component

```jsx
<CustomLogin
  logo={<CustomLogo />}
  emailInputValue={emailValue}
  passwordInputValue={passwordValue}
  handleInputEmailChange={handleEmail}
  handleInputPasswordChange={handlePassword}
  title="Welcome Back"
  subTitle="Enter your credentials"
  rememberMeLabel="Remember Me"
  rememberMeValue={rememberMe}
  onCheckboxClick={handleRememberMe}
  submitLabel="Sign In"
  buttonOnClick={handleLogin}
  onCreateAccount={navigateToSignup}
  onForgotPassword={navigateToForgotPassword}
  labelPosition="internal" // or "over"
/>
```

### SignUp Component

```jsx
<CustomSignUp
  gridView={true}
  title="Create Account"
  subTitle="Sign up to get started"
  fields={[
    {
      type: "text",
      inputLabel: "First Name",
      inputValue: firstName,
      inputOnChange: handleFirstNameChange,
      inputRequired: true,
      inputLeftIcon: <User size={20} />,
    },
    // Additional fields...
  ]}
  labelPosition="internal"
  termsLabel="I agree to the Terms and Conditions"
  termsValue={termsAccepted}
  onCheckboxClick={handleTermsCheck}
  submitLabel="Sign Up"
  buttonOnClick={handleSignUp}
  onLogin={navigateToLogin}
/>
```

### ForgotPasswordSelection Component

```jsx
<ForgotPasswordSelection
  selectedOption={selectedOption} // 'email' or 'phone'
  onOptionSelect={setSelectedOption}
  onSendCode={handleSendCode}
  onCancel={navigateToLogin}
  title="Forgot Password?"
  subtitleText="Please select option to send link reset password"
  emailOptionTitle="Reset Via Email"
  phoneOptionTitle="Reset Via Phone"
/>
```

### ForgotPasswordTraditional Component

```jsx
<ForgotPasswordTraditional
  emailInputValue={email}
  handleEmailChange={setEmail}
  onResetPassword={handleResetRequest}
  onBackToLogin={navigateToLogin}
  labelPosition="over"
  title="Forgot your password?"
  descriptionText="A code will be sent to your email to help reset password"
/>
```

### TwoFactorSetup Component

```jsx
<TwoFactorSetup
  selectedMethod={authMethod} // 'app' or 'sms'
  onMethodSelect={setAuthMethod}
  onContinue={handleContinue}
  onCancel={handleCancel}
  title="2-Factor Authentication Setup"
  subtitleText="How would you like to receive your authentication codes?"
  appOptionTitle="Authentication App"
  smsOptionTitle="SMS Text Messages"
/>
```

### TwoFactorVerify Component

```jsx
<TwoFactorVerify
  verificationCodeValue={verificationCode}
  handleVerificationCodeChange={setVerificationCode}
  useDigitInput={true} // Use separate digit inputs
  digitCount={6} // Number of digits
  onContinue={handleVerify}
  onBack={navigateBack}
  maskedDestination="+1****1234"
  title="2-Factor Authentication"
/>
```

### DigitInput Component

```jsx
<DigitInput
  digitCount={6}
  value={code}
  onChange={setCode}
  error={!!codeError}
  errorMessage={codeError}
  onComplete={handleComplete}
/>
```

### CustomText Component

```jsx
<CustomText
  text="Hello World"
  as="h1" // "p", "span", "h1", etc.
  textStyle={{ fontSize: "24px", fontWeight: "bold" }}
  onClick={handleClick}
/>
```

## Component Props

### Button Component Props

| Prop                   | Type                                                                                          | Default   | Description                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------- |
| buttonChildren         | string \| React.ReactNode                                                                     | undefined | The content of the button                                        |
| buttonVariant          | "solid" \| "outline" \| "ghost" \| "link"                                                     | undefined | The visual style variant of the button                           |
| buttonSize             | "xs" \| "sm" \| "md" \| "lg" \| "xl"                                                          | undefined | The size of the button                                           |
| buttonColor            | "primary" \| "secondary" \| "success" \| "danger" \| "warning" \| "info" \| "light" \| "dark" | undefined | The color scheme of the button                                   |
| buttonLeftIcon         | React.ReactNode                                                                               | undefined | Optional icon to display before the button text                  |
| buttonRightIcon        | React.ReactNode                                                                               | undefined | Optional icon to display after the button text                   |
| buttonFullWidth        | boolean                                                                                       | undefined | If true, the button will take up the full width of its container |
| buttonRounded          | boolean                                                                                       | undefined | If true, the button will be rounded                              |
| buttonDisabled         | boolean                                                                                       | undefined | If true, the button will be disabled                             |
| buttonClassName        | string                                                                                        | undefined | Optional custom class names                                      |
| buttonStyle            | React.CSSProperties                                                                           | undefined | Optional custom style object                                     |
| buttonOnClick          | (event: React.MouseEvent<HTMLButtonElement>) => void                                          | undefined | Optional function called when button is clicked                  |
| primaryButtonColor     | string                                                                                        | undefined | Optional custom primary color (hex code)                         |
| primaryButtonTextColor | string                                                                                        | undefined | Optional custom text color for primary buttons                   |

### Input Component Props

| Prop                         | Type                       | Default   | Description                                                      |
| ---------------------------- | -------------------------- | --------- | ---------------------------------------------------------------- |
| inputLabel                   | string                     | ''        | Label text for the input field                                   |
| inputstyletype               | string                     | 'text'    | Input type (e.g., "text", "email", "password")                   |
| inputLeftIcon                | React.ReactNode            | undefined | Icon displayed on the left side of the input                     |
| inputRightIcon               | React.ReactNode            | undefined | Icon displayed on the right side of the input                    |
| inputHelperText              | string                     | undefined | Helper text displayed below the input                            |
| inputError                   | string                     | undefined | Error message to display                                         |
| inputHideOnError             | boolean                    | false     | Whether to hide helper text when error is shown                  |
| inputContainerClassName      | string                     | ''        | CSS class for the outer container                                |
| inputRegex                   | string                     | undefined | Regular expression for validation                                |
| inputOnChange                | function                   | undefined | Function called when input value changes                         |
| inputValue                   | string                     | ''        | Input value                                                      |
| inputPlaceholder             | string                     | ''        | Placeholder text for the input                                   |
| inputId                      | string                     | undefined | HTML ID attribute for the input                                  |
| inputName                    | string                     | undefined | HTML name attribute for the input                                |
| inputRequired                | boolean                    | false     | Whether the input is required                                    |
| inputContainerStyle          | React.CSSProperties        | undefined | Custom styles for the outer container                            |
| inputLabelContainerClassName | string                     | ''        | CSS class for the input label container                          |
| inputLabelContainerStyle     | React.CSSProperties        | undefined | Custom styles for the input label container                      |
| inputLabelStyle              | React.CSSProperties        | undefined | Custom styles for the input label                                |
| inputLabelClassName          | string                     | ''        | CSS class for the input label                                    |
| inputHelperTextStyle         | React.CSSProperties        | undefined | Custom styles for the helper text                                |
| inputHelperTextClassName     | string                     | ''        | CSS class for the helper text                                    |
| inputFieldStyle              | React.CSSProperties        | undefined | Custom styles for the input element                              |
| inputFieldClassName          | string                     | ''        | CSS class for the input element                                  |
| inputErrorStyle              | React.CSSProperties        | undefined | Custom styles for the error message                              |
| inputErrorClassName          | string                     | ''        | CSS class for the error message                                  |
| inputOnValidation            | (isValid: boolean) => void | undefined | Function called when validation state changes                    |
| labelMatchBackground         | string                     | undefined | Background color to match the input's outer container background |

### Login Component Props

| Prop                                 | Type                                         | Description                                                                      |
| ------------------------------------ | -------------------------------------------- | -------------------------------------------------------------------------------- |
| **Main Configuration**               |                                              |                                                                                  |
| mainLoginSectionStyle                | React.CSSProperties                          | Optional style for the first div                                                 |
| divTextAlign                         | "center" \| "left" \| "right"                | Optional text alignment for the login component                                  |
| labelPosition                        | "over" \| "internal"                         | Label position to determine if the label is over or inside the input field       |
| **Email Input**                      |                                              |                                                                                  |
| emailInputLabel                      | string                                       | Label text for the email input field                                             |
| emailInputValue                      | string                                       | The current value of the email input field                                       |
| handleInputEmailChange               | (value: string) => void                      | Callback function triggered on email input value change                          |
| emailInputId                         | string                                       | Optional HTML ID attribute for the email input field                             |
| emailInputRequired                   | boolean                                      | Optional flag indicating if the email input is required                          |
| emailInputRegex                      | string                                       | Optional regular expression string for validating the email format               |
| emailInputError                      | string                                       | Error message to display if the email input is invalid                           |
| emailInputRightIcon                  | React.ReactNode                              | Optional right icon to display in the email input field                          |
| emailInputLeftIcon                   | React.ReactNode                              | Optional left icon to display in the email input field                           |
| emailInputHelperText                 | string                                       | Helper text displayed below the email input field                                |
| emailInputHideOnError                | boolean                                      | If true, the helper text is hidden when there's an error on the email input      |
| emailInputPlaceholder                | string                                       | Optional placeholder text for the email input field                              |
| emailInputOnValidation               | (isValid: boolean) => void                   | Optional function called to handle the email input validation state changes      |
| **Email Input Styling**              |                                              |                                                                                  |
| emailInputLabelStyle                 | React.CSSProperties                          | Optional custom styles for the email input label                                 |
| emailHelperTextStyle                 | React.CSSProperties                          | Optional custom styles for the helper text of the email input                    |
| emailInputFieldStyle                 | React.CSSProperties                          | Optional custom styles for the email input field                                 |
| emailInputErrorStyle                 | React.CSSProperties                          | Optional styles for the error message of the email input                         |
| emailInputContainerStyle             | React.CSSProperties                          | Optional custom styles for the email input container                             |
| emailInputLabelContainerStyle        | React.CSSProperties                          | Optional custom styles for the email input label container                       |
| emailInputContainerClassName         | string                                       | Optional CSS class name for the email input container                            |
| emailInputLabelClassName             | string                                       | Optional CSS class name for the email input label                                |
| emailInputHelperTextClassName        | string                                       | Optional CSS class name for the helper text of the email input                   |
| emailInputFieldClassName             | string                                       | Optional CSS class name for the email input field                                |
| emailInputErrorClassName             | string                                       | Optional CSS class name for the error message of the email input                 |
| emailInputLabelContainerClassName    | string                                       | Optional CSS class name for the email input label container                      |
| **Password Input**                   |                                              |                                                                                  |
| passwordInputLabel                   | string                                       | Optional label for the password input field                                      |
| passwordInputValue                   | string                                       | The current value of the password input field                                    |
| handleInputPasswordChange            | (value: string) => void                      | Callback function triggered on password input value change                       |
| passwordInputId                      | string                                       | Optional HTML ID attribute for the password input field                          |
| passwordInputRequired                | boolean                                      | Optional flag indicating if the password input is required                       |
| passwordInputError                   | string                                       | Error message to display if the password input is invalid                        |
| passwordInputHelperText              | string                                       | Helper text displayed below the password input field                             |
| passwordInputLeftIcon                | React.ReactNode                              | Optional left icon to display in the password input field                        |
| passwordInputHideOnError             | boolean                                      | If true, the helper text is hidden when there's an error on the password input   |
| passwordInputPlaceholder             | string                                       | Optional placeholder text for the password input field                           |
| **Password Input Styling**           |                                              |                                                                                  |
| passwordInputLabelStyle              | React.CSSProperties                          | Optional custom styles for the password input label                              |
| passwordInputHelperTextStyle         | React.CSSProperties                          | Optional custom styles for the password input helper text                        |
| passwordInputFieldStyle              | React.CSSProperties                          | Optional custom styles for the password input field                              |
| passwordInputErrorStyle              | React.CSSProperties                          | Optional styles for the error message of the password input                      |
| passwordInputContainerStyle          | React.CSSProperties                          | Optional custom styles for the password input container                          |
| passwordInputLabelContainerStyle     | React.CSSProperties                          | Optional custom styles for the password input label container                    |
| passwordInputContainerClassName      | string                                       | Optional CSS class name for the password input container                         |
| passwordInputLabelClassName          | string                                       | Optional CSS class name for the password input label                             |
| passwordInputHelperTextClassName     | string                                       | Optional CSS class name for the helper text of the password input                |
| passwordInputFieldClassName          | string                                       | Optional CSS class name for the password input field                             |
| passwordInputErrorClassName          | string                                       | Optional CSS class name for the error message of the password input              |
| passwordInputLabelContainerClassName | string                                       | Optional CSS class name for the password input label container                   |
| **Logo/Title**                       |                                              |                                                                                  |
| logo                                 | string \| React.ReactNode                    | Optional logo that can be displayed in the login component                       |
| logoStyle                            | React.CSSProperties                          | Optional custom styles for the logo image or text                                |
| logoSectionClassName                 | string                                       | Optional CSS class name for the logo section                                     |
| title                                | string                                       | Optional title text to display on the login component                            |
| titleStyle                           | React.CSSProperties                          | Optional custom styles for the title text                                        |
| titleClassName                       | string                                       | Optional CSS class name for the title text                                       |
| titleSectionStyle                    | React.CSSProperties                          | Optional custom styles for the title section                                     |
| titleSectionClassName                | string                                       | Optional CSS class name for the title section                                    |
| subTitle                             | string                                       | Optional subtitle text to display in the login component                         |
| subTitleStyle                        | React.CSSProperties                          | Optional custom styles for the subtitle text                                     |
| subTitleClassName                    | string                                       | Optional CSS class name for the subtitle text                                    |
| **Remember Me Checkbox**             |                                              |                                                                                  |
| rememberMeValue                      | boolean                                      | Value indicating whether the "Remember Me" checkbox is checked                   |
| rememberMeLabel                      | string                                       | Label text for the "Remember Me" checkbox                                        |
| rememberMeLabelStyle                 | React.CSSProperties                          | Optional custom styles for the "Remember Me" label text                          |
| rememberMeLabelClassName             | string                                       | Optional CSS class name for the "Remember Me" label                              |
| checkboxStyle                        | React.CSSProperties                          | Optional custom styles for the individual checkbox element                       |
| checkboxClassName                    | string                                       | Optional CSS class name for the checkbox element                                 |
| onCheckboxClick                      | (value: any) => void                         | Optional function called when the checkbox is clicked                            |
| primaryColorCheckbox                 | string                                       | Optional custom primary color for the checkbox                                   |
| checkBokSectionClassName             | string                                       | Optional CSS class name for the checkbox section                                 |
| checkBoxSectionStyle                 | React.CSSProperties                          | Optional custom styles for the checkbox section                                  |
| **Button**                           |                                              |                                                                                  |
| submitLabel                          | string                                       | Label text for the submit button                                                 |
| buttonType                           | "submit" \| "button" \| "reset" \| undefined | Type of the button                                                               |
| buttonSectionStyle                   | React.CSSProperties                          | Optional custom styles for the button section                                    |
| buttonSectionClassName               | string                                       | Optional CSS class name for the button section                                   |
| **Links Section**                    |                                              |                                                                                  |
| linksSectionStyle                    | React.CSSProperties                          | Optional custom styles for the links section                                     |
| linksSectionClassName                | string                                       | Optional CSS class name for the links section                                    |
| **Create Account**                   |                                              |                                                                                  |
| noAccountLabel                       | string                                       | Optional label text for the "No Account" message                                 |
| noAccountLabelStyle                  | React.CSSProperties                          | Optional custom styles for the "No Account" label text                           |
| noAccountLabelClassName              | string                                       | Optional CSS class name for the "No Account" label                               |
| createAccountLabel                   | string                                       | Label text for the "Create Account" action                                       |
| createAccountLabellinkStyle          | React.CSSProperties                          | Optional custom styles for the "Create Account" link text                        |
| createAccountLabellinkClassName      | string                                       | Optional CSS class name for the "Create Account" link                            |
| onCreateAccount                      | () => void                                   | Optional function called when the user wants to create a new account             |
| **Forgot Password**                  |                                              |                                                                                  |
| forgotPasswordLabel                  | string                                       | Label text for the "Forgot Password" action                                      |
| forgotPasswordLabelPStyle            | React.CSSProperties                          | Optional custom styles for the paragraph containing the "Forgot Password" label  |
| forgotPasswordLabelPClassName        | string                                       | Optional CSS class name for the paragraph containing the "Forgot Password" label |
| forgotPasswordLabelAStyle            | React.CSSProperties                          | Optional custom styles for the anchor text of the "Forgot Password" link         |
| forgotPasswordLabelAClassName        | string                                       | Optional CSS class name for the anchor text of the "Forgot Password" link        |
| onForgotPassword                     | () => void                                   | Optional function called when the user triggers a forgot password action         |

### SignUp Component Props

| Prop                              | Type                                         | Description                                                              |
| --------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------ |
| **Main Configuration**            |                                              |                                                                          |
| mainSignUpSectionStyle            | React.CSSProperties                          | Optional style for the main signup container                             |
| fields                            | Array<{type?: string; [key: string]: any}>   | Array of field configurations for the form                               |
| gridView                          | boolean                                      | Grid view or layout straight                                             |
| labelPosition                     | "internal" \| "over"                         | Position of the input labels                                             |
| **Logo/Title**                    |                                              |                                                                          |
| logo                              | string \| React.ReactNode                    | Optional logo that can be displayed in the signup component              |
| logoStyle                         | React.CSSProperties                          | Optional custom styles for the logo                                      |
| logoSectionClassName              | string                                       | Optional CSS class name for the logo section                             |
| title                             | string                                       | Title for the signup form                                                |
| titleStyle                        | React.CSSProperties                          | Custom styles for the title text                                         |
| titleClassName                    | string                                       | CSS class name for the title                                             |
| titleSectionStyle                 | React.CSSProperties                          | Custom styles for the title section                                      |
| titleSectionClassName             | string                                       | CSS class name for the title section                                     |
| subTitle                          | string                                       | Subtitle for the signup form                                             |
| subTitleStyle                     | React.CSSProperties                          | Custom styles for the subtitle                                           |
| subTitleClassName                 | string                                       | CSS class name for the subtitle                                          |
| **Terms Checkbox**                |                                              |                                                                          |
| termsValue                        | boolean                                      | Value of the terms checkbox (checked or not)                             |
| termsLabel                        | string                                       | Label text for the terms checkbox                                        |
| termsLabelStyle                   | React.CSSProperties                          | Custom styles for the terms checkbox label                               |
| termsLabelClassName               | string                                       | CSS class name for the terms checkbox label                              |
| checkboxStyle                     | React.CSSProperties                          | Custom styles for the terms checkbox                                     |
| checkboxClassName                 | string                                       | CSS class name for the terms checkbox                                    |
| onCheckboxClick                   | (value: any) => void                         | Function called when terms checkbox is clicked                           |
| primaryColorCheckbox              | string                                       | Custom primary color for the checkbox when checked                       |
| checkBokSectionClassName          | string                                       | CSS class name for the terms checkbox section                            |
| checkBoxSectionStyle              | React.CSSProperties                          | Custom styles for the terms checkbox section                             |
| **Button**                        |                                              |                                                                          |
| submitLabel                       | string                                       | Label text for the submit button                                         |
| buttonType                        | "submit" \| "button" \| "reset" \| undefined | Type of the button                                                       |
| buttonSectionStyle                | React.CSSProperties                          | Custom styles for the button section                                     |
| buttonSectionClassName            | string                                       | CSS class name for the button section                                    |
| **Links Section**                 |                                              |                                                                          |
| linksSectionStyle                 | React.CSSProperties                          | Custom styles for the links section                                      |
| linksSectionClassName             | string                                       | CSS class name for the links section                                     |
| **Login Link**                    |                                              |                                                                          |
| haveAccountLabel                  | string                                       | Text for "Already have an account?" message                              |
| loginLabel                        | string                                       | Label text for the login link                                            |
| loginLabelStyle                   | React.CSSProperties                          | Custom styles for the login label                                        |
| loginLabelClassName               | string                                       | CSS class name for the login label                                       |
| loginLabellinkStyle               | React.CSSProperties                          | Custom styles for the login link                                         |
| loginLabellinkClassName           | string                                       | CSS class name for the login link                                        |
| onLogin                           | () => void                                   | Function called when login link is clicked                               |
| **Terms and Conditions**          |                                              |                                                                          |
| termsAndConditionsLabel           | string                                       | Label text for the terms and conditions link                             |
| termsAndConditionsLabelPStyle     | React.CSSProperties                          | Custom styles for the terms and conditions paragraph                     |
| termsAndConditionsLabelPClassName | string                                       | CSS class name for the terms and conditions paragraph                    |
| termsAndConditionsLabelAStyle     | React.CSSProperties                          | Custom styles for the terms and conditions link                          |
| termsAndConditionsLabelAClassName | string                                       | CSS class name for the terms and conditions link                         |
| onTermsAndConditions              | () => void                                   | Function called when terms and conditions link is clicked                |
| **Forgot Password**               |                                              |                                                                          |
| onForgotPassword                  | () => void                                   | Optional function called when the user triggers a forgot password action |

### ForgotPasswordSelection Component Props

| Prop                             | Type                                 | Description                                             |
| -------------------------------- | ------------------------------------ | ------------------------------------------------------- |
| mainContainerStyle               | React.CSSProperties                  | Optional style for the main container                   |
| mainContainerClassName           | string                               | Optional class name for the main container              |
| title                            | string                               | Title text for the forgot password page                 |
| titleStyle                       | React.CSSProperties                  | Optional style for the title                            |
| titleClassName                   | string                               | Optional class name for the title                       |
| subtitleText                     | string                               | Subtitle or description text                            |
| subtitleStyle                    | React.CSSProperties                  | Optional style for the subtitle                         |
| subtitleClassName                | string                               | Optional class name for the subtitle                    |
| optionsContainerStyle            | React.CSSProperties                  | Optional style for the options container                |
| optionsContainerClassName        | string                               | Optional class name for the options container           |
| emailOptionTitle                 | string                               | Email option title text                                 |
| emailOptionDescription           | string                               | Email option description text                           |
| emailOptionContainerStyle        | React.CSSProperties                  | Optional style for the email option container           |
| emailOptionContainerClassName    | string                               | Optional class name for the email option container      |
| emailOptionTitleStyle            | React.CSSProperties                  | Optional style for the email option title               |
| emailOptionTitleClassName        | string                               | Optional class name for the email option title          |
| emailOptionDescriptionStyle      | React.CSSProperties                  | Optional style for the email option description         |
| emailOptionDescriptionClassName  | string                               | Optional class name for the email option description    |
| emailIcon                        | React.ReactNode                      | Optional custom icon for the email option               |
| emailIconContainerStyle          | React.CSSProperties                  | Optional style for the email icon container             |
| emailIconContainerClassName      | string                               | Optional class name for the email icon container        |
| phoneOptionTitle                 | string                               | Phone option title text                                 |
| phoneOptionDescription           | string                               | Phone option description text                           |
| phoneOptionContainerStyle        | React.CSSProperties                  | Optional style for the phone option container           |
| phoneOptionContainerClassName    | string                               | Optional class name for the phone option container      |
| phoneOptionTitleStyle            | React.CSSProperties                  | Optional style for the phone option title               |
| phoneOptionTitleClassName        | string                               | Optional class name for the phone option title          |
| phoneOptionDescriptionStyle      | React.CSSProperties                  | Optional style for the phone option description         |
| phoneOptionDescriptionClassName  | string                               | Optional class name for the phone option description    |
| phoneIcon                        | React.ReactNode                      | Optional custom icon for the phone option               |
| phoneIconContainerStyle          | React.CSSProperties                  | Optional style for the phone icon container             |
| phoneIconContainerClassName      | string                               | Optional class name for the phone icon container        |
| selectedOption                   | 'email' \| 'phone' \| null           | Currently selected option                               |
| onOptionSelect                   | (option: 'email' \| 'phone') => void | Function called when an option is selected              |
| selectedOptionIndicatorStyle     | React.CSSProperties                  | Optional custom style for the selected option indicator |
| selectedOptionIndicatorClassName | string                               | Optional class name for the selected option indicator   |
| sendCodeButtonText               | string                               | Text for the send code button                           |
| onSendCode                       | () => void                           | Function called when send code button is clicked        |
| sendCodeButtonStyle              | React.CSSProperties                  | Optional style for the send code button                 |
| sendCodeButtonClassName          | string                               | Optional class name for the send code button            |
| resendLinkText                   | string                               | Text for the resend link                                |
| onResend                         | () => void                           | Function called when resend link is clicked             |
| resendContainerStyle             | React.CSSProperties                  | Optional style for the resend link container            |
| resendContainerClassName         | string                               | Optional class name for the resend link container       |
| didntReceiveText                 | string                               | Text shown before the resend link                       |
| didntReceiveTextStyle            | React.CSSProperties                  | Optional style for the didn't receive text              |
| didntReceiveTextClassName        | string                               | Optional class name for the didn't receive text         |
| resendLinkStyle                  | React.CSSProperties                  | Optional style for the resend link text                 |
| resendLinkClassName              | string                               | Optional class name for the resend link text            |
| cancelButtonText                 | string                               | Text for the cancel button                              |
| onCancel                         | () => void                           | Function called when cancel button is clicked           |
| cancelButtonStyle                | React.CSSProperties                  | Optional style for the cancel button                    |
| cancelButtonClassName            | string                               | Optional class name for the cancel button               |

### ForgotPasswordTraditional Component Props

| Prop                   | Type                    | Description                                        |
| ---------------------- | ----------------------- | -------------------------------------------------- |
| mainContainerStyle     | React.CSSProperties     | Optional style for the main container              |
| mainContainerClassName | string                  | Optional class name for the main container         |
| title                  | string                  | Title text for the forgot password page            |
| titleStyle             | React.CSSProperties     | Optional style for the title                       |
| titleClassName         | string                  | Optional class name for the title                  |
| descriptionText        | string                  | Description text for the forgot password page      |
| descriptionStyle       | React.CSSProperties     | Optional style for the description text            |
| descriptionClassName   | string                  | Optional class name for the description text       |
| emailInputLabel        | string                  | Label for the email input field                    |
| emailInputValue        | string                  | Current value of the email input                   |
| handleEmailChange      | (value: string) => void | Function called when email input changes           |
| labelPosition          | 'over' \| 'internal'    | Position of the label for the email input          |
| emailInputError        | string                  | Error message to display for the email input       |
| emailInputHelperText   | string                  | Helper text to display below the email input       |
| emailInputPlaceholder  | string                  | Placeholder text for the email input               |
| onResetPassword        | () => void              | Function called when the reset button is clicked   |
| resetButtonText        | string                  | Text for the reset button                          |
| resetButtonStyle       | React.CSSProperties     | Optional style for the reset button                |
| resetButtonClassName   | string                  | Optional class name for the reset button           |
| backToLoginText        | string                  | Text for the back to login link                    |
| onBackToLogin          | () => void              | Function called when back to login link is clicked |
| backToLoginStyle       | React.CSSProperties     | Optional style for the back to login link          |
| backToLoginClassName   | string                  | Optional class name for the back to login link     |
| formContainerStyle     | React.CSSProperties     | Optional style for the form container              |
| formContainerClassName | string                  | Optional class name for the form container         |
| cancelButtonText       | string                  | Text for the cancel button                         |
| onCancel               | () => void              | Function called when cancel button is clicked      |
| cancelButtonStyle      | React.CSSProperties     | Optional style for the cancel button               |
| cancelButtonClassName  | string                  | Optional class name for the cancel button          |

### TwoFactorSetup Component Props

| Prop                          | Type                             | Description                                               |
| ----------------------------- | -------------------------------- | --------------------------------------------------------- |
| mainContainerStyle            | React.CSSProperties              | Optional style for the main container                     |
| mainContainerClassName        | string                           | Optional class name for the main container                |
| title                         | string                           | Title text for the 2FA setup screen                       |
| titleStyle                    | React.CSSProperties              | Optional style for the title                              |
| titleClassName                | string                           | Optional class name for the title                         |
| subtitleText                  | string                           | Subtitle or description text                              |
| subtitleStyle                 | React.CSSProperties              | Optional style for the subtitle                           |
| subtitleClassName             | string                           | Optional class name for the subtitle                      |
| optionsContainerStyle         | React.CSSProperties              | Options container style                                   |
| optionsContainerClassName     | string                           | Options container class name                              |
| selectedMethod                | 'app' \| 'sms' \| null           | Selected authentication method                            |
| onMethodSelect                | (method: 'app' \| 'sms') => void | Function called when an authentication method is selected |
| appOptionTitle                | string                           | App option title text                                     |
| appOptionDescription          | string                           | App option description text                               |
| appOptionContainerStyle       | React.CSSProperties              | Optional style for the app option container               |
| appOptionContainerClassName   | string                           | Optional class name for the app option container          |
| appOptionTitleStyle           | React.CSSProperties              | Optional style for the app option title                   |
| appOptionTitleClassName       | string                           | Optional class name for the app option title              |
| appOptionDescriptionStyle     | React.CSSProperties              | Optional style for the app option description             |
| appOptionDescriptionClassName | string                           | Optional class name for the app option description        |
| smsOptionTitle                | string                           | SMS option title text                                     |
| smsOptionDescription          | string                           | SMS option description text                               |
| smsOptionContainerStyle       | React.CSSProperties              | Optional style for the SMS option container               |
| smsOptionContainerClassName   | string                           | Optional class name for the SMS option container          |
| smsOptionTitleStyle           | React.CSSProperties              | Optional style for the SMS option title                   |
| smsOptionTitleClassName       | string                           | Optional class name for the SMS option title              |
| smsOptionDescriptionStyle     | React.CSSProperties              | Optional style for the SMS option description             |
| smsOptionDescriptionClassName | string                           | Optional class name for the SMS option description        |
| recommendedText               | string                           | Text for the recommended badge                            |
| recommendedBadgeStyle         | React.CSSProperties              | Style for the recommended badge                           |
| recommendedBadgeClassName     | string                           | Class name for the recommended badge                      |
| radioContainerStyle           | React.CSSProperties              | Radio button container style                              |
| radioContainerClassName       | string                           | Radio button container class name                         |
| radioStyle                    | React.CSSProperties              | Radio button style                                        |
| radioClassName                | string                           | Radio button class name                                   |
| continueButtonText            | string                           | Continue button text                                      |
| onContinue                    | () => void                       | Function called when continue button is clicked           |
| continueButtonStyle           | React.CSSProperties              | Style for the continue button                             |
| continueButtonClassName       | string                           | Class name for the continue button                        |
| cancelButtonText              | string                           | Cancel button text                                        |
| onCancel                      | () => void                       | Function called when cancel button is clicked             |
| cancelButtonStyle             | React.CSSProperties              | Style for the cancel button                               |
| cancelButtonClassName         | string                           | Class name for the cancel button                          |
| buttonsContainerStyle         | React.CSSProperties              | Buttons container style                                   |
| buttonsContainerClassName     | string                           | Buttons container class name                              |

### TwoFactorVerify Component Props

| Prop                           | Type                    | Description                                                                |
| ------------------------------ | ----------------------- | -------------------------------------------------------------------------- |
| mainContainerStyle             | React.CSSProperties     | Optional style for the main container                                      |
| mainContainerClassName         | string                  | Optional class name for the main container                                 |
| labelPosition                  | "over" \| "internal"    | Label position to determine if the label is over or inside the input field |
| title                          | string                  | Title text for the 2FA verification screen                                 |
| titleStyle                     | React.CSSProperties     | Optional style for the title                                               |
| titleClassName                 | string                  | Optional class name for the title                                          |
| maskedDestination              | string                  | Phone number or email where code was sent (will be partially masked)       |
| maskedDestinationStyle         | React.CSSProperties     | Optional style for the masked destination text                             |
| maskedDestinationClassName     | string                  | Optional class name for the masked destination text                        |
| notificationText               | string                  | Text for the notification about code being sent                            |
| notificationTextStyle          | React.CSSProperties     | Optional style for the notification text                                   |
| notificationTextClassName      | string                  | Optional class name for the notification text                              |
| instructionsText               | string                  | Text for the verification instructions                                     |
| instructionsTextStyle          | React.CSSProperties     | Optional style for the instructions text                                   |
| instructionsTextClassName      | string                  | Optional class name for the instructions text                              |
| verificationCodeLabel          | string                  | Label for the verification code input                                      |
| verificationCodeLabelStyle     | React.CSSProperties     | Optional style for the verification code label                             |
| verificationCodeLabelClassName | string                  | Optional class name for the verification code label                        |
| verificationCodeValue          | string                  | Current value of the verification code                                     |
| handleVerificationCodeChange   | (value: string) => void | Function called when verification code changes                             |
| verificationCodeError          | string                  | Error message to display for the verification code                         |
| useDigitInput                  | boolean                 | Whether to use the digit input (true) or the standard input (false)        |
| digitCount                     | number                  | Number of digits in the verification code (for digit input)                |
| digitInputStyle                | React.CSSProperties     | Style for each digit input box                                             |
| digitInputClassName            | string                  | Class name for each digit input box                                        |
| digitInputContainerStyle       | React.CSSProperties     | Style for the digit input container                                        |
| digitInputContainerClassName   | string                  | Class name for the digit input container                                   |
| additionalInfoText             | string                  | Additional text shown below the verification code                          |
| additionalInfoTextStyle        | React.CSSProperties     | Optional style for the additional info text                                |
| additionalInfoTextClassName    | string                  | Optional class name for the additional info text                           |
| continueButtonText             | string                  | Continue button text                                                       |
| onContinue                     | () => void              | Function called when continue button is clicked                            |
| continueButtonStyle            | React.CSSProperties     | Style for the continue button                                              |
| continueButtonClassName        | string                  | Class name for the continue button                                         |
| backButtonText                 | string                  | Back button text                                                           |
| onBack                         | () => void              | Function called when back button is clicked                                |
| backButtonStyle                | React.CSSProperties     | Style for the back button                                                  |
| backButtonClassName            | string                  | Class name for the back button                                             |
| buttonsContainerStyle          | React.CSSProperties     | Buttons container style                                                    |
| buttonsContainerClassName      | string                  | Buttons container class name                                               |

### DigitInput Component Props

| Prop               | Type                    | Description                                                  |
| ------------------ | ----------------------- | ------------------------------------------------------------ |
| digitCount         | number                  | Number of digits to display                                  |
| value              | string                  | Current value of the verification code                       |
| onChange           | (value: string) => void | Function called when verification code changes               |
| digitStyle         | React.CSSProperties     | Optional style for each digit input box                      |
| digitClassName     | string                  | Optional class name for each digit input box                 |
| containerStyle     | React.CSSProperties     | Optional style for the digit input container                 |
| containerClassName | string                  | Optional class name for the digit input container            |
| digitPlaceholder   | string                  | Optional placeholder for each digit input (default is empty) |
| error              | boolean                 | Error state for the input                                    |
| errorMessage       | string                  | Error message to display                                     |
| errorStyle         | React.CSSProperties     | Style for the error message                                  |
| errorClassName     | string                  | Class name for the error message                             |
| disabled           | boolean                 | Whether the input is disabled                                |
| onComplete         | (value: string) => void | Callback when all digits are filled                          |

### CustomText Component Props

| Prop               | Type                                                                   | Description                               |
| ------------------ | ---------------------------------------------------------------------- | ----------------------------------------- |
| text               | string                                                                 | The text content to display               |
| textStyle          | React.CSSProperties                                                    | Optional custom styles for the text       |
| textClassName      | string                                                                 | Optional CSS class name for the text      |
| as                 | 'p' \| 'span' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'div' | HTML element to use for the text          |
| containerStyle     | React.CSSProperties                                                    | Optional custom styles for the container  |
| containerClassName | string                                                                 | Optional CSS class name for the container |
| children           | React.ReactNode                                                        | Optional child elements                   |
| onClick            | () => void                                                             | Optional onClick handler                  |

## Authentication Flow Integration

Auth Library provides the UI components, but you'll need to connect them to your authentication system. Here's a high-level example of how to integrate with your auth flow:

```jsx
import React, { useState } from 'react';
import {
  CustomLogin,
  CustomSignUp, The
  ForgotPasswordSelection,
  ForgotPasswordTraditional,
  TwoFactorSetup,
  TwoFactorVerify
} from 'authhaven';

function AuthFlow() {
  // State to track which screen to show
  const [currentScreen, setCurrentScreen] = useState('login');

  // States for form values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPasswordOption, setForgotPasswordOption] = useState(null);
  const [twoFactorMethod, setTwoFactorMethod] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');

  // Form submission handlers
  const handleLogin = () => {
    console.log('Login submitted with:', email, password, rememberMe);

    // Check if 2FA is enabled for this user
    const requires2FA = true; // This would come from your auth service

    if (requires2FA) {
      setCurrentScreen('twoFactorSetup');
    } else {
      // Navigate to authenticated area
      console.log('Login successful!');
    }
  };

  const handleForgotPassword = () => {
    setCurrentScreen('forgotPasswordSelection');
  };

  const handleSendResetCode = () => {
    console.log('Sending reset code via:', forgotPasswordOption);
    setCurrentScreen('login');
  };

  const handleTwoFactorContinue = () => {
    console.log('Setting up 2FA method:', twoFactorMethod);
    setCurrentScreen('twoFactorVerify');
  };

  const handleVerifyCode = () => {
    console.log('Verifying code:', verificationCode);

    if (verificationCode === '1234') { // This is just an example check
      console.log('Verification successful!');
      // Navigate to authenticated area
    } else {
      console.log('Invalid verification code');
    }
  };

  const resetToLogin = () => {
    setCurrentScreen('login');
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  // Render the appropriate component based on the current screen
  const renderAuthScreen = () => {
    switch (currentScreen) {
      case 'login':
        return (
          <CustomLogin
            emailInputValue={email}
            passwordInputValue={password}
            handleInputEmailChange={setEmail}
            handleInputPasswordChange={setPassword}
            rememberMeValue={rememberMe}
            onCheckboxClick={() => setRememberMe(!rememberMe)}
            buttonOnClick={handleLogin}
            onForgotPassword={handleForgotPassword}
            onCreateAccount={() => setCurrentScreen('signup')}
            title="Welcome Back"
            subTitle="Enter your credentials to continue"
          />
        );

      case 'forgotPasswordSelection':
        return (
          <ForgotPasswordSelection
            selectedOption={forgotPasswordOption}
            onOptionSelect={setForgotPasswordOption}
            onSendCode={handleSendResetCode}
            onCancel={resetToLogin}
          />
        );

      case 'forgotPasswordTraditional':
        return (
          <ForgotPasswordTraditional
            emailInputValue={email}
            handleEmailChange={setEmail}
            onResetPassword={() => {
              console.log('Resetting password for:', email);
              resetToLogin();
            }}
            onBackToLogin={resetToLogin}
            onCancel={resetToLogin}
          />
        );

      case 'twoFactorSetup':
        return (
          <TwoFactorSetup
            selectedMethod={twoFactorMethod}
            onMethodSelect={setTwoFactorMethod}
            onContinue={handleTwoFactorContinue}
            onCancel={resetToLogin}
          />
        );

      case 'twoFactorVerify':
        return (
          <TwoFactorVerify
            verificationCodeValue={verificationCode}
            handleVerificationCodeChange={setVerificationCode}
            useDigitInput={true}
            digitCount={4}
            maskedDestination="+1•••••5678"  // This would be dynamic based on the user
            onContinue={handleVerifyCode}
            onBack={() => setCurrentScreen('twoFactorSetup')}
          />
        );

      case 'signup':
        return (
          <CustomSignUp
            fields={[/* your signup fields */]}
            onLogin={resetToLogin}
            buttonOnClick={() => {
              console.log('Signup submitted');
              setCurrentScreen('twoFactorSetup');
            }}
          />
        );

      default:
        return <CustomLogin />;
    }
  };

  return <div className="auth-container">{renderAuthScreen()}</div>;
}

export default AuthFlow;
```

## Customization

All components in Auth Library are designed to be fully customizable. You can style them to match your app's design system using the style and className props.

### Styling Example

```jsx
<CustomLogin
  // Container styling
  mainLoginSectionStyle={{
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    maxWidth: "450px",
  }}
  // Title styling
  titleStyle={{
    fontSize: "28px",
    fontWeight: "bold",
    color: "#343a40",
  }}
  // Input styling
  emailInputContainerStyle={{
    marginBottom: "16px",
  }}
  emailInputFieldStyle={{
    borderRadius: "8px",
    borderColor: "#ced4da",
    padding: "12px",
  }}
  // Button styling
  buttonStyle={{
    backgroundColor: "#3f51b5",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "16px",
  }}
/>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions to improve the library! Please feel free to submit issues and pull requests.

License
MIT © Ameya R Shetye

<p align="center">
  Made with ❤️ by <a href="https://ameyashetye.com">Ameya Ravindra Shetye</a>
</p>
