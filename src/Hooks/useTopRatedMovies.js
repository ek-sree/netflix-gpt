import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_CONSTANTS } from "../utils/constant"

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()

    const getTopRatedMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_CONSTANTS)
      const response = await data.json()
      dispatch(addTopRatedMovies(response.results))
    }
  
    useEffect(()=>{
        getTopRatedMovies()
    },[])
  
}

export default useTopRatedMovies;
