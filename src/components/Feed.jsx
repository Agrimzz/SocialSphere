import "../style/feed.scss"
import Rightbar from "./Rightbar"
import image from "../images/image.svg"
import circle from "../images/circle.svg"
import img1 from "../images/img1.png"
import like from "../images/like.svg"
import dislike from "../images/dislike.svg"
import comment from "../images/comment.svg"

function Feed() {
    return(
        <div className="feed">
            <div className="posts">
                <div className="makePosts">
                    <input type="text" placeholder="Write Something" />
                    <img src={image} alt="" />
                </div>

                <div className="post">
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
                </div>

                <div className="post">
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
                </div>

                <div className="post">
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
                </div>

                <div className="post">
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
                </div>
            </div>
            <Rightbar />
        </div>
        
    )
}


export default Feed;