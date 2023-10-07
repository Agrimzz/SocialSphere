import axios from "axios"
import { useEffect, useState } from "react"

function DashboardUsers() {
  const [data, setData] = useState([])

  useEffect(() => {
    const formData = new FormData()
    axios
      .post("http://localhost/SocialSphere/listusers.php", formData)
      .then((response) => {
        console.log(response.data.success)
        console.log(response.data)
        if (response.data.success) {
          setData(response.data.data)
        }
      })
  }, [])

  function handleDelete(uid) {
    let formData = new FormData()
    formData.append("uid", uid)
    axios
      .post("http://localhost/SocialSphere/deleteuser.php", formData)
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          const updatedData = data.filter((item) => item.uid !== uid)
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
  return (
    <div className="dashboard">
      <div className="full">
        <h2>Manage Users</h2>
        <table width="100%">
          <tr>
            <th>Uid</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.uid}>
                <td>{item.uid}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>

                <td>
                  <button onClick={() => handleDelete(item.uid)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default DashboardUsers
