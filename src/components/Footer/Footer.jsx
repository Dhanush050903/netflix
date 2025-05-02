import React from 'react'
import "./Footer.css"
import youtube_icon from'../../assets/youtube_icon.png'
import facebook_icon from'../../assets/facebook_icon.png'
import instagram_icon from'../../assets/instagram_icon.png'
import twitter_icon from'../../assets/twitter_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={youtube_icon}></img>
        <img src={facebook_icon}></img>
        <img src={instagram_icon}></img>
        <img src={twitter_icon}></img>
      </div>
      <ul>
        <li>Leagal Notice</li>
        <li>Help Center</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>© 2025 Netflix. All rights reserved.</p>
    </div>
  )
}

export default Footer
