// import AdminHead from "./AdminHead"
// import AdminNav from "./AdminNav"
// import DashboardCommunity from "./DashboardCommunity"
// import DashboardHome from "./DashboardHome"
// import DashboardPost from "./DashboardPost"
// import DashboardUsers from "./DashboardUsers"

// function AdminFeed() {
//   return (
//     <div className="awrapper">
//       <AdminNav />
//       <div className="flexcol">
//         <AdminHead />
//         <DashboardHome />
//         <DashboardUsers />
//         <DashboardPost />
//         <DashboardCommunity />
//       </div>
//     </div>
//   )
// }

// export default AdminFeed

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import AdminHead from "./AdminHead"
import AdminNav from "./AdminNav"
import DashboardCommunity from "./DashboardCommunity"
import DashboardHome from "./DashboardHome"
import DashboardPost from "./DashboardPost"
import DashboardUsers from "./DashboardUsers"

function AdminFeed() {
  const [activeComponent, setActiveComponent] = useState("Dashboard Home")

  const handleIconClick = (componentName) => {
    setActiveComponent(componentName)
  }
  const navigate = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem("aid") === null) {
      alert("Admin Login Required")
      navigate("/admin")
    }
  }, [])

  return (
    <div className="awrapper">
      <AdminNav onIconClick={handleIconClick} />
      <div className="flexcol">
        <AdminHead />

        {activeComponent === "Dashboard Home" && (
          <DashboardHome onIconClick={handleIconClick} />
        )}
        {activeComponent === "Dashboard Users" && <DashboardUsers />}
        {activeComponent === "Dashboard Post" && <DashboardPost />}
        {activeComponent === "Dashboard Community" && <DashboardCommunity />}
      </div>
    </div>
  )
}

export default AdminFeed
