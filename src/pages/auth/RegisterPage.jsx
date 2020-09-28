import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//styling
import Wrapper from './Auth.styles';

//actions
import { register } from '../../redux/user/user-actions';

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.registering);
  const [credentials, setCredentials] = React.useState({
    companyName: '',
    email: '',
    password: '',
  });

  const { companyName, email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const registerUser = (e) => {
    e.preventDefault();

    if (companyName === '' || password === '' || email === '') {
      console.log('fill all fields');
      return;
    }

    dispatch(register(credentials));
  };

  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2 className="text">Register your new account</h2>
        </div>
        <form className="form">
          <input type="hidden" name="remember" value="true" />
          <div className="input-box">
            <div className="input-outer">
              <input
                aria-label="Company Name"
                name="companyName"
                type="text"
                required
                className="input"
                placeholder="Company Name"
                value={companyName}
                onChange={handleChange}
              />
            </div>
            <div className="input-outer">
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
              <Link to="/signin" className="link">
                Already have an account? Sign In
              </Link>
            </div>
          </div>

          <div className="submit-container">
            <button className="submit-btn" onClick={registerUser}>
              <span className="icon-box">
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
