import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
const base_url = "https://image.tmdb.org/t/p/original/";

const  Row=({title, fetchUrl})=> {
  const [movies, setMovies]=useState([])

  useEffect(()=>{
    async function fetchData(){
      const request= await axios.get(fetchUrl)
      console.log(request.data.results)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  },[fetchUrl])

  return (
    <div className='row'>
        <h2>Row Title</h2>
        <div className='row_posters'>
          {movies?.map(movie=>(
            <img key={movie.id} src={`${base_url}${movie.backdrop_path}}`} alt={movie.name} />

          )

          )}
        </div>
        

    </div>
    
  )
}

export default Row