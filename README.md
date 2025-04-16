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

### CustomButton Props

| Prop      | Type      | Default   | Description                                                      |
| --------- | --------- | --------- | ---------------------------------------------------------------- |
| variant   | string    | 'primary' | Button style variant ('primary', 'secondary', 'outline', 'text') |
| size      | string    | 'md'      | Button size ('sm', 'md', 'lg')                                   |
| fullWidth | boolean   | false     | Whether the button takes full width                              |
| isLoading | boolean   | false     | Shows loading indicator when true                                |
| onClick   | function  | undefined | Click handler function                                           |
| className | string    | ''        | Additional CSS classes                                           |
| children  | ReactNode | undefined | Button content                                                   |

### CustomInputLabelOver/Internal Props

| Prop        | Type     | Default   | Description                    |
| ----------- | -------- | --------- | ------------------------------ |
| label       | string   | undefined | Label text                     |
| placeholder | string   | ''        | Input placeholder text         |
| value       | string   | undefined | Input value                    |
| onChange    | function | undefined | Change handler function        |
| error       | string   | undefined | Error message to display       |
| fullWidth   | boolean  | false     | Whether input takes full width |
| className   | string   | ''        | Additional CSS classes         |

### Login Props

| Prop             | Type     | Default                  | Description                                                |
| ---------------- | -------- | ------------------------ | ---------------------------------------------------------- |
| onSubmit         | function | undefined                | Function called with email and password on form submission |
| onForgotPassword | function | undefined                | Function called when forgot password is clicked            |
| onSignUpClick    | function | undefined                | Function called when sign up link is clicked               |
| loading          | boolean  | false                    | Enables loading state on submit button                     |
| title            | string   | 'Log in to your account' | Title displayed at the top of the form                     |
| logoUrl          | string   | undefined                | URL to your logo image                                     |
| className        | string   | ''                       | Additional CSS classes                                     |

### SignUp Props

| Prop         | Type     | Default               | Description                                                      |
| ------------ | -------- | --------------------- | ---------------------------------------------------------------- |
| onSubmit     | function | undefined             | Function called with name, email and password on form submission |
| onLoginClick | function | undefined             | Function called when login link is clicked                       |
| loading      | boolean  | false                 | Enables loading state on submit button                           |
| title        | string   | 'Create your account' | Title displayed at the top of the form                           |
| logoUrl      | string   | undefined             | URL to your logo image                                           |
| requireName  | boolean  | true                  | Whether the name field is required                               |
| className    | string   | ''                    | Additional CSS classes                                           |

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
