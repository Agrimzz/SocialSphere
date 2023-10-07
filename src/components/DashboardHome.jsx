import user from "../images/user.png"
import users from "../images/users.png"
import post from "../images/post.png"
import axios from "axios"
import { useEffect, useState } from "react"

function DashboardHome({ onIconClick }) {
  const [data, setData] = useState({
    ucount: 0,
    ccount: 0,
    pcount: 0,
  })

  useEffect(() => {
    const formData = new FormData()
    axios
      .post("http://localhost/SocialSphere/countusers.php", formData)
      .then((response) => {
        console.log(response.data)
        if (
          response.data.ucount !== undefined &&
          response.data.ccount !== undefined &&
          response.data.pcount !== undefined
        ) {
          setData({
            ucount: response.data.ucount,
            ccount: response.data.ccount,
            pcount: response.data.pcount,
          })
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])
  return (
    <div className="dashboard">
      <div className="flexrow">
        <div className="count">
          <div className="counth">
            <h3>Total Users</h3>
            <img src={user} alt="" />
          </div>
          <p>{data.ucount}</p>
          <button onClick={() => onIconClick("Dashboard Users")}>
            Manage Users
          </button>
        </div>
        <div className="count">
          <div className="counth">
            <h3>Total Communities</h3>
            <img src={users} alt="" />
          </div>
          <p>{data.ccount}</p>
          <button onClick={() => onIconClick("Dashboard Community")}>
            Manage Communities
          </button>
        </div>
      </div>
      <div className="flexrow">
        <div className="count">
          <div className="counth">
            <h3>Total Posts</h3>
            <img src={post} alt="" />
          </div>
          <p>{data.pcount}</p>
          <button onClick={() => onIconClick("Dashboard Post")}>
            Manage Posts
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
