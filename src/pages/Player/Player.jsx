import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
    const navigate=useNavigate();

    const{id}=useParams();
    const [apiData, setApiData]=useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODdjZjQ0MzIwZmFhNTE0YmQ1ZGRlYzEyOGYzMWJjNCIsIm5iZiI6MTc0NjE2NTY3NC4zMTksInN1YiI6IjY4MTQ1ZmFhODNkMjFiYzVlZDQ5MGRiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fXhaKauS_aB6hncRyp1B6ty4iISgSFN0QzVT1dGoqSY'
        }
      };
      
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
      },[])

  return (
    <div className='player'>
        <img src={back_arrow_icon} onClick={()=>{navigate(-1)}}></img>
        <iframe height="90%" width="90%" src={`https://www.youtube.com/embed/${apiData.key}`}
         title='Trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info">
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>

    </div>
  )
}
export default Player
