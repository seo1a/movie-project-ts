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
        <header className="bg-white dark:bg-black p-4 md:p-6">
            <div className="flex flex-col md:flex-row mt-5 justify-between">
                <Link to="/" onClick={handleLogoClick} className="cursor-pointer">
                    <div className="flex cursor-pointer items-center gap-4 ml-8" onClick={handleLogoClick}>  
                        <img src={headerLogo} alt="popcorn logo" className="w-12 h-12 md:w-16 md:h-16" />
                        <h1 className="font-customLogo text-4xl md:text-6xl text-red-700 mt-3">MOVIE PROJECT</h1>
                    </div>
                </Link>

                <div className="flex items-center gap-4 md:gap-6 pt-6 pr-6 md:pr-8 lg:pr-8 w-full sm:w-auto">
                    <div className="flex-grow">
                        <SearchBar value={value} setValue={setValue} filteredMovies={filteredMovies} setSearchResults={setSearchResults}/>
                    </div>

                    <div className="flex sm:flex-row flex-col sm:justify-center items-center sm:gap-4 gap-2 mt-4">
                        <Link to="/favorite" className="cursor-pointer">
                            <button className="cursor-pointer font-customBold 
                                    w-24 h-10 sm:w-28 sm:h-12 px-4 py-2 
                                    rounded-lg text-black dark:text-white text-sm md:text-lg 
                                    bg-gray-300 dark:bg-gray-700 bg-opacity-50 
                                    items-centertransition hover:bg-opacity-70 dark:hover:bg-opacity-70 whitespace-nowrap">
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