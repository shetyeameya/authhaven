import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

// Import components directly from their source files for development
import CustomLogin from "../Login/Login";
import CustomSignUp from "../Signup/SignUp";
import ForgotPasswordSelection from "../ForgotPassword/ForgotPasswordSelection";
import ForgotPasswordTraditional from "../ForgotPassword/ForgotPasswordTraditional";
import TwoFactorSetup from "../Twofactor/TwofactorSetUp";
import TwoFactorVerify from "../Twofactor/TwoFactorVerify";
import CustomText from "../Reusable/CustomTextBox";

function App() {
  // State for active demo section
  const [activeSection, setActiveSection] = useState<string>("twoFactorSetup");

  // State for Login component
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  // State for ForgotPasswordSelection
  const [selectedOption, setSelectedOption] = useState<
    "email" | "phone" | null
  >(null);

  // State for ForgotPasswordTraditional
  const [forgotEmail, setForgotEmail] = useState("");

  // State for TwoFactorSetup
  const [authMethod, setAuthMethod] = useState<"app" | "sms" | null>(null);

  // State for TwoFactorVerify
  const [verificationCode, setVerificationCode] = useState("");
  const [useDigitInput, setUseDigitInput] = useState(true);
  const [digitCount, setDigitCount] = useState(4);

  // State for SignUp component
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Error states
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [verificationError, setVerificationError] = useState("");

  // Custom logo component
  const CustomLogo = () => (
    <div
      style={{
        padding: "12px",
        backgroundColor: "#EBF5FF",
        borderRadius: "8px",
        display: "inline-block",
      }}
    >
      <span style={{ fontSize: "24px", fontWeight: "bold", color: "#2563EB" }}>
        Auth
      </span>
      <span style={{ color: "#EF4444", fontSize: "24px", fontWeight: "bold" }}>
        •••
      </span>
    </div>
  );

  // Login handlers
  const handleEmail = (value: string) => setEmailValue(value);
  const handlePassword = (value: string) => setPasswordValue(value);
  const onCheckboxClick = () => setCheckBoxValue(!checkBoxValue);

  // Two-Factor Auth handlers
  const handleContinueSetup = () => {
    if (authMethod) {
      navigateTo("twoFactorVerify");
    }
  };

  const handleVerificationCodeChange = (value: string) => {
    setVerificationCode(value);
    setVerificationError("");

    // Validate code (just for demo purposes)
    if (value.length === digitCount && !/^\d+$/.test(value)) {
      setVerificationError("Code must contain only digits");
    }
  };

  const handleVerifyContinue = () => {
    // For demo: show an error if code is not "1234"
    if (verificationCode !== "1234") {
      setVerificationError("Invalid verification code");
    } else {
      alert("Verification successful!");
      navigateTo("login");
    }
  };

  // Toggle between digit input and regular input
  const toggleInputType = () => {
    setUseDigitInput(!useDigitInput);
    setVerificationCode("");
  };

  // Change digit count
  const changeDigitCount = () => {
    const counts = [4, 6];
    const currentIndex = counts.indexOf(digitCount);
    const nextIndex = (currentIndex + 1) % counts.length;
    setDigitCount(counts[nextIndex]);
    setVerificationCode("");
  };

  // SignUp handlers
  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
    if (!value && firstNameError) setFirstNameError("");
  };

  const handleLastNameChange = (value: string) => {
    setLastName(value);
    if (!value && lastNameError) setLastNameError("");
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value) && value) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value.length < 8 && value) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (password && value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Form fields for SignUp
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
    },
    {
      type: "password",
      inputLabel: "Password",
      inputValue: password,
      inputOnChange: handlePasswordChange,
      inputRequired: true,
      inputError: passwordError,
      inputLeftIcon: <Lock size={20} />,
    },
    {
      type: "password",
      inputLabel: "Confirm Password",
      inputValue: confirmPassword,
      inputOnChange: handleConfirmPasswordChange,
      inputRequired: true,
      inputError: confirmPasswordError,
      inputLeftIcon: <Lock size={20} />,
    },
  ];

  // Navigation between demo sections
  const navigateTo = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ marginBottom: "30px", textAlign: "center" }}>
        Auth Library Demo
      </h1>

      {/* Navigation Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => navigateTo("twoFactorSetup")}
          style={{
            padding: "10px 20px",
            backgroundColor:
              activeSection === "twoFactorSetup" ? "#3B82F6" : "#E5E7EB",
            color: activeSection === "twoFactorSetup" ? "white" : "#1F2937",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          2FA Setup
        </button>
        <button
          onClick={() => navigateTo("twoFactorVerify")}
          style={{
            padding: "10px 20px",
            backgroundColor:
              activeSection === "twoFactorVerify" ? "#3B82F6" : "#E5E7EB",
            color: activeSection === "twoFactorVerify" ? "white" : "#1F2937",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          2FA Verify
        </button>
        <button
          onClick={() => navigateTo("forgotPasswordSelection")}
          style={{
            padding: "10px 20px",
            backgroundColor:
              activeSection === "forgotPasswordSelection"
                ? "#3B82F6"
                : "#E5E7EB",
            color:
              activeSection === "forgotPasswordSelection" ? "white" : "#1F2937",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Forgot Password (Selection)
        </button>
        <button
          onClick={() => navigateTo("forgotPasswordTraditional")}
          style={{
            padding: "10px 20px",
            backgroundColor:
              activeSection === "forgotPasswordTraditional"
                ? "#3B82F6"
                : "#E5E7EB",
            color:
              activeSection === "forgotPasswordTraditional"
                ? "white"
                : "#1F2937",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Forgot Password (Traditional)
        </button>
        <button
          onClick={() => navigateTo("login")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeSection === "login" ? "#3B82F6" : "#E5E7EB",
            color: activeSection === "login" ? "white" : "#1F2937",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Login
        </button>
        <button
          onClick={() => navigateTo("signup")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeSection === "signup" ? "#3B82F6" : "#E5E7EB",
            color: activeSection === "signup" ? "white" : "#1F2937",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          SignUp
        </button>
      </div>

      {/* Component Display Area */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {activeSection === "twoFactorSetup" && (
          <TwoFactorSetup
            selectedMethod={authMethod}
            onMethodSelect={setAuthMethod}
            onContinue={handleContinueSetup}
            onCancel={() => navigateTo("login")}
          />
        )}

        {activeSection === "twoFactorVerify" && (
          <div>
            {/* Configuration Controls (for demo only) */}
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
              <button
                onClick={toggleInputType}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#3B82F6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                {useDigitInput ? "Use Regular Input" : "Use Digit Input"}
              </button>

              {useDigitInput && (
                <button
                  onClick={changeDigitCount}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#3B82F6",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Toggle Digit Count ({digitCount})
                </button>
              )}
            </div>

            <TwoFactorVerify
              verificationCodeValue={verificationCode}
              handleVerificationCodeChange={handleVerificationCodeChange}
              verificationCodeError={verificationError}
              onContinue={handleVerifyContinue}
              onBack={() => navigateTo("twoFactorSetup")}
              useDigitInput={useDigitInput}
              digitCount={digitCount}
              maskedDestination="+xxxxxxx649"
            />
          </div>
        )}

        {activeSection === "forgotPasswordSelection" && (
          <ForgotPasswordSelection
            selectedOption={selectedOption}
            onOptionSelect={setSelectedOption}
            onSendCode={() => console.log(`Sending code via ${selectedOption}`)}
            onResend={() => console.log("Resend code")}
            onCancel={() => navigateTo("login")}
          />
        )}

        {activeSection === "forgotPasswordTraditional" && (
          <ForgotPasswordTraditional
            emailInputValue={forgotEmail}
            handleEmailChange={setForgotEmail}
            onResetPassword={() =>
              console.log("Reset password for email:", forgotEmail)
            }
            onBackToLogin={() => navigateTo("login")}
            onCancel={() => navigateTo("login")}
            labelPosition="over"
          />
        )}

        {activeSection === "login" && (
          <CustomLogin
            logo={<CustomLogo />}
            emailInputValue={emailValue}
            passwordInputValue={passwordValue}
            handleInputEmailChange={handleEmail}
            handleInputPasswordChange={handlePassword}
            title="Welcome Back"
            subTitle="Enter your credentials to continue"
            rememberMeLabel="Remember Me"
            rememberMeValue={checkBoxValue}
            onCheckboxClick={onCheckboxClick}
            submitLabel="Sign In"
            buttonOnClick={() => navigateTo("twoFactorSetup")}
            onCreateAccount={() => navigateTo("signup")}
            onForgotPassword={() => navigateTo("forgotPasswordSelection")}
            labelPosition="internal"
          />
        )}

        {activeSection === "signup" && (
          <CustomSignUp
            gridView
            title="Create Account"
            subTitle="Sign up to get started"
            fields={fields}
            labelPosition="internal"
            termsLabel="I agree to the Terms and Conditions"
            termsValue={termsAccepted}
            onCheckboxClick={() => setTermsAccepted(!termsAccepted)}
            submitLabel="Sign Up"
            buttonFullWidth={true}
            buttonColor="primary"
            buttonOnClick={() => navigateTo("twoFactorSetup")}
            buttonType="button"
            onLogin={() => navigateTo("login")}
            onTermsAndConditions={() => console.log("Show terms")}
          />
        )}
      </div>

      {/* Component Documentation */}
      <div
        style={{
          marginTop: "60px",
          padding: "20px",
          backgroundColor: "#F9FAFB",
          borderRadius: "8px",
        }}
      >
        <CustomText
          as="h2"
          text="Component Documentation"
          textStyle={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        />

        {activeSection === "twoFactorSetup" && (
          <div>
            <CustomText
              as="h3"
              text="TwoFactorSetup Component"
              textStyle={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            />
            <p>
              This component provides a selection interface for users to choose
              how they want to receive 2FA codes - via an authentication app or
              SMS.
            </p>
            <pre
              style={{
                backgroundColor: "#1F2937",
                color: "white",
                padding: "16px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {`<TwoFactorSetup
  selectedMethod={authMethod}
  onMethodSelect={setAuthMethod}
  onContinue={handleContinue}
  onCancel={handleCancel}
  appOptionTitle="Authentication App"
  smsOptionTitle="SMS Text Messages"
  recommendedText="RECOMMENDED"
  continueButtonText="Continue"
  cancelButtonText="Cancel"
/>`}
            </pre>
          </div>
        )}

        {activeSection === "twoFactorVerify" && (
          <div>
            <CustomText
              as="h3"
              text="TwoFactorVerify Component"
              textStyle={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            />
            <p>
              This component provides an interface for users to enter a
              verification code. It supports both regular input and specialized
              digit input.
            </p>
            <pre
              style={{
                backgroundColor: "#1F2937",
                color: "white",
                padding: "16px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {`<TwoFactorVerify
  verificationCodeValue={verificationCode}
  handleVerificationCodeChange={handleVerificationCodeChange}
  verificationCodeError={verificationError}
  onContinue={handleVerifyContinue}
  onBack={handleBack}
  useDigitInput={true}  // Toggle between regular input and digit input
  digitCount={4}        // Number of digits (4 or 6 typically)
  maskedDestination="+xxxxxxx649"
  additionalInfoText="We use this code to verify your identity"
/>`}
            </pre>
          </div>
        )}

        {activeSection === "forgotPasswordSelection" && (
          <div>
            <CustomText
              as="h3"
              text="ForgotPasswordSelection Component"
              textStyle={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            />
            <p>
              This component allows users to choose how they want to reset their
              password - via email or phone.
            </p>
            <pre
              style={{
                backgroundColor: "#1F2937",
                color: "white",
                padding: "16px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {`<ForgotPasswordSelection
  selectedOption={selectedOption}
  onOptionSelect={setSelectedOption}
  onSendCode={handleSendCode}
  onResend={handleResend}
  onCancel={handleCancel}
  title="Forgot Password?"
  subtitleText="Please select option to send link reset password"
  emailOptionTitle="Reset Via Email"
  phoneOptionTitle="Reset Via Phone"
  sendCodeButtonText="Send Code"
  cancelButtonText="Cancel"
/>`}
            </pre>
          </div>
        )}

        {activeSection === "forgotPasswordTraditional" && (
          <div>
            <CustomText
              as="h3"
              text="ForgotPasswordTraditional Component"
              textStyle={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            />
            <p>
              This component provides a traditional email input interface for
              users to request a password reset.
            </p>
            <pre
              style={{
                backgroundColor: "#1F2937",
                color: "white",
                padding: "16px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {`<ForgotPasswordTraditional
  emailInputValue={forgotEmail}
  handleEmailChange={setForgotEmail}
  onResetPassword={handleResetPassword}
  onBackToLogin={navigateToLogin}
  onCancel={handleCancel}
  labelPosition="over"
  title="Forgot your password?"
  descriptionText="A code will be sent to your email to help reset password"
  resetButtonText="Reset password"
  backToLoginText="Back to login"
/>`}
            </pre>
          </div>
        )}

        {activeSection === "login" && (
          <div>
            <CustomText
              as="h3"
              text="Login Component"
              textStyle={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            />
            <p>
              This component provides a complete login form with email and
              password fields, remember me checkbox, and links to sign up or
              reset password.
            </p>
            <pre
              style={{
                backgroundColor: "#1F2937",
                color: "white",
                padding: "16px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {`<CustomLogin
  logo={<YourLogoComponent />}
  emailInputValue={emailValue}
  passwordInputValue={passwordValue}
  handleInputEmailChange={handleEmail}
  handleInputPasswordChange={handlePassword}
  title="Welcome Back"
  subTitle="Enter your credentials to continue"
  rememberMeLabel="Remember Me"
  rememberMeValue={checkBoxValue}
  onCheckboxClick={handleCheckbox}
  submitLabel="Sign In"
  buttonOnClick={handleLogin}
  onCreateAccount={navigateToSignup}
  onForgotPassword={navigateToForgotPassword}
  labelPosition="internal"  // or "over"
/>`}
            </pre>
          </div>
        )}

        {activeSection === "signup" && (
          <div>
            <CustomText
              as="h3"
              text="SignUp Component"
              textStyle={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            />
            <p>
              This component provides a complete signup form with customizable
              fields, terms and conditions checkbox, and a link to login.
            </p>
            <pre
              style={{
                backgroundColor: "#1F2937",
                color: "white",
                padding: "16px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {`<CustomSignUp
  gridView={true}  // Optional grid layout for fields
  title="Create Account"
  subTitle="Sign up to get started"
  fields={[
    {
      type: "text",
      inputLabel: "First Name",
      inputValue: firstName,
      inputOnChange: handleFirstNameChange,
      inputRequired: true,
      inputError: firstNameError
    },
    // More fields...
  ]}
  labelPosition="internal"  // or "over"
  termsLabel="I agree to the Terms and Conditions"
  termsValue={termsAccepted}
  onCheckboxClick={handleTermsCheckbox}
  submitLabel="Sign Up"
  buttonOnClick={handleSignUp}
  onLogin={navigateToLogin}
  onTermsAndConditions={showTermsAndConditions}
/>`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
