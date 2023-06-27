
import PostSidebar from "./PostSidebar";
import circle from "../images/circle.svg";
import "../style/post.scss";
import postpic from "../images/post.png";
import like from "../images/like.svg"
import dislike from "../images/dislike.svg"
import comment from "../images/comment.svg"

function Post() {
    return(
        <div className="mainPost">
            <div className="postbox">
                <div className="post">
                    <div className="pRow1">
                        <h3>User</h3>
                        <div className="postTime">
                            <img src={circle} alt="" />
                            <p>an hour ago</p>
                        </div>
                    </div>
                    
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae vitae sequi et illo enim, consequatur aspernatur eum. Nam dolores dicta suscipit cum. Deserunt, consequuntur? Atque consequuntur eligendi accusantium ab ducimus?</p>

                    <img src={postpic} alt=""  className="p-img"/>

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
            <PostSidebar />
            
        </div>
    )
}

export default Post;