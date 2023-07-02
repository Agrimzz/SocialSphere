import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsFeed from "./NewsFeed";
import Register from "./Register";
import Login from "./Login";
import PostTab from "./PostTab";
import CreatePost from "./CreatePost";

function Pages() {
    return(
        <div>
            <Router>
                <Routes>
                <Route path="/" element={<NewsFeed />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post" element={<PostTab />} />
                <Route path="/create" element={<CreatePost />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Pages;