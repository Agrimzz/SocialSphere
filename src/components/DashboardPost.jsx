import axios from "axios"
import { useEffect, useState } from "react"

function DashboardPost() {
  const [data, setData] = useState([])

  useEffect(() => {
    const formData = new FormData()
    axios
      .post("http://localhost/SocialSphere/listposts.php", formData)
      .then((response) => {
        console.log(response.data.success)
        console.log(response.data)
        if (response.data.success) {
          setData(response.data.data)
        }
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])

  function handleDelete(pid) {
    let formData = new FormData()
    formData.append("pid", pid)
    axios
      .post("http://localhost/SocialSphere/delete.php", formData)
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          const updatedData = data.filter((item) => item.pid !== pid)
          setData(updatedData)
          console.log("Post deleted successfully.")
        } else {
          console.error("Failed to delete the post.")
        }
      })
      .catch((error) => {
        console.error("Error deleting post:", error)
      })
  }
  return (
    <div className="dashboard">
      <div className="full">
        <h2>Manage Posts</h2>
        <table width="100%">
          <tr>
            <th>Pid</th>
            <th>Title</th>
            <th>Body</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Username</th>
            <th>Community</th>
            <th>Actions</th>
          </tr>
          {}

          {data.length === 0 ? (
            <tr>
              <td colSpan="8">No data available</td>
            </tr>
          ) : (
            data.map((item) => {
              return (
                <tr key={item.pid}>
                  <td>{item.pid}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <img
                      src={`http://localhost/SocialSphere/images/${item.image}`}
                      alt=""
                    />
                  </td>
                  <td>{item.time}</td>
                  <td>{item.username}</td>
                  <td>{item.community}</td>

                  <td>
                    <button onClick={() => handleDelete(item.pid)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          )}
        </table>
      </div>
    </div>
  )
}

export default DashboardPost
