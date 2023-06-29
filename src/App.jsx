import { useState,useEffect } from "react"
import {fetchDataFromApi} from "./utils/api"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getApiConfiguration,getGenres} from './store/homeSlice'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Header from  './components/header/Header'
import Footer from  './components/footer/Footer'
import Home from './pages/home/Home'
import PageNotFound from "./pages/404/PageNotFound"
import Details from "./pages/details/Details"
import Explore from "./pages/explore/Explore"
import SearchResult from "./pages/searchResult/SearchResult"



function App() {
  const dispatch = useDispatch();                               //*It is the way to trigger the state change 
  const {url}= useSelector((state)=>state.home)                 //*Here in the callback we can get our store 
   console.log(url) 
  useEffect(()=>{
    fetchApiConfig()
    genresCall();
   },[])


   const fetchApiConfig =()=>{
    fetchDataFromApi('/configuration').then((res)=>{
      console.log(res);
      const url={
        backdrop:res.images.secure_base_url +"original",
        poster:res.images.secure_base_url +"original",
        profile:res.images.secure_base_url +"original",
      }
      dispatch(getApiConfiguration(url)) 
    
    })
   }
const genresCall= async ()=>{
  let promises = []
  let endPoints = ["tv","movie"]
  let allGenres ={}
  endPoints.forEach((url)=>{
     promises.push(fetchDataFromApi(`/genre/${url}/list`))
  })
  const data = await Promise.all(promises)
  data.map(({genres})=>{
    return genres.map((item)=>(allGenres[item.id] = item))
  })
  dispatch(getGenres(allGenres));
}
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/:mediaType/:id" element={<Details/>}/>
  <Route path="/search/:query" element={<SearchResult/>}/>
  <Route path="/explore/:mediaType" element={<Explore/>}/>
  <Route path="*" element={<PageNotFound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>


   
   
   
   
   
   
   
   
    // <div className='App'>{url?.total_pages}</div> //* url? is the optional chaining because it takes time to fetch the data from the URL ,so By doing these the Code with will not further executed until we get the value.

    
  )
}

export default App
