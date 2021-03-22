import React, {Component} from "react"

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:"",
            password:"",
            confirmPassword:"",
            gender: "",
        }

        this.handleSubmit = this.handleSubmit.bind(true)
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
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

    genderHandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} Registered Successfully`)
        console.log(this.state)
        this.setState({
            username:"",
            password:"",
            confirmPassword:"",
            gender:"",

        })
    event.preventDefault()
    }



render() {
    return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>Username :</label> <input type="text" value={this.state.username} onChange={this.usernameHandler} placeholder="Username..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password..." /><br />
                    <label>Confirm Password :</label> <input type="password" value={this.state.confirmPassword} onChange={this.confirmPasswordHandler} placeholder="Confirm Password..." /><br />
                    <label>Gender :</label><select onChange={this.genderHandler} defaultValue="Select Your Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="nonbinary">Non-binary</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Register;