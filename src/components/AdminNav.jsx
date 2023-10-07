// import logo from "../images/logo.png"
// import "../style/adminnav.scss"
// import home from "../images/home.svg"
// import user from "../images/user.png"
// import users from "../images/users.png"
// import post from "../images/post.png"

// function AdminNav() {
//   return (
//     <div className="adminnav">
//       <img src={logo} alt="logo" className="alogo" />

//       <div className="aicons">
//         <img src={home} alt="" />
//         {/* <p>Home</p> */}
//       </div>

//       <div className="aicons">
//         <img src={user} alt="" />
//         {/* <p>Search</p> */}
//       </div>

//       <div className="aicons">
//         <img src={users} alt="" />
//         {/* <p>Communities</p> */}
//       </div>

//       <div className="aicons">
//         <img src={post} alt="" />
//         {/* <p>Notifications</p> */}
//       </div>
//     </div>
//   )
// }

// export default AdminNav

import React from "react"
import logo from "../images/logo.png"
import "../style/adminnav.scss"
import home from "../images/home.svg"
import user from "../images/user.png"
import users from "../images/users.png"
import post from "../images/post.png"
import logout from "../images/logout.png"
import { useNavigate } from "react-router-dom"

function AdminNav({ onIconClick }) {
  const navigate = useNavigate()
  function signOut() {
    sessionStorage.clear()
    navigate("/admin")
  }

  return (
    <div className="adminnav">
      <img src={logo} alt="logo" className="alogo" />

      <div className="aicons" onClick={() => onIconClick("Dashboard Home")}>
        <img src={home} alt="" />
        {/* <p>Home</p> */}
      </div>

      <div className="aicons" onClick={() => onIconClick("Dashboard Users")}>
        <img src={user} alt="" />
        {/* <p>Search</p> */}
      </div>

      <div
        className="aicons"
        onClick={() => onIconClick("Dashboard Community")}
      >
        <img src={users} alt="" />
        {/* <p>Communities</p> */}
      </div>

      <div className="aicons" onClick={() => onIconClick("Dashboard Post")}>
        <img src={post} alt="" />
        {/* <p>Notifications</p> */}
      </div>

      <div className="aicons" onClick={signOut}>
        <img src={logout} alt="" />
      </div>
    </div>
  )
}

export default AdminNav
