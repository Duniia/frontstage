import React from "react";
import {AiOutlineInstagram, AiOutlineCopyrightCircle} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                </div>
                <ul className="footer-links">
                    <h3>Info</h3>
                    <Link to="/about" className='about'>
                <li>Om os</li>
            </Link> 
            <Link to="/contact" className='contact'>
                <li>Kontakt</li>
            </Link> 

            <h3>Shop</h3>           
            <Link to="/giftcard" className='giftcard'>
                <li>Gavekort</li>
            </Link> 
            <Link to="/privatpolitik" className='allcollections'>
                <li>Privatpolitik</li>
            </Link> 
            <Link to="/returpolitik" className='allcollections'>
                <li>returpolitik</li>
            </Link> 
        </ul>
                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <AiOutlineCopyrightCircle/>{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} F R O N T S T A G E
                    </span>
                </div>
                <a className="item3" href="https://www.instagram.com/frontstage_dk/" target="_blank"><AiOutlineInstagram/></a>
            </div>
        </footer>
        </>
    );
};

export default Footer;