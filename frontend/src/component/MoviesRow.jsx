import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

function MoviesRow() {
    const movies=useSelector(store=>store.movie)
    
  return (
    <div >
        <MoviesList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MoviesList title={"Up Coming Movies"} movies={movies.upComingMovies}/>
        
    </div>
  )
}

export default MoviesRow