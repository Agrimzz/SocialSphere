import "../style/feed.scss"
import Rightbar from "./Rightbar"
import image from "../images/image.svg"
import circle from "../images/circle.svg"
// import img1 from "../images/img1.png"
import like from "../images/like.svg"
import dislike from "../images/dislike.svg"
import comment from "../images/comment.svg"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Post from "./Post"

function Feed() {
  const [data, setData] = useState([])

  useEffect(() => {
    const formData = new FormData()
    formData.append("uid", sessionStorage.getItem("uid"))
    axios
      .post("http://localhost/SocialSphere/post.php", formData)
      .then((response) => {
        console.log(response.data.success)
        if (response.data.success) {
          setData(response.data.data)
        }
      })
  }, [])

  function openForm() {
    var element = document.getElementById("invis")
    element.style.display = "flex"
  }

  return (
    <div>
      <div className="feed">
        <div className="posts">
          <div className="makePosts" onClick={openForm}>
            {/* <div className="makePosts"> */}
            <input type="text" placeholder="Write Something" readOnly />
            <img src={image} alt="" />
            {/* </div> */}
          </div>

          {data.length === 0 ? (
            <p>
              No post available.
              <Link to="/listcommunity" className="highlight">
                Join Community Now
              </Link>
              to view different posts.
            </p>
          ) : (
            data.map((item) => {
              const created_at = new Date(item.time)
              const month_num = created_at.getMonth()
              const day = created_at.getDate()
              const year = created_at.getFullYear()
              let hour = created_at.getHours()
              let min = created_at.getMinutes()
              const monthNames = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]
              const month = monthNames[month_num]
              hour = hour.toString().padStart(2, "0")
              min = min.toString().padStart(2, "0")

              return (
                <Link
                  to={`/post?criteria=${item.pid}`}
                  key={item.pid}
                  className="post"
                >
                  <div className="post">
                    <div className="postTexts">
                      <div className="pRow1">
                        <h3>{item.username}</h3>
                        <div className="postTime">
                          <img src={circle} alt="" />
                          <p>
                            <strong>
                              {hour}:{min}
                            </strong>{" "}
                            - {day} {month} {year}{" "}
                          </p>
                        </div>
                        <h3 className="comm">{item.community}</h3>
                      </div>
                      <div className="pRow2">
                        <h2>{item.title}</h2>
                      </div>
                    </div>

                    <div className="postImage">
                      <img
                        src={`http://localhost/SocialSphere/images/${item.image}`}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              )
            })
          )}
        </div>
        <Rightbar />
      </div>
    </div>
  )
}

export default Feed
