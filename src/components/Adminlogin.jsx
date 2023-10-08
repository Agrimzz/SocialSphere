import "../style/admin.scss"
import logo from "../images/logo.png"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Adminlogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)
    axios
      .post("http://localhost/SocialSphere/adminlog.php", formData)
      .then((response) => {
        console.log(response.data.result)
        if (response.data.result === "true") {
          sessionStorage.setItem("aid", response.data.uid)
          sessionStorage.setItem("username", response.data.username)
          navigate("/dashboard")
        } else {
          alert("Username and Password do not match")
        }
      })
  }
  return (
    <div className="wrapper">
      <div className="alog">
        <div className="logcred">
          <h2>Admin Login</h2>
          <img src={logo} alt="" />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="signin">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Adminlogin
