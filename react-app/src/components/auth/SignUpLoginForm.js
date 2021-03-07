import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/session";
import "../styling/signup-loginStyle.css";

const SignUpLoginForm = ({firstName,
  setFirstName,
  lastName,
  setLastName,
  city,
  setCity,
  setState,
  state,
  setEmail,
  email,
  setPassword,
  password,
  repeatPassword,
  setRepeatPassword,}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  // const [errors, setErrors] = useState([]);

  const onSignUp = async (e) => {
    e.preventDefault();
    let newErrors = [];
    if (password === repeatPassword) {
      return (
        dispatch(
          createUser({
            firstName,
            lastName,
            city,
            state,
            email,
            password,
            repeatPassword,
          })
        )
          // .then(() => {
          //   setFirstName("");
          //   setLastName("");
          //   setCity("");
          //   setState("");
          //   setEmail("");
          //   setPassword("");
          // })
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
              newErrors = data.errors;
              // setErrors(newErrors);
            }
          })
      );
    }
  };
  if (sessionUser) {
    return <Redirect to="/" />;
  }
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updateState = (e) => {
    setState(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={onSignUp}>
            <h1>Create Account</h1>
            <div className="container" id="container">
              <div className="form-container sign-up-container">
                <form action="#">
                  <h1>Create Account</h1>
                  <input
                    className="form_input"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={updateFirstName}
                    value={firstName}
                  ></input>
                  <input
                    className="form_input"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={updateLastName}
                    value={lastName}
                  />
                  <input
                    className="form_input"
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={updateCity}
                    value={city}
                  />
                  <select
                    className="form_input"
                    name="state"
                    placeholder="State"
                    onChange={updateState}
                  >
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <input
                    className="form_input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={updateEmail}
                    value={email}
                  />
                  <input
                    className="form_input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={updatePassword}
                    value={password}
                  />
                  <input
                    className="form_input"
                    type="password"
                    name="repeat_password"
                    placeholder="Confirm Password"
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                  />
                  <button className="signup-login-btn">Sign Up</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form onSubmit={onSignUp}>
                  <h1>Sign in</h1>
                  <input
                    className="form_input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={updateEmail}
                    value={email}
                  />
                  <input
                    className="form_input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={updatePassword}
                    value={password}
                  />
                  <button className="signup-login-btn">Sign In</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <button className="ghost signup-login-btn" id="signIn">
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Welcome, Partyer!</h1>
                    <p>Sign up and find your Host!</p>
                    <button className="ghost signup-login-btn" id="signUp">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <input
              className="form_input"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={updateFirstName}
              value={firstName}
            />
            <input
              className="form_input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={updateLastName}
              value={lastName}
            />
            <input
              className="form_input"
              type="text"
              name="city"
              placeholder="City"
              onChange={updateCity}
              value={city}
            />
            <select
              className="form_input"
              name="state"
              placeholder="State"
              onChange={updateState}
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <input
              className="form_input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
            />
            <input
              className="form_input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            />
            <input
              className="form_input"
              type="password"
              name="repeat_password"
              placeholder="Confirm Password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            />
            <button className="signup-login-btn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="welcome-back text-2xl">Welcome back!</h1>
            <input
              className="form_input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
            />
            <input
              className="form_input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            />
            <button className="signup-login-btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome, Partyer!</h1>
              <p>Sign up and find your Host!</p>
              <button className="ghost signup-login-btn" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpLoginForm;
