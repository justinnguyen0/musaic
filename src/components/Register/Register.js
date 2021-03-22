import React, {Component} from "react"
import "./Register.css";

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emailaddress:"",
            password:"",
            confirmPassword:"",
        }

        this.handleSubmit = this.handleSubmit.bind(true)
    }

    emailaddressHandler = (event) => {
        this.setState({
            emailaddress: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    confirmPasswordHandler = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} Registered Successfully`)
        console.log(this.state)
        this.setState({
            emailaddress:"",
            password:"",
            confirmPassword:"",

        })
    event.preventDefault()
    }



render() {
    return (
        
            <div>
                <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>
                <form onSubmit={this.handleSubmit}>
                    <h1 className="musaic"><b>MUSAIC</b></h1>
                    <label className="registerEmail">Email Address :</label><br /> <input className="registerInput" type="text" value={this.state.emailaddress} onChange={this.emailaddressHandler} placeholder="Email Address" /><br /><br />
                    <label className="registerPassword">Password :</label><br /> <input className="registerInput" type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password" /><br /><br />
                    
                    <label className="registerConfirmPassword">Confirm Password :</label><br /> <input className="registerInput" type="password" value={this.state.confirmPassword} onChange={this.confirmPasswordHandler} placeholder="Confirm Password" /><br />
                    
                    <br /><a href="http://localhost:3000/login">Forgot your password?</a><br />
                    <br></br>
                    
                    <button className ="loginButton" type="button">Log in</button> <br />
                    <hr className ="line"></hr>
                    <label className = "noAccountText">Don't have an account?</label><br />
                    <button className = "signUpButton" type = "button">Sign up</button><br /> 
                </form>
            </div>
        )
    }
}

export default Register;