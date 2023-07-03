import Navbar from "./Navbar"
import Rightbar from "./Rightbar"
import "../style/feed.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ListCommunity() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .post("http://localhost/SocialSphere/getcommunity.php")
      .then((response) => {
        setData(response.data)
      })
  }, [])

  function joinCommunity(cid) {
    let formData = new FormData()
    formData.append("uid", sessionStorage.getItem("uid"))
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

                    <button onClick={() => joinCommunity(item.cid)}>
                      Join
                    </button>
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Harum inventore eius ullam non architecto fuga quis,
                    asperiores facere. Officiis, odio. Iste, aliquam
                    praesentium? Sint, iure!
                  </p>
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
