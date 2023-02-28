import React from 'react';
import { useParams } from 'react-router-dom';
import Panal from './Components/Panal';
import SubmitForm from './SubmitForm';

export default function Form({movies}) {
    const id = useParams().id;
    let movie = movies.find((movie) => {
        return (movie.show.id == id)
    });
    movie  = movie.show;


  return (
    <div className='flex min-h-screen p-8 m-44'>
        <div className='flex-[0.5] border'>
            <div className='m-6 h-[80%]  shadow-2xl shadow-slate-500'>
                  <div className='h-full bg-cover rounded-t-2xl' style={{ backgroundImage: `url(${movie.image.original})`, objectFit: "cover" }}></div>
                  <div className='bg-slate-800  flex justify-center items-center rounded-b-2xl'> <div className='text-white font-bold text-2xl p-6 '>{movie.name}</div></div>
            </div>
        </div>
        {/* <div className='flex-[0.5]'><Panal/></div> */}
          <div className='flex-[0.5] border min-h-screen'><SubmitForm movieName = {movie.name} movieTime = {movie.schedule}/></div>
    </div>
  )
}
