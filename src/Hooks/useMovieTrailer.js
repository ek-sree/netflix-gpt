import { useDispatch } from "react-redux";
import { API_CONSTANTS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch()

    const getMovieVideo = async () => {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_CONSTANTS
        );
        const data = await response.json();
    
        const filterData = data.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer))
      };
    
      useEffect(() => {
        getMovieVideo();
      }, []);
}

export default useMovieTrailer;