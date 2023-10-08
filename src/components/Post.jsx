// import PostSidebar from "./PostSidebar";
import circle from "../images/circle.svg"
import "../style/post.scss"
import liked from "../images/liked.svg"
import like from "../images/like.svg"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import EditPost from "./EditPost"

function Post() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const pid = searchParams.get("criteria")
  let formData = new FormData()
  formData.append("pid", pid)
  formData.append("uid", sessionStorage.getItem("uid"))
  // useEffect(() => {
  //   axios
  //     .post("http://localhost/SocialSphere/viewpost.php", formData)
  //     .then((response) => {
  //       // console.log(response.data)
  //       setData(response.data)
  //     })
  // }, [])

  useEffect(() => {
    if (sessionStorage.getItem("uid") === null) {
      alert("Login Required")
      navigate("/login")
    }
  }, [])

  const created_at = new Date(data.time)
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

  const handleEditPost = () => {
    var element = document.getElementById("invis")
    element.style.display = "flex"
  }

  const handleDeletePost = () => {
    axios
      .post("http://localhost/SocialSphere/delete.php", formData)
      .then((respnse) => {
        console.log(respnse.data)
      })

    navigate("/")
    window.location.reload()
  }

  const [likes, setLikes] = useState(0)
  const [userLiked, setUserLiked] = useState(false)
  // const [userLiked, setUserLiked] = useState(false)

  useEffect(() => {
    axios
      .post("http://localhost/SocialSphere/viewpost.php", formData)
      .then((response) => {
        setData(response.data)
        fetchLikes() // Call fetchLikes to fetch likes data
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem("uid") === null) {
      alert("Login Required")
      navigate("/login")
    }
  }, [])

  const fetchLikes = () => {
    axios
      .post("http://localhost/SocialSphere/fetchlike.php", formData) // Send the `formData` including `pid`
      .then((response) => {
        setLikes(response.data.likes)
        setUserLiked(response.data.userLiked)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleLike = () => {
    var formData = new FormData()
    formData.append("pid", pid)
    formData.append("uid", sessionStorage.getItem("uid"))

    axios
      .post("http://localhost/SocialSphere/like.php", formData)
      .then((response) => {
        if (response.data.success) {
          setLikes(response.data.likes)
          setUserLiked(true)
        } else {
          console.log(response.data.message)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleRemoveLike = () => {
    var formData = new FormData()
    formData.append("pid", pid)
    formData.append("uid", sessionStorage.getItem("uid"))

    axios
      .post("http://localhost/SocialSphere/unlike.php", formData)
      .then((response) => {
        if (response.data.success) {
          setLikes(response.data.likes)
          setUserLiked(false)
        } else {
          console.log(response.data.message)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const [commentInput, setCommentInput] = useState("")
  const [comments, setComments] = useState([])

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value)
  }

  const submitComment = () => {
    var formData = new FormData()
    formData.append("pid", pid)
    formData.append("uid", sessionStorage.getItem("uid"))
    formData.append("cmt", commentInput)

    axios
      .post("http://localhost/SocialSphere/addcomment.php", formData)
      .then((response) => {
        console.log(response)
        setCommentInput("")
        fetchComments()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const fetchComments = () => {
    var formData = new FormData()
    formData.append("pid", pid)
    formData.append("uid", sessionStorage.getItem("uid"))
    axios
      .post("http://localhost/SocialSphere/getcomment.php", formData)
      .then((response) => {
        setComments(response.data)
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const handleDeleteComment = (cmid) => {
    var formData = new FormData()
    formData.append("cmid", cmid)
    console.log(cmid)
    axios
      .post("http://localhost/SocialSphere/deletecomment.php", formData)
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          console.log("Comment deleted successfully")
          fetchComments()
        } else {
          console.error("Failed to delete comment")
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <EditPost postDetails={data} />
      <div className="mainPost">
        <div className="postbox">
          <div className="post">
            <div className="pRow1">
              <div className="details">
                <h3>{data.username}</h3>
                <div className="postTime">
                  <img src={circle} alt="" />
                  <p>
                    <strong>
                      {hour}:{min}
                    </strong>{" "}
                    - {day} {month} {year}{" "}
                  </p>
                </div>
                <h3 className="comm">{data.community}</h3>
              </div>

              {data.username === sessionStorage.getItem("username") && (
                <div className="btns">
                  <button onClick={handleEditPost} className="btn-edit-post">
                    Edit Post
                  </button>
                  <button
                    onClick={handleDeletePost}
                    className="btn-delete-post"
                  >
                    Delete Post
                  </button>
                </div>
              )}
            </div>

            <h2>{data.title}</h2>
            <p>{data.body}</p>

            <img
              src={`http://localhost/SocialSphere/images/${data.image}`}
              alt=""
              className="p-img"
            />

            <div className="pRow3">
              <div className="vote">
                <div className="like">
                  {userLiked ? (
                    <div onClick={handleRemoveLike}>
                      <img src={liked} alt="Dislike" />
                    </div>
                  ) : (
                    <div onClick={handleLike}>
                      <img src={like} alt="Like" />
                    </div>
                  )}
                  <p className="count">{likes}</p>
                </div>
              </div>
            </div>

            <div className="makecomment">
              <input
                type="text"
                placeholder="Write a comment"
                value={commentInput}
                onChange={handleCommentChange}
              />
              <button className="btn-comment" onClick={submitComment}>
                Comment
              </button>
            </div>

            <div className="comments">
              {comments.map((comment, index) => {
                return (
                  <div key={index} className="commentlist">
                    <div className="cmtdetails">
                      <h2>{comment.username}</h2>
                      <div>
                        <p>
                          <strong>Commented at : </strong>
                          {comment.time}
                        </p>
                        {comment.username ===
                          sessionStorage.getItem("username") && (
                          <div className="btns">
                            <button
                              onClick={() => handleDeleteComment(comment.cmid)}
                              className="btn-delete-post"
                            >
                              Delete Comment
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <p>{comment.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
