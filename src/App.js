import {useEffect}from "react"
import Header from "./Components/Header/Header"
import axios from "axios"
import { useDispatch,useSelector} from "react-redux"
import { movieAction } from "./store/moviedataSlice"
import CardGrid from "./Card/cardGrid"
import SearchBar from "./Components/Search"
import styles from "./App.module.css"
import Footer from "./Components/Footer"
import { Routes ,Route} from "react-router-dom"
import MovieDesc from "./Pages/MovieDescription"
function App(){

  const product=useSelector((state)=>state.movie_slice.product)
 const dispatch=useDispatch()
useEffect(()=>{

axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
.then((response)=>{
 
  dispatch(movieAction. getMovie(response.data.results))
})


},[])

console.log(product)
  return<> 
  <Header></Header>
  {/* <SearchBar></SearchBar> */}
  <Routes>
  <Route path="/" element={<CardGrid/>}></Route>
   <Route path="/home/:movieId" element={<MovieDesc/>}></Route>
   <Route path="/home" element={<CardGrid/>}></Route>
 </Routes>
 
    <Footer></Footer>
    </>
}
export  default App