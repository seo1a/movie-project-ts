import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import type { movie } from "../types/movie";

interface Suggestion {
    id: number;
    title: string;
}

interface SearchBarProps {
    value: string;
    setValue: (value: string) => void;
    filteredMovies: movie[];
    setSearchResults: (movies: movie[]) => void;
}

export default function SearchBar({ 
    value, 
    setValue, 
    filteredMovies, 
    setSearchResults 
}: SearchBarProps ) {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
        if(value.trim() === ""){
            setFilteredSuggestions([]);
            setShowDropdown(false);
        }
        else{
            setFilteredSuggestions(filteredMovies.map((movie) => 
                ({id: movie.id, title: movie.title})
            ));
            setShowDropdown(filteredMovies.length > 0);
        }
    },[value, filteredMovies])      // filteredMovies도 의존성 배열에 추가해줘야 실시간 렌더링 가능

    return (
        <div className="relative flex items-center px-2 sm:px-4 md:px-6 lg:px-8 font-customRegular w-full">
            <input
                id="search-bar"
                type="search"
                placeholder="영화를 검색해 보세요! 🎬"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="search-bar bg-white dark:bg-black w-full h-10 sm:h-12 pr-10 sm:pr-12 border-b border-gray-600 dark:border-gray-300 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-400 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
            />
            {/* 조건부 렌더링 → showDropdown이 true일 때만 우측 () 내부 코드 실행 */}
            {showDropdown && (
                <ul className="absolute left-0 sm:left-2 md:left-4 lg:left-6 top-full mt-1 w-full sm:w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] max-w-md z-50 bg-white dark:bg-black border border-gray-300 dark:border-gray-900 shadow-lg overflow-hidden bg-opacity-80 rounded-b">
                    {filteredSuggestions.map((suggestion) => (
                        <Link to={`/detail/${suggestion.id}`} key={suggestion.id}>
                        <li
                            key={suggestion.id}
                            className="p-2 sm:p-3 text-sm sm:text-base text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-all"
                            onClick={() => {
                                setValue(suggestion.title);
                                setShowDropdown(false);
                                setSearchResults(filteredMovies);
                            }}
                        >
                            {suggestion.title}
                        </li>
                        </Link>
                    ))}
              </ul>
            )}
            <button 
                className="p-2 cursor-pointer absolute right-2 sm:right-4 md:right-6 lg:right-8 flex-shrink-0"
                onClick={() => {
                    setShowDropdown(false);
                    setSearchResults(filteredMovies);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>
    );
}