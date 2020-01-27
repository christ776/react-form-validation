import React, {Component} from 'react';
import Message from './Message';
import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value);
    }

    validateField(fieldName, value) {
        let emailValid = this.state.isEmailValid;
        let phoneNumberValid = this.state.isPhoneValid;
        let urlValid = this.state.isUrlValid;
        let nameValid = this.state.isNameValid;

        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            break;
          case 'phone':
            phoneNumberValid = value.length === 10;
            break;
          case 'name':
              // Account for at least a first name and a last name
              nameValid = value.length > 6;
              break;
          case 'url':
                const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                const regex = new RegExp(expression);
                urlValid = !!value.match(regex);
              break;
          default:
            break;
        }
        this.setState({
                        isEmailValid: !!emailValid,
                        isPhoneValid: phoneNumberValid,
                        isNameValid: nameValid,
                        isUrlValid: urlValid
                      }, this.validateForm);
      }

      validateForm() {
        const { isEmailValid, isNameValid, isPhoneValid, isUrlValid  } = this.state;
        const { isFormValid } = this.props;
        isFormValid(isEmailValid && isNameValid && isPhoneValid && isUrlValid);
      }

    render() {
        const { isFormValid } = this.state;
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form onSubmit={this.handleSubmit} noValidate>
                <h3>Name:
                    <input type='text' id="name" name='name' className="name" onChange={this.handleUserInput} noValidate />
                </h3>
                <h3>Email:
                    <input type='email' id="email" name='email' onChange={this.handleUserInput} noValidate />
                </h3>
                <h3>Phone:
                    <input type='number' name='phone' id="phone"
                    placeholder="Enter your phone number"
                    onChange={this.handleUserInput} noValidate />
                </h3>
                <h3>Blog URL:
                    <input type="text" name="url" id="url" placeholder="Enter your blog URL"
                        onChange={this.handleUserInput}
                         noValidate />
                </h3>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" id="button" className="button success expand round text-center">Verify</a>
                </div>
                {/* <Message formIsValid={isFormValid} /> */}
            </form>
        </div>);
    }
}

export default Form;
