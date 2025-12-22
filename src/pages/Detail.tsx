import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMultiplePages } from "../api"
import type { movie } from "../types/movie";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Detail() {
    const { id } = useParams<{ id: string }>();
    const [movies, setMovies] = useState<movie | null>(null);
    
    useEffect(() => {
        async function getMovie(): Promise<void> {
            const movies = await fetchMultiplePages();
            const findMovie = movies.find((m) => m.id === Number(id));

            setMovies(findMovie || null);
        }
        getMovie();
    }, [id])

    if (!movies) {
        return <p className="font-customBold text-center text-black dark:text-white mt-10">영화를 찾을 수 없습니다.</p>;
    }

    return(
        <div className="movie-container flex flex-col lg:flex-row items-center justify-center lg:items-start px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-24 
                        bg-white dark:bg-black text-black dark:text-white min-h-screen">
            <div className="w-full sm:w-auto flex-shrink-0">
                <img 
                    src={IMG_BASE_URL + movies.poster_path} 
                    alt="영화 포스터"
                    className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md object-cover shadow-lg mx-auto"
                />
            </div>
            <div className="movie-info mt-6 sm:mt-8 lg:mt-0 lg:ml-8 xl:ml-16 text-center lg:text-left w-full lg:flex-1">
                <h2 className="font-customBold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 px-2 sm:px-0">{movies.title}</h2>
                <span className="font-customRegular text-base sm:text-lg md:text-xl text-black dark:text-yellow-400 mb-3 sm:mb-4 block">⭐ {movies.vote_average.toFixed(1)}</span>
                <h3 className="font-customRegular text-sm sm:text-base md:text-lg text-gray-900 dark:text-gray-400 mb-3 sm:mb-4 px-2 sm:px-0">개봉일: {movies.release_date}</h3>
                <h3 className="font-customRegular text-sm sm:text-base md:text-lg text-gray-900 dark:text-gray-300 leading-relaxed max-w-full lg:max-w-2xl mx-auto px-2 sm:px-0">{movies.overview}</h3>
            </div>
        </div>
    )
}