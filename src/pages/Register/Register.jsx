import "./Register.css"

export default function Register() {
    return (
        <div className="register-container">
            <div className="registerWrapper">
                <h1 className="registerTitle">Create an Account</h1>
                <form action="" className="registerForm">
                    <input type="text" className="registerInput" placeholder="name"/>
                    <input type="text" className="registerInput" placeholder="last name"/>
                    <input type="text" className="registerInput" placeholder="username"/>
                    <input type="text" className="registerInput" placeholder="email"/>
                    <input type="text" className="registerInput" placeholder="password"/>
                    <input type="text" className="registerInput" placeholder="confirm password"/>
                    <div className="registerAgreement">By createing an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></div>
                    <button className="registerButton">Create Account</button>
                </form>
            </div>
        </div>
    )
}
