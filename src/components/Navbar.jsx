import logo from "../images/logo.png"
import "../style/nav.scss"
import home from "../images/home.svg"
import search from "../images/search.svg"
import community from "../images/community.svg"
import notification from "../images/notification.svg"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="logo" className="logo" />
      <Link to="/">
        <div className="icons">
          <img src={home} alt="" />
          <p>Home</p>
        </div>
      </Link>

      <div className="icons">
        <img src={search} alt="" />
        <p>Search</p>
      </div>

      <Link to={"/listcommunity"}>
        <div className="icons">
          <img src={community} alt="" />
          <p>Communities</p>
        </div>
      </Link>

      <div className="icons">
        <img src={notification} alt="" />
        <p>Notifications</p>
      </div>
    </div>
  )
}

export default Navbar
