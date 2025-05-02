import React, { useEffect, useState } from 'react'
import "./TitleCards.css"
import cards_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom';
const TitleCards = ({title,category}) => {
    const [apiData,setApiData]=useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODdjZjQ0MzIwZmFhNTE0YmQ1ZGRlYzEyOGYzMWJjNCIsIm5iZiI6MTc0NjE2NTY3NC4zMTksInN1YiI6IjY4MTQ1ZmFhODNkMjFiYzVlZDQ5MGRiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fXhaKauS_aB6hncRyp1B6ty4iISgSFN0QzVT1dGoqSY'
        }
      };
      
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));
      },[])
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {
            apiData.map((card,index)=>{
                return <Link to={`/player/${card.id}`} className="card" key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}></img>
                    <p>{card.original_title}</p>
                </Link>
            })
        }
      </div>
    </div>
  )
}

export default TitleCards
