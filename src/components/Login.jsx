import "../style/login.scss"
import logo from "../images/logo.png"
import undraw from "../images/logimg.svg"

function Login() {
    return(
        <div className="wrapper">
            <div className="log">
                <div className="logcred">
                    <h2>Welcome to</h2>
                    <img src={logo} alt="" />
                    <p>Login to be a part of many communities that interest you</p>

                    <form action="">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button className="signin">Sign In</button>
                        <p>Dont have an account? <strong>Sign up Now</strong></p>
                    </form>
                </div>
                    
                <div className="logimg">
                    <img src={undraw} alt="" />
                </div>
            </div>
        </div>
        
    )
}

export default Login;