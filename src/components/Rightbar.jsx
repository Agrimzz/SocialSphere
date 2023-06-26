import "../style/rightbar.scss"

function Rightbar(){
    return(
        <div className="rightbar">
            <div className="user">
                <p className="username">Username <span className="lout">Log Out</span></p>
            </div>

            <div className="tab1">
                <h2>Home</h2>
                <p>Your personalized homepage to check your favourite communities</p>   
                <button className="btn1">Create Post</button>
                <button className="btn2">Create Community</button> 
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

export default Rightbar;