import "./Login.css"

export default function Register() {
    return (
        <div className="login-container">
            <div className="loginWrapper">
                <h1 className="loginTitle">Sign in</h1>
                <form action="" className="loginForm">
                    <input type="text" className="loginInput" placeholder="Username"/>
                    <input type="text" className="loginInput" placeholder="Password"/>
                    <button className="loginButton">Login</button>
                    
                </form>
                <a href="localhost:3000" className="forgetLink">Forget password?</a>
            </div>
        </div>
    )
}
