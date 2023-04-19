import { configureStore} from "@reduxjs/toolkit"; 
import movieData from "./moviedataSlice";
const store=configureStore({
    reducer:{
        "movie_slice":movieData.reducer
    }
})

export default store
