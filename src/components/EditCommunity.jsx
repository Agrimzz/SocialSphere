import "../style/create.scss"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

function EditCommunity({ communityDetails }) {
  const [title, setTitle] = useState(
    communityDetails ? communityDetails.title : ""
  )
  const [desc, setDesc] = useState(
    communityDetails ? communityDetails.cdesc : ""
  )

  useEffect(() => {
    if (communityDetails) {
      setTitle(communityDetails.title)
      setDesc(communityDetails.cdesc)
    }
  }, [communityDetails])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(title, desc, communityDetails.cid)
    let formData = new FormData()
    formData.append("title", title)
    formData.append("desc", desc)
    formData.append("cid", communityDetails.cid)
    axios
      .post("http://localhost/SocialSphere/editcommunity.php", formData)
      .then((response) => {
        console.log(response.data)
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
          <h1>Edit Community</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength="50"
              defaultValue={title}
            />
            <textarea
              name="desc"
              cols="30"
              rows="10"
              placeholder="Text"
              onChange={(e) => setDesc(e.target.value)}
              defaultValue={desc}
            ></textarea>
            <button>Edit</button>
          </form>
        </div>
      </div>
      <div className="bigblack" onClick={closeBox}></div>
    </div>
  )
}

export default EditCommunity
