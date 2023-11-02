import { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import ProfilePic from "./ProfilePic";

function Comment() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [userName,setUserName] = useState("");
  const [isElementVisible, setElementVisibility] = useState(false);

  const submitComment = () => {
    if (commentText.trim() !== "") {
      const currentTime = new Date();
      const hours = (currentTime.getHours()).toString()
      let minutes = (currentTime.getMinutes()).toString();
      if(minutes.length===1){
        minutes="0"+ minutes
      }
      // console.log(minutes)
      const hourTime = `${hours}:${minutes}`;
      // console.log(hourTime)
      const newComment = { text: commentText, time: hourTime, user:userName};
      setComments([...comments, newComment]);
      setCommentText("");
    }
  };


  const toggleComment = () => {
    setElementVisibility(!isElementVisible);
  };

  return (
    <>
    <button className="btn btn-outline-secondary" onClick={toggleComment}>Comment</button>
    {isElementVisible && (
      <div className="input-group-mb-3">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="comment" aria-label="Recipient's username" aria-describedby="basic-addon2" value={commentText}
          onChange={(e) => setCommentText(e.target.value)}/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={submitComment}>comment</button>
          </div>
        </div>
        <ul className="list-group" id="comments">
          {comments.map((comment, index) => (
            <li className="list-group-item" key={index}>
              <div className="flex flex-col items-start">git remote set-url origin
                <ProfilePic/>
                <p className="font-bold text-lg inline ">@{comment.user}</p>
                <p className="font-thin text-sm inline text-justify"> - {comment.time}</p>
                <p className="ml-0">{comment.text}
                <LikeButton className="ml-auto"/></p>
              </div>
            </li>
          ))}
        </ul>
      </div> 
      )}
    </>
  );
}

export default Comment;
