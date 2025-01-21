import { configureStore } from '@reduxjs/toolkit'
import likeDislikeReducer from '../redux/featurs/like-dislke/likeDisLikeSlice'
 const store = configureStore({
  reducer: {
    likeDislike: likeDislikeReducer
  },
})

export default store