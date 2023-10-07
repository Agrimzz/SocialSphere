import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NewsFeed from "./NewsFeed"
import Register from "./Register"
import Login from "./Login"
import PostTab from "./PostTab"
import CreatePost from "./CreatePost"
import ListCommunity from "./ListCommunity"
import Community from "./Community"
import Search from "./Search"
import Adminlogin from "./Adminlogin"
import AdminFeed from "./AdminFeed"

function Pages() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<PostTab />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/listcommunity" element={<ListCommunity />} />
          <Route path="/community" element={<Community />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin" element={<Adminlogin />} />
          <Route path="/dashboard" element={<AdminFeed />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Pages
