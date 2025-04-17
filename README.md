# Auth Library

A modern React component library providing customizable authentication UI components including inputs, buttons, login and signup pages.

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

### Authentication Pages

- **Login**: Complete login page with form validation
- **SignUp**: Ready-to-use signup page with validation

## Usage Examples

### Basic Components

```jsx
import React, { useState } from "react";
import "./App.css";
import CustomLogin from "./Login/Login";
import CustomSignUp from "./Signup/SignUp";
import { User, Mail, Lock, Phone } from "lucide-react";

function App() {
  // Sample logo component
  const [emailValue, setEmailvalue] = useState("");
  const [passwordValue, setPasswordValuevalue] = useState("");
  const [checkBoxValue, setcheckBoxValue] = useState(false);
  const CustomLogo = () => {
    return (
      <div className="p-3 bg-blue-100 rounded-lg inline-block">
        <span className="text-2xl font-bold text-blue-600">Auth</span>
        <span className="text-red-500 text-2xl font-bold">•••</span>
      </div>
    );
  };

  const handleEmail = (value: any) => {
    setEmailvalue(value);
  };
  const handlePassword = (value: any) => {
    setPasswordValuevalue(value);
  };
  const onCheckboxClick = (e: any) => {
    setcheckBoxValue(!checkBoxValue);
  };
  const onSubmit = (e: any) => {
    console.log("onSubmit clicked!!");
  };
  const onCreateAccount = () => {
    console.log("onCreateAccount clicked!!");
  };
  const onForgotPassword = () => {
    console.log("onForgotPassword clicked!!");
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // State for field errors
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Field validation handlers
  const handleFirstNameChange = (value: any) => {
    setFirstName(value);
    if (!value && firstNameError) setFirstNameError("");
  };

  const handleLastNameChange = (value: any) => {
    setLastName(value);
    if (!value && lastNameError) setLastNameError("");
  };

  const handleEmailChange = (value: any, isValid: any) => {
    setEmail(value);
    if (!isValid && value) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (value: any) => {
    setPassword(value);
    if (value.length < 8 && value) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }

    // Check confirm password match
    if (confirmPassword && confirmPassword !== value) {
      setConfirmPasswordError("Passwords do not match");
    } else if (confirmPassword) {
      setConfirmPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (value: any) => {
    setConfirmPassword(value);
    if (password && value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Form fields configuration
  const fields = [
    {
      type: "text",
      inputLabel: "First Name",
      inputValue: firstName,
      inputOnChange: handleFirstNameChange,
      inputRequired: true,
      inputError: firstNameError,
      inputLeftIcon: <User size={20} />,
      inputPlaceholder: "John",
      inputHelperText: "Enter your first name",
    },
    {
      type: "text",
      inputLabel: "Last Name",
      inputValue: lastName,
      inputOnChange: handleLastNameChange,
      inputRequired: true,
      inputError: lastNameError,
      inputLeftIcon: <User size={20} />,
      inputPlaceholder: "Doe",
      inputHelperText: "Enter your last name",
    },
    {
      type: "email",
      inputLabel: "Email Address",
      inputValue: email,
      inputOnChange: handleEmailChange,
      inputRequired: true,
      inputError: emailError,
      inputLeftIcon: <Mail size={20} />,
      inputPlaceholder: "john.doe@example.com",
      inputRegex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      inputHelperText: "We'll never share your email",
    },
    {
      type: "password",
      inputLabel: "Password",
      inputValue: password,
      inputOnChange: handlePasswordChange,
      inputRequired: true,
      inputError: passwordError,
      inputLeftIcon: <Lock size={20} />,
      inputHelperText: "Password must be at least 8 characters",
    },
    {
      type: "password",
      inputLabel: "Confirm Password",
      inputValue: confirmPassword,
      inputOnChange: handleConfirmPasswordChange,
      inputRequired: true,
      inputError: confirmPasswordError,
      inputLeftIcon: <Lock size={20} />,
      inputHelperText: "Re-type your password",
    },
  ];

  // Button click handler
  const handleButtonClick = () => {
    // Validate all fields
    let hasError = false;

    if (!firstName) {
      setFirstNameError("First name is required");
      hasError = true;
    }

    if (!lastName) {
      setLastNameError("Last name is required");
      hasError = true;
    }

    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    }

    if (!termsAccepted) {
      alert("Please accept the terms and conditions");
      hasError = true;
    }

    if (!hasError) {
      console.log("Form submitted with:", {
        firstName,
        lastName,
        email,
        password,
        termsAccepted,
      });
      // Submit form to backend
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Login component */}
      <CustomLogin
        logo={<CustomLogo />}
        emailInputValue={emailValue}
        passwordInputValue={passwordValue}
        handleInputEmailChange={handleEmail}
        handleInputPasswordChange={handlePassword}
        title="Welcome Back"
        subTitle="you were gone for a long time."
        rememberMeLabel=" Remember Me you!"
        submitLabel="Log-in"
        labelPosition="internal"
        emailInputLabel="email"
        passwordInputLabel="password"
        labelMatchBackground="white"
        onCheckboxClick={onCheckboxClick}
        rememberMeValue={checkBoxValue}
        buttonOnClick={onSubmit}
        onCreateAccount={onCreateAccount}
        onForgotPassword={onForgotPassword}
        passwordInputHideOnError={false}
        passwordInputHelperText="Password should contain"
        passwordInputError="Error for password"
      />
      <CustomSignUp
        gridView
        title="Create Account"
        subTitle="Sign up to get started"
        fields={fields}
        labelPosition="internal"
        termsLabel="I agree to the Terms and Conditions"
        termsValue={termsAccepted}
        onCheckboxClick={() => setTermsAccepted(!termsAccepted)}
        primaryColorCheckbox="#4F46E5"
        submitLabel="Sign Up"
        buttonFullWidth={true}
        buttonColor="primary"
        primaryButtonColor="#4F46E5"
        buttonOnClick={handleButtonClick}
        buttonType="button"
        onLogin={() => console.log("Navigate to login page")}
        onTermsAndConditions={() => console.log("Show terms and conditions")}
      />
    </div>
  );
}

export default App;
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

### CustomInputLabelOver/Internal Props

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

_Note: The Login component also inherits all props from the Button and Input components._

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

_Note: The SignUp component also inherits all props from the Button and Input components._

## Customization

You can customize components using the className prop to apply additional styles:

```jsx
<CustomButton className="my-custom-button" variant="primary">
  Submit
</CustomButton>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions to improve the library! Please feel free to submit issues and pull requests.

## License

MIT
