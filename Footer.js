import React from 'react';

import './Footer.css';
import {assets} from '../../assets/assets';



const Footer =()=>{
    return(
<div className='footer' id='footer'>
    <div className='footer-content'>
        <div className='footer-content-left'>
            <h2>Zalt.</h2>
            <p>Savor delicious dishes delivered fast to your door.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
<h2>Get in Touch</h2>
<ul>
    <li>+91 8919320458</li>
    <li>ordezalt@gmail.com</li>
</ul>
<div className='app-download-platforms'>
    <img src={assets.play_store} alt='playstore_app'/>
    <img src={assets.app_store} alt='appstore_app'/>
</div>
        </div>
    </div>
    <hr/>
    <p className='footer-copyright'> Copyright 2024 &copy; Zalt.com-All Right Reserved</p>
</div>


    )
}
export default Footer;