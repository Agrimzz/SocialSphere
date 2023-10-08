import "../style/feed.scss"
import Rightbar from "./Rightbar"
import search from "../images/search.svg"
import circle from "../images/circle.svg"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"

function Search() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem("uid") === null) {
      alert("Login Required")
      navigate("/login")
    }
  }, [])

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Navbar />
      <div className="feed">
        <div className="posts">
          <div className="search">
            <div className="searchbox">
              <img src={search} alt="" />
              <input type="text" placeholder="Search" onChange={handleSearch} />
            </div>
          </div>

          {filteredData.map((item) => {
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

export default Search
