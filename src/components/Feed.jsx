import "../style/feed.scss"
import Rightbar from "./Rightbar"
import image from "../images/image.svg"
import circle from "../images/circle.svg"
// import img1 from "../images/img1.png"
import like from "../images/like.svg"
import dislike from "../images/dislike.svg"
import comment from "../images/comment.svg"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CreatePost from "./CreatePost"


function Feed() {
    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get("http://localhost/SocialSphere/post.php")
        .then((response) =>{
        // console.log(response)
        setData(response.data)
        // console.log(response.data)
        // console.log(data)
    } )
    },[])

    function toggle() {
        var change = document.getElementById("invis").style.display
        if(change === 'none'){
            document.getElementById("invis").style.display = "block"
        }
        else{
            document.getElementById("invis").style.display = "none"
        }
        
    }
    

    return(
        <div>
            <CreatePost />
             <div className="feed">
                <div className="posts">
                    <div className="makePosts" onClick={toggle}>
                        {/* <div className="makePosts"> */}
                            <input type="text" placeholder="Write Something" readOnly />
                            <img src={image} alt="" />
                        {/* </div> */}
                    </div>
                    

                    {
                        data.map((item) => {
                            const created_at = new Date(item.time)
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
                            <Link to={`/post?criteria=${item.pid}`} key={item.pid} className="post" >
                                <div className="post" >
                                    <div className="postTexts">
                                        <div className="pRow1">
                                            <h3>{ item.username }</h3>
                                            <div className="postTime">
                                                <img src={circle} alt="" />
                                                <p><strong>{ hour }:{ min }</strong> - { day } { month } { year } </p>
                                            </div>
                                            <h3 className="comm">{ item.community }</h3>
                                        </div>
                                        <div className="pRow2">
                                            <h2>{ item.title }</h2>
                                        </div>
                                        <div className="pRow3">
                                            <div className="vote">
                                                <div className="like">
                                                    <img src={like} alt="" />
                                                    <p className="count">25</p>
                                                </div>
                                                <img src={dislike} alt="" />
                                            </div>
                                            <div className="comment">
                                                <img src={comment} alt="" />
                                                <p>12 comments</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="postImage">
                                    <img src={`http://localhost/SocialSphere/images/${item.image}`} alt="" />
                                    </div>
                                </div>
                            </Link>
                        )})
                    }
                

                    {/* <div className="post">
                        <div className="postTexts">
                            <div className="pRow1">
                                <h3>User</h3>
                                <div className="postTime">
                                    <img src={circle} alt="" />
                                    <p>an hour ago</p>
                                </div>
                                <h3 className="comm">Architecture</h3>
                            </div>
                            <div className="pRow2">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatibus praesentium, fugiat velit, numquam iste laudantium similique aperiam voluptatem architecto, nemo quisquam ut pariatur facere?</p>
                            </div>
                            <div className="pRow3">
                                <div className="vote">
                                    <div className="like">
                                        <img src={like} alt="" />
                                        <p className="count">25</p>
                                    </div>
                                    <img src={dislike} alt="" />
                                </div>
                                <div className="comment">
                                    <img src={comment} alt="" />
                                    <p>12 comments</p>
                                </div>
                            </div>
                        </div>

                        <div className="postImage">
                            <img src={img1} alt="" />
                        </div>
                    </div> */}
                </div>
                <Rightbar />
            </div>
        </div>
       
        
    )
}


export default Feed;