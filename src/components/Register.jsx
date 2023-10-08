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
  const [message, setMessage] = useState()
  const [pMessage, setPMessage] = useState()

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== cpassword) {
      setPMessage("Password do not match")
    } else {
      let formData = new FormData()
      formData.append("username", username)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("cpassword", cpassword)
      axios
        .post("http://localhost/SocialSphere/register.php", formData)
        .then((response) => {
          console.log(response.data)
          if (response.data.success) {
            alert(response.data.message)
            navigate("/login")
          } else if (response.data.key == 1) {
            console.log(response.data)
            setMessage(response.data.message)
          } else {
            setMessage(response.data.message)
          }
        })
    }
  }

  return (
    <div className="wrapper">
      <div className="log">
        <div className="logcred">
          <h2>Welcome to</h2>
          <img src={logo} alt="" />
          <p>Login to be a part of many communities that interest you</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="message">{message}</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">{pMessage}</label>
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
