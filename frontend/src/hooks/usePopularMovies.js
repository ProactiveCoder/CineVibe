import axios from "axios"
import { POPULAR_MOVIES,options } from "../utils/constant"
// import { options } from "nodemon/lib/config"
import { useDispatch } from "react-redux"
import { getpopularMovies } from "../redux/moviesSlice"

const usePopularMovies=async()=>{
    const dispatch=useDispatch()
    try {
        const res=await axios.get(POPULAR_MOVIES,options)
        dispatch(getpopularMovies(res.data.results))

    } catch (error) {
        console.log(error)
    }
}

export default usePopularMovies;