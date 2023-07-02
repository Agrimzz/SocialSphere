import "../style/rightbar.scss"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Rightbar(){

    const navigate = useNavigate()
    const user = sessionStorage.getItem("username");

    function signOut(){
        sessionStorage.clear()
        navigate ('/login')

    }
    return(
        <div className="rightbar">
            <div className="user">
                <p className="username">{ user } <span className="lout" onClick={signOut}>Log Out</span></p>
            </div>

            <div className="tab1">
                <h2>Home</h2>
                <p>Your personalized homepage to check your favourite communities</p>  
                <Link to={'/create'}>
                    <button className="btn1">Create Post</button>    
                </Link> 
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