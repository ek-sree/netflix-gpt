import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)

  return (
    movies.nowPlayingMovies &&(
      <div className=' bg-black'>
      <div className='-mt-50 relative z-20 pl-12'>
      <MovieList title={"Now playing movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Upcomming Movies"} movies={movies.upcommingMovies}/>
      <MovieList title={"Action Movies"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
  )
}

export default SecondaryContainer