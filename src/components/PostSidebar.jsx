import "../style/rightbar.scss"

function PostSidebar(){
    return(
        <div className="rightbar">
            <div className="user">
                <p className="username">Username <span className="lout">Log Out</span></p>
            </div>

            <div className="tab1">
                <h2>Nepal</h2>
                <p>Discover Nepal </p>
                <div className="members">
                    <span className="amt">131</span>
                    <p>Members</p>
                </div>
                <button className="btn2">Joined</button> 
            </div>  
            
            <div className="tab2">
                <h2>Top Communities</h2>
                <ul>
                    <li>Football</li>
                    <li>AI</li>
                    <li>Food</li>
                    <li>Anime</li>
                    <li>Basketball</li>
                </ul>
            </div>

            <div className="tab3">
                <p>SocialSphere, 2023. All rights reserved.</p>
            </div>
        </div>
    )
}

export default PostSidebar;