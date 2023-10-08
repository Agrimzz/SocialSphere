import Navbar from "./Navbar"
import Rightbar from "./Rightbar"
import "../style/feed.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import circle from "../images/circle.svg"

function Community() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const searchParams = new URLSearchParams(location.search)
  const cid = searchParams.get("criteria")
  let formData = new FormData()
  formData.append("cid", cid)
  formData.append("uid", sessionStorage.getItem("uid"))

  useEffect(() => {
    axios
      .post("http://localhost/SocialSphere/communitypost.php", formData)
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          setData(response.data.data)
        } else {
          alert("You need to join the community first.")
          navigate("/listcommunity")
        }
      })
  }, [])

  function leaveCommunity() {
    axios
      .post("http://localhost/SocialSphere/leavecommunity.php", formData)
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          navigate("/listcommunity")
        } else {
          alert("Failed to leave the community")
        }
      })
      .catch((error) => {
        console.log(error)
        alert("An error occurred while leaving the community")
      })
  }
  return (
    <>
      <Navbar />
      <div className="feed">
        <div className="posts">
          <div className="chead">
            {data.length > 0 && <h2 className="title">{data[0].community}</h2>}
            <button>Joined</button>
            <button onClick={leaveCommunity}>Leave</button>
          </div>

          {data.map((item) => {
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
          })}
        </div>
        <Rightbar />
      </div>
    </>
  )
}

export default Community
