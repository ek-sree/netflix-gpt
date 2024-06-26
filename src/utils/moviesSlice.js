import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcommingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcommingMovies:(state, action)=>{
            state.upcommingMovies = action.payload
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcommingMovies } = moviesSlice.actions

export default moviesSlice.reducer