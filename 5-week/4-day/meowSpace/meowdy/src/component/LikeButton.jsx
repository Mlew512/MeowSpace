import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function LikeButton() {

    const [likes,setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
        setHasLiked(true);
      };

    return (
        <div className='ml-6'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-12 h-12 p-2 flex items-center justify-center" onClick={handleLike}>
                <div className='flex flex-row items-center'>
                    <span className="inline text-base material-symbols-outlined">favorite</span>
                    {hasLiked && <div className="inline ml-1">{likes}</div>}
                </div>
            </button>
        </div>
      );
  }
  



  export default LikeButton;