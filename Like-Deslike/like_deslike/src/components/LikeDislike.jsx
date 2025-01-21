
import { useDispatch, useSelector } from 'react-redux';
import { decreaseLikes, increaseLikes, resetLikeDislike } from '../redux/featurs/like-dislke/likeDisLikeSlice';

function LikeDislike() {

    const {likes,dislikes}=useSelector((state)=>state.likeDislike)
    const dispatch = useDispatch()

    const handleIncreaseLikes = ()=>{
        // console.log("likes")
        dispatch(increaseLikes())
    }

    const handleDecreaseLikes = ()=>{
        // console.log("dislikes")
        dispatch(decreaseLikes())
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md max-w-md mx-auto rounded-lg p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-5">Lile / Disliker App</h1>

        <div>
          <p>
            Likes: <span className="text-green-500">{likes}</span>
          </p>
          <p>
            DisLikes: <span className="text-red-500">{dislikes}</span>
          </p>
        </div>

        <div className="space-x-4">
            <button onClick={handleIncreaseLikes} className="text-white bg-green-400 hover:bg-green-600 py-2 px-4 rounded-md">Add Like</button>
            <button onClick={handleDecreaseLikes} className="text-white bg-red-400 hover:bg-red-600 py-2 px-4 rounded-md">Add DisLike</button>
            <button onClick={()=>dispatch(resetLikeDislike())} className="text-white bg-blue-400 hover:bg-blue-600 py-2 px-4 rounded-md">Reset</button>
            
        </div>
      </div>
    </div>
  );
}

export default LikeDislike;
