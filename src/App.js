import React from "react";
import { Field, reduxForm } from "redux-form";

class App extends React.Component {
  renderInput({ input, label }) {
    return (
      <div class="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} class="ui form">
        <Field
          name="firstName"
          component={this.renderInput}
          label="First Name"
        />
        <Field name="lastName" component={this.renderInput} label="Last Name" />
        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: "signUp" })(App);
