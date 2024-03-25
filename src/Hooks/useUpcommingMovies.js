import { useDispatch } from "react-redux"
import {  addUpcommingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_CONSTANTS } from "../utils/constant"

const useUpcommingMovies = ()=>{
    const dispatch = useDispatch()

    const getUpcommingMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_CONSTANTS)
      const response = await data.json()
      dispatch(addUpcommingMovies(response.results))
    }
  
    useEffect(()=>{
        getUpcommingMovies()
    },[])
  
}

export default useUpcommingMovies;
