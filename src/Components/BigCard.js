import React from 'react'
import na from "../Components/na.jpg";
import StarIcon from '@mui/icons-material/Star';
import {  useNavigate } from 'react-router-dom';
export default function BigCard({ movie }) {
    const navigate = useNavigate() ;
    return (
        <div className='w-full h-screen'>

            <div className=" w-full h-[70%]  bg-cover flex " style={{ backgroundImage: `url(${movie.image.original})`, objectFit: "cover" }}>
                <div className='m-1 '>  {movie.image && movie.image.original ? (
                    <img className="locandina h-[100%] " src={movie.image.original} />) : (
                    <img src={na} className="locandina" />)}
                </div>
                <div className=' text-white font-bold text-5xl flex flex-col relative'>
                    <h1 className='mt-7 ml-6'>{movie.name}</h1>
                    <div className="minutes  relative">
                        <div className="text-amber-300 ml-4 ">
                            <StarIcon style={{ fontSize: "70px" }} /><span className='text-white text-3xl'>&nbsp;
                                {(movie.rating) && (movie.rating.average) ? (
                                    Number(movie.rating.average).toFixed(1).toString() + "/10") : ("N/A")}
                            </span>
                        </div>

                      
                    </div>
                    <div className='mb-5'>
                        <p className="type pt-6 mt-8 text-xl font-extralight"><span className='font-bold'>Genres &nbsp; &nbsp; &nbsp; :&nbsp;  </span>{movie.genres && movie.genres.join(",  ")}</p>
                    </div>
                    <div className='text-xl'>
                        <h4 className=' font-light '>
                            <span className='font-bold '>premiere &nbsp; :&nbsp;  </span>{movie.premiered && movie.premiered}<br />

                            <span className='font-bold'>Country &nbsp; &nbsp;   :&nbsp; </span>{movie.network &&
                                movie.network.country &&
                                movie.network.country.name}
                        </h4>
                    </div>
                    <div className='mt-4'>
                        <p className="text-white text-xl "><span className="text-blue-300">Language :</span> {movie.language}</p>
                    </div>
                    <div className='mt-6 text-lg'>
                        <button className="bg-gray-900 hover:bg-gray-400 text-gray-50 font-bold py-2 px-4 rounded-xl inline-flex items-center  mb-5 mr-5 cursor-pointer border z-[999] m-4"
                            onClick={() => { navigate(`/BOOK_TICKET/${movie.id}`) }}
                        >
                           <span className='pl-5 pr-5 pt-3 pb-3'>Book Tickets</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center m-20'>
              <p className='text-white font-bold text-3xl mb-4'>About the movie</p>
                    <p className="text-orange-100 text-justify text-xl font-extralight ">
                        {movie.summary && movie.summary.replace(/<[^>]+>/g, "")}
                    </p>
            </div>
        </div>
    )
}
