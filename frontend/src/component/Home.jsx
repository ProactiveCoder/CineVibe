import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
import axios from "axios";
import { NOW_PLAYING_MOVIES, options } from "../utils/constant";
import { getnowPlayingMovies } from "../redux/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import MoviesList from "./MoviesList";
import MoviesRow from "./MoviesRow";
import SearchMovies from "./SearchMovies";
import PlayingMovie from "./PlayingMovie";

function Home() {
  const user = useSelector((store) => store.user.user);
  const searchMovies=useSelector(store=>store.movie.searchMovies)
  const navigate = useNavigate();
 
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpComingMovies();
 


  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    
  }, []);

  
  return (
    <>
      {/* <Navbar/> */}
      <div className=" pt-14">
       {searchMovies? <SearchMovies/>:
       <>
       <PlayingMovie/>
       <MoviesRow/>
       
       </>
       }
      </div>
      
    </>
  );
}

export default Home;
