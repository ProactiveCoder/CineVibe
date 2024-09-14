import axios from "axios"
import { options, TOP_RATED_MOVIES } from "../utils/constant"
import { useDispatch } from "react-redux"
import { gettopRatedMovies } from "../redux/moviesSlice"


const useTopRatedMovies=async()=>{
    const dispatch= useDispatch()
    try {
        const res=await axios.get(TOP_RATED_MOVIES,options)
            dispatch(gettopRatedMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
export default useTopRatedMovies;