import Navbar from "./Navbar"
import Rightbar from "./Rightbar"
import "../style/feed.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function ListCommunity() {
  const [data, setData] = useState([])
  const uid = sessionStorage.getItem("uid")
  const [joinedCommunities, setJoinedCommunities] = useState([])

  const navigate = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem("uid") === null) {
      alert("Login Required")
      navigate("/login")
    }
  }, [])

  useEffect(() => {
    axios
      .post("http://localhost/SocialSphere/getcommunity.php")
      .then((response) => {
        setData(response.data)
      })

    let formData = new FormData()
    formData.append("uid", uid)

    axios
      .post("http://localhost/SocialSphere/uploadcommunity.php", formData)
      .then((response) => {
        setJoinedCommunities(response.data)
        console.log(response.data)
      })
  }, [])

  function joinCommunity(cid) {
    let formData = new FormData()
    formData.append("uid", uid)
    formData.append("cid", cid)
    axios
      .post("http://localhost/SocialSphere/joincommunity.php", formData)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <Navbar />
      <div className="feed">
        <div className="posts">
          <h2>Communities</h2>
          <ul>
            {data.map((item) => (
              <Link to={`/community?criteria=${item.cid}`} key={item.cid}>
                <div className="communitylist">
                  <div className="listcol">
                    <li key={item.index} value={item.title}>
                      {item.title}
                    </li>

                    {/* <button onClick={() => joinCommunity(item.cid)}>
                      Join
                    </button> */}

                    {joinedCommunities &&
                    Array.isArray(joinedCommunities) &&
                    joinedCommunities.includes(item.cid) ? (
                      <button disabled className="btn-joined">
                        Joined
                      </button>
                    ) : (
                      <button
                        onClick={() => joinCommunity(item.cid)}
                        className="btn-join"
                      >
                        Join
                      </button>
                    )}
                  </div>
                  <p>{item.cdesc}</p>
                  <div className="memberscount">
                    <p className="count">{item.count}</p>
                    <p>Members</p>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
        <Rightbar />
      </div>
    </>
  )
}

export default ListCommunity
