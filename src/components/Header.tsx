import { Link } from "react-router-dom";
import headerLogo from "../assets/popcorn.png"
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import type { movie } from "../types/movie";

interface HeaderProps {
    value: string;
    setValue: (value: string) => void;
    filteredMovies: movie[];
    setSearchResults: (movies: movie[]) => void;
    allMovies: movie[];
}

export default function Header({ 
    value, 
    setValue, 
    filteredMovies, 
    setSearchResults, 
    allMovies 
}: HeaderProps) {
    
    const handleLogoClick = () => {
        setValue("");  
        setSearchResults(allMovies);
    };


    return(
        <header className="bg-white dark:bg-black p-3 sm:p-4 md:p-6">
            <div className="flex flex-col md:flex-row mt-3 md:mt-5 justify-between items-center md:items-start gap-4 md:gap-0">
                <Link to="/" onClick={handleLogoClick} className="cursor-pointer w-full md:w-auto">
                    <div className="flex cursor-pointer items-center gap-2 sm:gap-4 ml-2 sm:ml-4 md:ml-8" onClick={handleLogoClick}>  
                        <img src={headerLogo} alt="popcorn logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex-shrink-0" />
                        <h1 className="font-customLogo text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-red-700 mt-1 sm:mt-2 md:mt-3">MOVIE PROJECT</h1>
                    </div>
                </Link>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4 md:pt-6 pr-2 sm:pr-4 md:pr-6 lg:pr-8 w-full md:w-auto">
                    <div className="flex-grow min-w-0">
                        <SearchBar value={value} setValue={setValue} filteredMovies={filteredMovies} setSearchResults={setSearchResults}/>
                    </div>

                    <div className="flex flex-row justify-center sm:justify-end items-center gap-2 sm:gap-4 mt-0 sm:mt-0 flex-shrink-0">
                        <Link to="/favorite" className="cursor-pointer">
                            <button className="cursor-pointer font-customBold 
                                    w-20 h-9 sm:w-24 sm:h-10 md:w-28 md:h-12 px-3 sm:px-4 py-2 
                                    rounded-lg text-black dark:text-white text-xs sm:text-sm md:text-lg 
                                    bg-gray-300 dark:bg-gray-700 bg-opacity-50 
                                    items-center transition hover:bg-opacity-70 dark:hover:bg-opacity-70 whitespace-nowrap">
                                    즐겨찾기❤️
                            </button>
                        </Link>

                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}