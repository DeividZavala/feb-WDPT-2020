import React, { Component } from "react";
import { login, signup } from "../../services/authService";
import { Link } from "react-router-dom";

class AuthForm extends Component {
  state = {
    user: {},
    showPassword: false,
  };

  handleShowPassword = () => {
    const { showPassword } = this.state;
    const showValue = !showPassword;
    this.setState({ showPassword: showValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const isLogin = this.props.location.pathname === "/login";
    const action = isLogin ? login : signup;
    action(user).then((res) => {
      console.log(res);
    });
  };

  handleChange = (e) => {
    let { user } = this.state;
    user = { ...user, [e.target.name]: e.target.value };
    this.setState({ user });
  };

  render() {
    const { showPassword } = this.state;
    const isLogin = this.props.location.pathname === "/login";
    return (
      <section className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-4">
            <h3>{isLogin ? "Login" : "Signup"}</h3>
            <form
              onSubmit={this.handleSubmit}
              className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
            >
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="email">
                  Email:
                </label>
                <div className="uk-inline">
                  <span
                    className="uk-form-icon uk-form-icon-flip"
                    uk-icon="icon: mail"
                  ></span>
                  <input
                    onChange={this.handleChange}
                    id="email"
                    name="email"
                    className="uk-input"
                    type="text"
                    required
                  />
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="password">
                    Password:
                  </label>
                  <div className="uk-inline">
                    <span
                      className="uk-form-icon uk-form-icon-flip"
                      uk-icon="icon: lock"
                    ></span>
                    <input
                      onChange={this.handleChange}
                      id="password"
                      name="password"
                      className="uk-input"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <button
                      className="uk-button"
                      onClick={this.handleShowPassword}
                    >
                      show password
                    </button>
                  </div>
                </div>
              </div>
              {isLogin ? (
                <div className="uk-text-meta">
                  Aún no tienes cuenta?{" "}
                  <Link className="uk-text-primary" to="/signup">
                    Crear cuenta
                  </Link>
                </div>
              ) : null}
              <button className="uk-button uk-button-primary">
                {isLogin ? "Login" : "Signup"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthForm;
