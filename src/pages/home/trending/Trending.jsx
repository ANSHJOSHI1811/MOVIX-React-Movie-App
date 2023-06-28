import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import  useFetch from "../../../hooks/useFetch"
import Carousel from '../../../components/carousel/Carousel'
function Trending() {
  const [endpoint,setEndpoint] =useState("day")
  const{data,loading}= useFetch(`/trending/all/${endpoint}`)
  const onTabChange = (tab)=>{
    setEndpoint(tab === "Day" ? "day" : "week");
  }
  return (
   <div className="carouselSection">
    <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange  }/>      {/* //*Array is used to make Switch Tab more Flexible and Reuseable (Dynamic) */}
   
    </ContentWrapper>
<Carousel data={data?.results} loading ={loading}/>
   </div>
  )
}

export default Trending

//?The control of Switch Tab is to parent component who wants switch tab to Work
//? SWITCH-Tab : When ever the Tab is changed an Api will be called (By Default Day)