/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import { auth } from '../../store/actions/index';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        firstName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'First Name',
            label: 'First Name:',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },

        lastName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            label: 'Last Name:',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },

        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            label: 'E-mail:',
          },
          value: '',
          validation: {
            required: true,
            isEmail: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            label: 'Password:',
          },
          value: '',
          validation: {
            required: true,
            minLength: 6,
          },
          valid: false,
          touched: false,
        },
      },
    };
    this.bindcheckValidity = this.checkValidity.bind(this);
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value,
      this.state.controls.password.value, this.state.isSignup);
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value,
          this.state.controls[controlName].validation),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  }

  checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  render() {
    const formElementsArray = [];
    Object.keys(this.state.controls).map((key) => formElementsArray.push({
      id: key,
      config: this.state.controls[key],
    }));

    const form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        label={formElement.config.elementConfig.label}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    return (
      <div className={classes.Auth}>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">Register</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAuth: (email, password) => dispatch(auth(email, password)),
});

export default connect(null, mapDispatchToProps)(Auth);
