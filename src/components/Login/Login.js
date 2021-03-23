import React, {Component} from "react"

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:"",
            password:"",
            confirmPassword:"",
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

    handleSubmit = (event) => {
        alert(`${this.state.username} Login Successful`)
        console.log(this.state)
        this.setState({
            username:"",
            password:"",
            confirmPassword:"",

        })
    event.preventDefault()
    }



render() {
    return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>User Login</h1>
                    <label>Username :</label> <input type="text" value={this.state.username} onChange={this.usernameHandler} placeholder="Username..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password..." /><br />
                    <input type="submit" value="Submit" />
                </form>
                <div className="App">
                    <a href="http://localhost:8888">
                        <button>Login with Spotify</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Login;