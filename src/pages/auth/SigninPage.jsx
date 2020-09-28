import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//actions
import { emailSignin } from '../../redux/user/user-actions';

//styling
import Wrapper from './Auth.styles';

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.signingIn);

  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const { email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    if (password === '' || email === '') {
      console.log('fill all fields');
      return;
    }

    dispatch(emailSignin(credentials));
  };

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
                value={email}
                onChange={handleChange}
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
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="link-container">
            <div className="link-inner">
              <Link to="/register" className="link">
                Don't have an account? Register
              </Link>
            </div>
          </div>

          <div className="submit-container">
            <button className="submit-btn" onClick={signIn}>
              <span className="icon-box">
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
