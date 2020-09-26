import React from 'react';
import { Link } from 'react-router-dom';

//styling
import Wrapper from './Auth.styles';

export default () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2 className="text">Sign in to your account</h2>
        </div>
        <form className="form">
          <input type="hidden" name="remember" value="true" />
          <div className="input-box">
            <div>
              <input
                aria-label="Email address"
                name="email"
                type="email"
                required
                className="input"
                placeholder="Email address"
              />
            </div>
            <div className="input-outer">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                className="input"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="link-container">
            <div class="text-sm leading-5">
              <Link to="/register" className="link">
                Don't have an account? Sign In
              </Link>
            </div>
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-btn">
              <span className="icon-box">
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
