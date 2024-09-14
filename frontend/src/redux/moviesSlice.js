import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        searchMovies:false,
    },
    reducers:{
       //action
       getnowPlayingMovies:(state,action)=>{
        state.nowPlayingMovies=action.payload
       },
       getpopularMovies:(state,action)=>{
        state.popularMovies=action.payload
       },
       gettopRatedMovies:(state,action)=>{
        state.topRatedMovies=action.payload
       },
       getupComingMovies:(state,action)=>{
        state.upComingMovies=action.payload
       },
       setsearchMOvies:(state)=>{
        state.searchMovies=!state.searchMovies
       }
    }
})
export const {getnowPlayingMovies,getpopularMovies,gettopRatedMovies,getupComingMovies,setsearchMOvies} =moviesSlice.actions
export default moviesSlice.reducer 