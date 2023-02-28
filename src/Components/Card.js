import React from "react";
import StarIcon from "@mui/icons-material/Star";
import na from "../Components/na.jpg";
import notA from "../Components/notA.jpg";
import { useNavigate } from "react-router-dom";
export default function Card({ movie }) {
    const navigate  = useNavigate() ; 
    return (
        <div>
            <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                        {movie.image && movie.image.medium ? (
                            <img className="locandina" src={movie.image.medium} />
                        ) : (
                            <img src={na} className="locandina" />
                        )}
                        <h1 className="font-bold text-2xl">{movie.name}</h1>
                        <h4>
                            {movie.premiered && movie.premiered.substring(0, 4)}
                            {movie.premiered && movie.network && movie.network.country && (
                                <span>, </span>
                            )}
                            {movie.network &&
                                movie.network.country &&
                                movie.network.country.name}
                        </h4>
                        <div className="minutes  relative">
                            <div className="text-amber-300  scale-[2.5]">
                                <StarIcon />{" "}
                            </div>
                            <div className=" text-black absolute font-bold top-[25%] left-[20%] ">
                                {(movie.rating )&&(movie.rating.average)? (
                                    Number(movie.rating.average).toFixed(1)
                                ) : (
                                    <div className="text-[0.65rem]">N/A</div>
                                )}
                            </div>
                        </div>
                        <p className="type pt-6 mt-8 ">{movie.genres && movie.genres.join(",  ")}</p>
                    </div>
                    <div className="movie_desc">
                        <p className="text line-clamp-4 text-justify text-lg font-extralight">
                            {movie.summary&& movie.summary.replace(/<[^>]+>/g, "")}
                        </p>

                    </div>
                    <p className="text-white ml-5 mb-10 text-lg"><span className="text-blue-300">Language :</span> {movie.language}</p>

                </div>
                {movie.image && movie.image.original ?(
                    <div
                        className="blur_back"
                        style={{ backgroundImage: `url(${movie.image.original})` }}
                    ></div>
                ) : (
                    <div
                        className="blur_back"
                        style={{ backgroundImage: `url(${notA})` }}
                    ></div>
                )}
                 <button className="bg-gray-900 hover:bg-gray-400 text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center absolute bottom-0 right-0 mb-5 mr-5 cursor-pointer border z-[999]"
                     onClick={()=>{navigate(`/KnowMore/${movie.id}`)}}
                 >
                Know more
                </button>
            </div>

        </div>
    );
}
