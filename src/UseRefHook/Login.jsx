import React, { useRef } from "react";
import "./LoginForm.css";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Focus email input when component mounts
  React.useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Handle focus and blur to change styles
  const handleFocus = (ref) => {
    ref.current.style.backgroundColor = "#e0f7fa"; // Light blue
    ref.current.style.fontFamily = "Courier New, monospace";
  };

  const handleBlur = (ref) => {
    ref.current.style.backgroundColor = "white";
    ref.current.style.fontFamily = "Arial, sans-serif";
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          ref={emailRef}
          placeholder="Enter your email"
          className="input-field"
          onFocus={() => handleFocus(emailRef)}
          onBlur={() => handleBlur(emailRef)}
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your password"
          className="input-field"
          onFocus={() => handleFocus(passwordRef)}
          onBlur={() => handleBlur(passwordRef)}
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
