import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_CONSTANTS } from "../utils/constant"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()

    const getNowPlayingMovie = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_CONSTANTS)
      const response = await data.json()
      dispatch(addNowPlayingMovies(response.results))
    }
  
    useEffect(()=>{
      getNowPlayingMovie()
    },[])
  
}

export default useNowPlayingMovies;
