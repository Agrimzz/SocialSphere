
import PostSidebar from "./PostSidebar";
import circle from "../images/circle.svg";
import "../style/post.scss";
import postpic from "../images/post.png";
import like from "../images/like.svg"
import dislike from "../images/dislike.svg"
import comment from "../images/comment.svg"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Rightbar from "./Rightbar";

function Post() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pid = searchParams.get("criteria");
    console.log(pid)
    let formData = new FormData()
    formData.append('pid', pid)

    axios.post("http://localhost/SocialSphere/viewpost.php", formData)
    .then((response) => {
        console.log(response.data)
        setData(response.data)
    })

    useEffect(() =>{
        if (sessionStorage.getItem('uid') === null){
        
            alert ('Login Required')
            navigate('/login')
        }

    },[])

    const created_at = new Date(data.time)
                        const month_num = created_at.getMonth()
                        const day = created_at.getDate()
                        const year = created_at.getFullYear()
                        const hour = created_at.getHours()
                        const min =  created_at.getMinutes()
                        const monthNames = [
                            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                        ]
                        const month = monthNames[month_num]
    return(
        <div className="mainPost">
            <div className="postbox">
                <div className="post">
                    <div className="pRow1">
                        <h3>{ data.username }</h3>
                        <div className="postTime">
                            <img src={circle} alt="" />
                            <p><strong>{ hour }:{ min }</strong> - { day } { month } { year } </p>
                        </div>
                        <h3 className="comm">{ data.community }</h3>
                    </div>
                    
                    <h2>{ data.title }</h2>
                    <p>{ data.body }</p>

                    <img src={`http://localhost/SocialSphere/images/${data.image}`}  alt=""  className="p-img"/>

                    <div className="pRow3">
                        <div className="vote">
                            <div className="like">
                                <img src={like} alt="" />
                                <p className="count">58</p>
                            </div>
                            <img src={dislike} alt="" />
                        </div>
                        <div className="comment">
                            <img src={comment} alt="" />
                            <p>2 comments</p>
                        </div>
                    </div>

                    <div className="makecomment">
                        <input type="text" placeholder="Write a comment" />
                        <button className="btn-comment">Comment</button>
                    </div>

                    <div className="comments">
                        <h2>Commenter</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio neque quo quae totam. Enim fuga aliquid corporis! Aut nisi magni similique repudiandae veniam, dolores, harum nemo necessitatibus voluptatum, doloremque ex?</p>
                        <div className="pRow3">
                            <div className="vote">
                                <div className="like">
                                    <img src={like} alt="" />
                                    <p className="count">3</p>
                                </div>
                                <img src={dislike} alt="" />
                            </div>
                            <div className="reply">
                                <img src={comment} alt="" />
                                <p>Reply</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <Rightbar />
            
        </div>
    )
}

export default Post;