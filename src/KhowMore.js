import React from 'react' ;
import { useParams } from 'react-router-dom';
import BigCard from './Components/BigCard';

export default function KhowMore({movies}) {
    const id  = useParams().id ; 
    let movie = movies.find((movie) =>{
        return (movie.show.id == id)});


        console.log( movie)
    
  return (
    <div>
      {
              movie && movie.show && <BigCard movie={movie.show} />
      }
    </div>
  )
}
