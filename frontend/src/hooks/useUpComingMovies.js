import axios from "axios";
import { options, UPCOMMING_MOVIES } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getupComingMovies } from "../redux/moviesSlice";

const useUpComingMovies=async ()=>{
    const dispatch=useDispatch()
    try {
        const res= await axios.get(UPCOMMING_MOVIES,options)
        dispatch(getupComingMovies(res.data.results))
    } catch (error) {
        console.log(error);
        
        
    }
}
export default useUpComingMovies;