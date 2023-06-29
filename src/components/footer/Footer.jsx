import React from "react";
import {
    FaGithub,
    FaLink,
    FaMailBulk,
    FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import ansh from "../../assets/ansh.png";

import "./footer.scss";

const Footer = () => {
    const handleClick = () => {
        window.location.href = 'https://anshjoshi.vercel.app/';
      };
    return (
        <footer className="footer">
            <ContentWrapper>
               
                <div className="infoText">
                <img src={ansh}  onClick={handleClick}  style={{ cursor: 'pointer' }}alt="" />
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <Link to="https://github.com/ANSHJOSHI1811"><FaGithub style={{color:"#5271ff"}}/></Link>
                    </span>
                    <span className="icon">
                       <Link to="https://www.anshjoshi.vercel.app"><FaLink style={{color:"#5271ff"}} /></Link> 
                    </span>
                    <span className="icon">
                       <Link to="https://www.linkedin.com/in/ansh-joshi-6162951b3/"><FaLinkedin style={{color:"#5271ff"}} /></Link> 
                    </span>
                    <span className="icon">
                        <Link to="mailto:anshsjoshi@outlook.com"> <FaMailBulk style={{color:"#5271ff"}}/></Link>
                       
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;