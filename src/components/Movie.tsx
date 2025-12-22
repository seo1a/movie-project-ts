import { Link } from "react-router-dom";
import { useCallback } from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

interface MovieProps {
    id: number;
    title: string;
    posterPath: string;
    voteAvg: number;
    dispatch: React.Dispatch<any>;
    isFavorite: boolean;
}

// 영화 제목 글자수 제한
const truncate = (str: string | undefined, n: number): string | undefined => {
    return str && str?.length > n ? str.slice(0, n - 1) + "..." : str;
};

export default function Movie({ 
    id, 
    title, 
    posterPath, 
    voteAvg, 
    dispatch, 
    isFavorite 
}: MovieProps) {
    const handleClick = useCallback(() => {
        if (isFavorite) {
            dispatch({ type: "REMOVE", id });
        } else {
            dispatch({ type: "ADD", movie: { id, title, posterPath, voteAvg } });
        }
    }, [isFavorite, dispatch, id, title, posterPath, voteAvg]);

    return(
        <div className="movie-container text-black dark:text-white w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px] mx-auto my-4 sm:my-6 md:my-8 relative group">
            <Link to={`/detail/${id}`}>
                <div className="relative w-full h-0 pb-[150%]">
                    <img 
                        className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer transition-transform duration-800 group-hover:scale-105" 
                        src={IMG_BASE_URL + posterPath} 
                        alt="영화 포스터"  
                    />
                </div>
            </Link>
            <div className="movie-info pt-2 sm:pt-3">
                <Link to={`/detail/${id}`}>
                    <h2 className="font-customBold dark:font-customRegular text-sm sm:text-base md:text-lg lg:text-xl line-clamp-2">{truncate(title, 15)}</h2>
                </Link>
                <div className="flex justify-between items-center text-xs sm:text-sm md:text-base lg:text-xl mt-1 sm:mt-2">
                    <span className="font-customRegular">⭐{voteAvg.toFixed(1)}</span>
                    <span className="cursor-pointer text-base sm:text-lg md:text-xl" onClick={handleClick}>
                        {isFavorite ? "❤️" : "🤍"}
                    </span>
                </div>
            </div>     
        </div>
    )
}