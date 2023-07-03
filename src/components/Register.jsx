import "../style/login.scss"
import logo from "../images/logo.png"
import undraw from "../images/logimg.svg"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Register() {
  const [username, setUsername] = useState({})
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})
  const [cpassword, setCpassword] = useState({})

  const navigate = useNavigate()

  // const handleChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setInputs((values) => ({ values, [name]: value }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append("username", username)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("cpassword", cpassword)
    axios.post("http://localhost/SocialSphere/register.php", formData)
    console.log(formData)

    navigate("/login")
  }

  return (
    <div className="wrapper">
      <div className="log">
        <div className="logcred">
          <h2>Welcome to</h2>
          <img src={logo} alt="" />
          <p>Login to be a part of many communities that interest you</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
            <button className="signin">Sign Up</button>
            <p>
              Already have an account?{" "}
              <strong>
                <Link to="/login">Log In</Link>
              </strong>
            </p>
          </form>
        </div>

        <div className="logimg">
          <img src={undraw} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Register
