import "../style/create.scss"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CreatePost() {
    const navigate = useNavigate()
    const [title, setTitle] = useState({})
    const [desc, setDesc] = useState({})
    const [image, setImage] = useState(null)
    const [selectedCommunity, setSelectedCommunity] = useState([])

    const [communities, setCommunities] = useState([]);

    useEffect(() => {
      axios.get("http://localhost/SocialSphere/getcommunity.php")
        .then(response => {
          setCommunities(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    
    
    const handleSubmit = (event) => {
        
        event.preventDefault();
        let formData = new FormData()
        formData.append("title", title)
        formData.append("desc", desc)
        formData.append("image", image)
        formData.append("uid", sessionStorage.getItem("uid"))
        formData.append("cname",selectedCommunity)
        axios.post("http://localhost/SocialSphere/upload.php", formData).then((response) => {
            console.log(response.data)
            navigate ('/')
        })

    }

    function change() {
        document.getElementById("invis").style.display = "none"
        
    }
    return(
        <div className="invis" id="invis" >  
            <div className="bigblack" onClick={change}></div>
            <div className="createPost">
            <div className="box">
                <h1>Create a Post</h1>
                <form onSubmit={handleSubmit}>

                    <div className="choice">
                        <p>Choose community to post to :</p>
                        <select name="community" onChange={(e) => setSelectedCommunity(e.target.value)}>
                            {communities.map((community, index) => (
                                <option key={index} value={community.title}>
                                {community.title}
                                </option>
                            ))}
                        </select>

                    </div>

                    <input type="text" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required maxLength="50"/>
                    <textarea name="desc" cols="30" rows="10" placeholder="Text" onChange={(e) => setDesc(e.target.value)}></textarea>
                    {/* <div className="container">
                        <div>
                            <input type="file" id="upload-button" multiple accept="image/*" />
                            <label>&nbsp; Choose Or Drop Photos</label>
                        </div>                        
                    </div> */}
                    <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])}/>
                    <button>Post</button>
                </form>
            </div>
        </div>
        </div>
        
    )
}

export default CreatePost;