import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";                            //? Helps to Converts "2023-03-07"  to March 07,2023"

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
// import PosterFallback from "../../assets/no-poster.png";  
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";

import "./style.scss";
// todo: Doubt Full Case 
const  Carousel = ({data,loading})=>{
    const carouselContainer = useRef();
    const {url} =useSelector((state)=>state.home)
  return (
    <div>Carousel</div>
  )
}

export default Carousel
//?There is No get element by ID ,So we use Ref hook to get to that element  
//? OR To select any element in DOM we use Ref in React 