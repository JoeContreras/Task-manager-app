import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../../actions/auth";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const SignupForm = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [buttonClass, setButtonClass] = useState({
    clicked: false,
    buttonClass: "ui fluid large blue submit button",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (buttonClass.clicked) {
      setButtonClass({
        clicked: true,
        buttonClass: "ui loading primary button",
      });
    }

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div
      style={{
        backgroundImage: `url("https://www.toptal.com/designers/subtlepatterns/patterns/doodles.png)")`,
        height: "100vh",
      }}
    >
      <div
        className="ui middle aligned center aligned grid"
        style={{
          height: "100%",
        }}
      >
        <div className="column" style={{ maxWidth: "450px" }}>
          <h2 className="ui image header" style={{ marginTop: "100px" }}>
            <div className="content">
              {isSignup ? "Create an Account" : "Login To Your Account"}
            </div>
          </h2>

          <form className="ui large form" onSubmit={handleSubmit}>
            <div className="ui stacked secondary segment">
              <div className="field">
                <div className="ui left icon input">
                  {isSignup && (
                    <input
                      name="name"
                      type="text"
                      autoComplete="off"
                      placeholder="Full Name"
                      onChange={handleChange}
                    />
                  )}
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="mail icon"></i>
                  <input
                    name="email"
                    autoComplete="off"
                    type="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    name="password"
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button className={buttonClass.buttonClass} type="submit">
                Submit
              </button>
            </div>
          </form>
          <div className="ui message">
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <button className="ui blue basic button" onClick={switchMode}>
              {isSignup ? "Sign in" : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
