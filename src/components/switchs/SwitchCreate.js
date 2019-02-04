import React from 'react';
import { Field, reduxForm } from 'redux-form'; //Field component reduxForm function

class SwitchCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className =`field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}
          <input {...input} autoComplete="off"/>
          {this.renderError(meta)}
        </label>
      </div>
  )
  }

onSubmit(formValues) {
  
}

  render(){
  return (
    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
      <Field name="title" component={this.renderInput} label="Enter a Title"/>
      <Field name="description" component={this.renderInput} label="Enter a Description"/>
      <button className="ui button primary">Submit</button>
    </form>
    )
  };
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Entering a title is a must."
  }

  if (!formValues.description) {
    errors.description = "Must have a description for your Switch"
  }

  return errors;
}
//formValues is an object that has all of the forms inputs and labels etc..
//These have to match the name tag in the html element

export default reduxForm({
  form: 'switchsCreate',
  validate
})(SwitchCreate);
