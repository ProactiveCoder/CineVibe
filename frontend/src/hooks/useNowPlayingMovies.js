import axios from "axios";
import { getnowPlayingMovies } from "../redux/moviesSlice";
import { NOW_PLAYING_MOVIES,options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useNowPlayingMovies=async()=>{
    const dispatch= useDispatch();
    try {
      const res=await axios.get(NOW_PLAYING_MOVIES,options);
      console.log(res.data.results)
      dispatch(getnowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error)
    }

  }

export default useNowPlayingMovies