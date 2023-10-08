import axios from "axios"
import { useEffect, useState } from "react"
import add from "../images/add.png"
import EditCommunity from "./EditCommunity"

function DashboardCommunity() {
  const [data, setData] = useState([])
  const [cdata, setCData] = useState(null)
  useEffect(() => {
    var formData = new FormData()
    axios
      .post("http://localhost/SocialSphere/getcommunity.php", formData)
      .then((response) => {
        console.log(response.data.title)
        if (response.data) {
          setData(response.data)
        }
      })
  }, [])

  const [isFormVisible, setFormVisibility] = useState(false)
  const [name, setName] = useState()
  const [desc, setDesc] = useState()

  const displayForm = () => {
    setFormVisibility(!isFormVisible)
  }
  const [Message, setMessage] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    var formData = new FormData()
    formData.append("name", name)
    formData.append("desc", desc)
    axios
      .post("http://localhost/SocialSphere/addcommunity.php", formData)
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          setMessage(response.data.message)
          axios
            .post("http://localhost/SocialSphere/getcommunity.php", formData)
            .then((response) => {
              if (response.data) {
                setData(response.data)
              }
            })
        } else {
          setMessage(response.data.message)
        }
      })
  }

  function handleDelete(cid) {
    let formData = new FormData()
    formData.append("cid", cid)
    axios
      .post("http://localhost/SocialSphere/deletecommunity.php", formData)
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          const updatedData = data.filter((item) => item.cid !== cid)
          setData(updatedData)
          console.log("Community deleted successfully.")
        } else {
          console.error("Failed to delete the community.")
        }
      })
      .catch((error) => {
        console.error("Error deleting community:", error)
      })
  }
  useEffect(() => {
    console.log(cdata) // Log cdata whenever it changes
  }, [cdata])

  function handleEdit(item) {
    setCData(item)
    console.log(cdata)

    var element = document.getElementById("invis")
    element.style.display = "flex"
  }

  return (
    <div className="dashboard">
      <EditCommunity communityDetails={cdata} />
      <div className="full">
        <div>
          <h2>Add community</h2>
          <img src={add} alt="" onClick={displayForm} />
        </div>
        {isFormVisible && (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Community Name:</label>
              <label htmlFor="result" className="result">
                <b>{Message}</b>
              </label>
              <input
                type="text"
                name="cname"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="desc">Description: </label>
              <textarea
                name="desc"
                onChange={(e) => setDesc(e.target.value)}
                required
              ></textarea>
              <button>Add</button>
            </div>
          </form>
        )}
      </div>
      <div className="full">
        <h2>Manage Communities</h2>
        <table width="100%">
          <tr>
            <th>Cid</th>
            <th>Community Name</th>
            <th>Description</th>
            <th>Total Members</th>

            <th>Actions</th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.cid}>
                <td>{item.cid}</td>
                <td>{item.title}</td>
                <td>{item.cdesc}</td>
                <td>{item.count}</td>

                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.cid)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default DashboardCommunity
