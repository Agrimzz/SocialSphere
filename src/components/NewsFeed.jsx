import { useEffect } from "react"
import Feed from "./Feed"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"

function NewsFeed() {
  const navigate = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem("uid") === null) {
      alert("Login Required")
      navigate("/login")
    }
  }, [])

  return (
    <div>
      <Navbar />
      <Feed />
    </div>
  )
}

export default NewsFeed
