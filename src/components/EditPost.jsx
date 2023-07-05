import "../style/create.scss"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

function EditPost({ postDetails }) {
  const [title, setTitle] = useState(postDetails ? postDetails.title : "")
  const [desc, setDesc] = useState(postDetails ? postDetails.body : "")

  // useEffect(() => {
  //   const formData = new FormData()
  //   formData.append("uid", sessionStorage.getItem("uid"))
  //   axios
  //     .post("http://localhost/SocialSphere/checkcommunity.php", formData)
  //     .then((response) => {
  //       setCommunities(response.data)
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [])

  useEffect(() => {
    if (postDetails) {
      setTitle(postDetails.title)
      setDesc(postDetails.body)
    }
  }, [postDetails])

  const handleSubmit = (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append("title", title)
    formData.append("desc", desc)
    formData.append("uid", sessionStorage.getItem("uid"))
    formData.append("pid", postDetails.pid)
    axios
      .post("http://localhost/SocialSphere/edit.php", formData)
      .then((response) => {
        console.log(response.data)
        // navigate("/")
        window.location.reload()
      })
  }

  function closeBox() {
    var element = document.getElementById("invis")
    element.style.display = "none"
  }

  return (
    <div className="invis" id="invis">
      <div className="createPost">
        <div className="box">
          <h1>Edit Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="choice">
              <p>
                Community : <strong>{postDetails.community}</strong>
              </p>
            </div>

            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength="50"
              value={postDetails ? title : ""}
            />
            <textarea
              name="desc"
              cols="30"
              rows="10"
              placeholder="Text"
              onChange={(e) => setDesc(e.target.value)}
              value={postDetails ? desc : ""}
            ></textarea>
            {/* <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              value={postDetails.img}
            /> */}
            <button>Edit</button>
          </form>
        </div>
      </div>
      <div className="bigblack" onClick={closeBox}></div>
    </div>
  )
}

export default EditPost
