import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import {  useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

  return (
    <div className="devcode-page">
      <div className="bg-dots" />
      <div className="bg-glow" />
      <div className="bg-arc" />

      <header className="container-fluid px-4 px-md-5 pt-4 position-relative" style={{ zIndex: 5 }}>
        <nav className="topbar">
          <div className="topbar-left">
            <div className="d-flex align-items-center gap-2">
              <div className="brand-mark" />
              <div className="brand-text">devCode</div>
            </div>
          </div>

          <div className="topbar-center">
            <div className="nav-pill px-3 py-2">
              <a className="nav-linkx" href="#products">
                Products
              </a>
              <a className="nav-linkx" href="#features">
                Features
              </a>
              <a className="nav-linkx" href="#pricing">
                Pricing
              </a>
              <a className="nav-linkx" href="#faq">
                FAQ
              </a>
              <a className="nav-linkx" href="#about">
                About us
              </a>
            </div>
          </div>

          <div className="topbar-right">
            <button type="button" className="btn btn-outline-light btn-sm btn-pill"  onClick={() => navigate("/login")}>
              Login
            </button>
            <button type="button" className="btn btn-light btn-sm btn-pill"  onClick={() => navigate("/signup")} >
              Sign up
            </button>
          </div>
        </nav>
      </header>

      <main className="container-fluid px-4 px-md-5 position-relative" style={{ zIndex: 4 }}>
        <div className="hero-wrap">
          <div className="hero-inner text-center">
            <div className="badge-top">New AI Code Editor</div>

            <h1 className="devcode-title">devCode</h1>

            <h2 className="devcode-subtitle">AI Code Editor+Assistant</h2>

            <p className="devcode-desc">
              A revolutionary new AI Code Editor that helps you 10x your developer productivity!
              <br />
              Bundled with AI super assistant ChatLLM
            </p>

           <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
  <button className="btn btn-light btn-pill hero-btn">Get Started</button>
  <button className="btn btn-dark btn-pill-dark hero-btn">Learn More</button>
</div>

          </div>

          <div className="chips-area">
            <div className="chip chip-left-top">
              Full-feature IDE
            </div>

            <div className="chip chip-right-top">
              Code auto-complete
            </div>

            <div className="chip chip-center">
              Key Features
            </div>

            <div className="chip chip-left-bottom">
              Genarate code
            </div>

            <div className="chip chip-right-bottom">
              Combines the best <br /> coding LLMs
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
