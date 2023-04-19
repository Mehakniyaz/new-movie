import {createSlice} from "@reduxjs/toolkit"
const movieData=createSlice({

    name:"movie_slice",
    initialState:{
        product:null
    },
    reducers:{
        getMovie:(state,action)=>{
            console.log(action)
          state.product=[...action.payload]
        }
    }
})
export const movieAction=movieData.actions
export default movieData