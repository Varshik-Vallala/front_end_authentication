import {Component} from 'react'

import './index.css'

// Write your JS code here
class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    firstNameErrorMsg: false,
    lastNameErrorMsg: false,
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    // console.log(firstName)
    // console.log(lastName)

    if (username === '') {
      this.setState({firstNameErrorMsg: true})
      //   console.log(firstName)
    }
    if (password === '') {
      this.setState({lastNameErrorMsg: true})
    }

    const userDetails = {username, password}

    // const userDetails = {
    //   name: 'Varshik',
    //   username: 'bunny59',
    //   password: 'bunny@123',
    //   gender: 'Male',
    //   location: 'Warangal',
    // }

    // const userDetails = {
    //   username: 'bunny59',
    //   password: 'bunny@123',
    // }

    console.log(userDetails)

    if (username !== '' && password !== '') {
      const url = 'https://authenticationap.herokuapp.com/login/'

      console.log(typeof firstName)

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

      console.log(options)

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
    this.setState({username: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({password: event.target.value})
  }

  renderFirstName = () => {
    const {firstNameErrorMsg} = this.state
    const errorClassName = firstNameErrorMsg
      ? 'error-input-element'
      : 'input-element'
    return (
      <div className="input-container">
        <label className="label-element" htmlFor="firstName">
          USERNAME
        </label>
        <input
          className={errorClassName}
          id="firstName"
          type="text"
          placeholder="UserName"
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
          PASSWORD
        </label>
        <input
          className={errorClassName}
          id="lastName"
          type="password"
          placeholder="Password"
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
