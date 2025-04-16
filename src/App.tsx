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
        // labelMatchBackground="orange"
        onCheckboxClick={onCheckboxClick}
        rememberMeValue={checkBoxValue}
        // mainLoginSectionStyle={{
        //   // backgroundColor: "orange",
        //   width: "450px",
        //   padding: "12px",
        //   border: "2px solid teal",
        //   borderRadius: "5px",
        // }}
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
