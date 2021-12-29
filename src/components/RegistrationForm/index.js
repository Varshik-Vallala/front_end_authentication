import {Component} from 'react'

import './index.css'

// Write your JS code here
class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErrorMsg: false,
    lastNameErrorMsg: false,
  }

  submitForm = async event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    console.log(firstName)
    console.log(lastName)

    if (firstName === '') {
      this.setState({firstNameErrorMsg: true})
      //   console.log(firstName)
    }
    if (lastName === '') {
      this.setState({lastNameErrorMsg: true})
    }

    const userDetails = {firstName, lastName}

    if (firstName !== '' && lastName !== '') {
      const url = 'https://authenticationap.herokuapp.com/login/'

      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
          'Content-type': 'application/json',
        },
      }
      //   const options = {
      //     method: 'GET',
      //   }

      const response = await fetch(url, options)
      //   const data = await response.json()
      console.log(response)
      //   console.log(data)

      if (response.ok === true) {
        console.log('Login Success')
      } else {
        console.log('Invalid')
      }
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstName = () => {
    const {firstNameErrorMsg} = this.state
    const errorClassName = firstNameErrorMsg
      ? 'error-input-element'
      : 'input-element'
    return (
      <div className="input-container">
        <label className="label-element" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          className={errorClassName}
          id="firstName"
          type="text"
          placeholder="First Name"
          onChange={this.onChangeFirstName}
        />
        {firstNameErrorMsg && <p className="error-msg">Required</p>}
      </div>
    )
  }

  renderLastName = () => {
    const {lastNameErrorMsg} = this.state
    const errorClassName = lastNameErrorMsg
      ? 'error-input-element'
      : 'input-element'

    return (
      <div className="input-container">
        <label className="label-element" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className={errorClassName}
          id="lastName"
          type="password"
          placeholder="Last Name"
          onChange={this.onChangeLastName}
        />
        {lastNameErrorMsg && <p className="error-msg">Required</p>}
      </div>
    )
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        <form className="form-container" onSubmit={this.submitForm}>
          {this.renderFirstName()}
          {this.renderLastName()}
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
