import "../style/rightbar.scss"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import CreatePost from "./CreatePost"
function Rightbar() {
  const navigate = useNavigate()

  function signOut() {
    sessionStorage.clear()
    navigate("/login")
  }

  function openForm() {
    var element = document.getElementById("invis")
    element.style.display = "flex"
  }
  return (
    <>
      <CreatePost />
      <div className="rightbar">
        <div className="user">
          <p className="username">
            {sessionStorage.getItem("username")}
            <span className="lout" onClick={signOut}>
              Log Out
            </span>
          </p>
        </div>

        <div className="tab1">
          <h2>SocialSphere</h2>
          <p>Your goto place to check your favourite communities</p>

          <button className="btn1" onClick={openForm}>
            Create Post
          </button>
          <Link to="/listcommunity">
            <button className="btn2">Join Community</button>
          </Link>
        </div>

        {/* <div className="tab2">
          <h2>Top Communities</h2>
          <ul>
            <li>Football</li>
            <li>AI</li>
            <li>Food</li>
            <li>Anime</li>
            <li>Basketball</li>
          </ul>
        </div> */}

        <div className="tab3">
          <p>SocialSphere, 2023. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Rightbar
