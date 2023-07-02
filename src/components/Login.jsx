import "../style/login.scss"
import logo from "../images/logo.png"
import undraw from "../images/logimg.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
        axios.post("http://localhost/SocialSphere/login.php", formData)
        .then( (response) => {
            console.log(response.data.result)
            if(response.data.result){
                sessionStorage.setItem("uid", response.data.uid);
                sessionStorage.setItem("username", response.data.username);
                navigate ("/")
            }
            else{
                alert("Fail")
            }

        }  );
        
    };
    return(
        <div className="wrapper">
            <div className="log">
                <div className="logcred">
                    <h2>Welcome to</h2>
                    <img src={logo} alt="" />
                    <p>Login to be a part of many communities that interest you</p>

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)}/>
                        <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        <button className="signin">Sign In</button>
                        <p>Dont have an account? <strong><Link to="/register">Sign up Now</Link></strong></p>
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