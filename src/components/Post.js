import React, {useState} from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';



function Post({profilePic, image, username, timestamp, message}) {
  
      
      let newCl = "blue";
      const [cl, setCl] = useState("");
      const clChange = () => {
          
          setCl(newCl);
      };
      const [input, setInput] = useState("");

    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        setInput("");
        
      };

      const [data,setData]=useState(null)
      const [print, setPrint]=useState(false)
      function getData(val)
      {
          setData(val.target.value)
          setPrint(false)
          console.warn(val.target)
      }
    
  
  return (
    <div className='post'>
    
        <div className="post__top">
            <Avatar src={profilePic}
            className="post__avatar" />
            <div classname="post__topInfo">
                <h3>{username}</h3>
                <p>Timestamp... </p>
            </div>
        </div>

        <div className="post__bottom">
            
              <p>{message}</p>
            
        </div>

        <div className="post__image">
            <img src={image} alt="" />
        </div>

        <div className="post__options">
      
            <div className="post__option">
              

                <ThumbUpIcon style={{ color: `${cl}`}}
                onClick={clChange} >
                </ThumbUpIcon>
                <p style={{color: `${cl}`}} onClick={clChange}>Like </p>
                
                
            </div>

            <div className="post__option">
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>

            <div className="post__option">
                <NearMeIcon />
                <p>Share</p>
            </div>

            <div className="post__option">
                <AccountCircleIcon />
                <ExpandMoreOutlinedIcon />
            </div>
            
        </div>
        < div className="commentsec">
            {
                print?
                <h1>{data}</h1>
                :null
            }
                <form>
                    <input
                        // value={input}
                        type="text"
                        // onChange={(e) => setInput(e.target.value)}
                        onChange={getData}
                        className="post__input"
                        placeholder={`Write a comment...`}
                    />
                </form>
                <button onClick={()=>setPrint(true)}>Print</button>
            </div>

    </div>
  );
}

export default Post;
