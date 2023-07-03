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

function Feed() {
  const [data, setData] = useState([])

  useEffect(() => {
    const formData = new FormData()
    formData.append("uid", sessionStorage.getItem("uid"))
    axios
      .post("http://localhost/SocialSphere/post.php", formData)
      .then((response) => {
        if (response.data.success) {
          setData(response.data)
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

          {data.map((item) => {
            const created_at = new Date(item.time)
            const month_num = created_at.getMonth()
            const day = created_at.getDate()
            const year = created_at.getFullYear()
            const hour = created_at.getHours()
            const min = created_at.getMinutes()
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
                    <div className="pRow3">
                      <div className="vote">
                        <div className="like">
                          <img src={like} alt="" />
                          <p className="count">25</p>
                        </div>
                        <img src={dislike} alt="" />
                      </div>
                      <div className="comment">
                        <img src={comment} alt="" />
                        <p>12 comments</p>
                      </div>
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
          })}
        </div>
        <Rightbar />
      </div>
    </div>
  )
}

export default Feed
