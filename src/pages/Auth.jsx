import { useState } from "react";
import "../styles/Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <span
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </span>
        <span
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </span>
      </div>

      <div className={`auth-box ${isLogin ? "login" : "signup"}`}>
        <div className="auth-info">
          <h1>Hi,</h1>
          <h4>Welcome to devCode</h4>
          <p>
            Write, run, and build something awesome.
          </p>
        </div>

        <div className="auth-form">
          {isLogin ? (
            <>
              <h4>Welcome back!</h4>
              <input type="text" placeholder="User name" />
              <input type="password" placeholder="Password" />
              <a href=".." className="forgot">
                Forgot password?
              </a>

              <button className="btn btn-primary">
                Log in
              </button>
            </>
          ) : (
            <>
              <h4>Welcome!</h4>
              <input type="text" placeholder="Your Full Name" />
              <input type="text" placeholder="User Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />

              <button className="btn btn-primary">
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
