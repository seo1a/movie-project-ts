import { useState, useMemo } from "react";
import Movie from "../components/Movie";
import type { movie } from "../types/movie";

type Action =
  | { type: "ADD"; movie: movie }
  | { type: "REMOVE"; id: number }
  | { type: "LOAD"; movies: movie[] };

interface HomeProps {
    searchResults: movie[];
    dispatch: React.Dispatch<Action>;
    favorites: movie[];
    isFavorite: (favorites: movie[], id:number) => boolean;
}

export default function Home({ 
    searchResults, 
    dispatch, 
    favorites, 
    isFavorite 
}: HomeProps) {
    const [sortType, setSortType] = useState<"default" | "rating" | "latest" | "oldest">("default");

    const sortedMovies = useMemo(() => {
        let sorted = searchResults.slice(); // 원본 배열 복사

        if(sortType === "rating") {
            sorted.sort((a, b) => b.vote_average - a.vote_average);
        }
        else if(sortType === "latest") {
            sorted.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        }
        else if(sortType === "oldest") {
            sorted.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
        }
        
        return sorted;
    }, [searchResults, sortType]);

    return(
        <div className="bg-white dark:bg-black min-h-screen">
            <div className="px-4 sm:px-6 md:px-10 lg:px-24 pt-6 sm:pt-8 md:pt-10 lg:pt-16">
                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value as "default" | "rating" | "latest" | "oldest")}
                    className="font-customRegular p-2 sm:p-2.5 bg-white dark:bg-black text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm sm:text-base md:text-lg cursor-pointer border border-gray-300 dark:border-gray-700 rounded"
                >
                    <option value="default">기본 정렬</option>
                    <option value="rating">평점순</option>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된순</option>
                </select>
            </div>

            <div className="flex bg-white dark:bg-black justify-center w-full px-2 sm:px-4 md:px-6 lg:px-12 py-4 sm:py-5 md:py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full max-w-7xl">
                    {sortedMovies.length > 0 ? (
                        sortedMovies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                posterPath={movie.poster_path}
                                voteAvg={movie.vote_average}
                                dispatch={dispatch}
                                isFavorite={isFavorite(favorites, movie.id)}
                            />
                        ))
                    ) : (
                        <p className="font-customBold text-center col-span-full text-base sm:text-lg md:text-xl text-gray-400 py-8 sm:py-12">검색 결과가 없습니다.</p>
                    )}
                </div>
            </div>
        </div>
        
        
    )
}