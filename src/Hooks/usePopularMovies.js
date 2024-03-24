import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_CONSTANTS } from "../utils/constant"

const usePopularMovies = ()=>{
    const dispatch = useDispatch()

    const getPopularMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_CONSTANTS)
      const response = await data.json()
      dispatch(addPopularMovies(response.results))
    }
  
    useEffect(()=>{
        getPopularMovies()
    },[])
  
}

export default usePopularMovies;
