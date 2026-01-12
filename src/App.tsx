import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useReducer, useMemo } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import { fetchMultiplePages } from "./api";
import { favoritesReducer } from "./pages/Favorite";
import { isFavorite } from "./pages/Favorite";
import type { movie } from "./types/movie";
import ReactGA from "react-ga4";
import usePageTracking from "./hooks/usePageTracking";

interface AppProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  allMovies: movie[];
  setAllMovies: React.Dispatch<React.SetStateAction<movie[]>>;
  filteredMovies: movie[];
  setFilteredMovies: React.Dispatch<React.SetStateAction<movie[]>>;
  searchResults: movie[];
  setSearchResults: React.Dispatch<React.SetStateAction<movie[]>>;
}

type Action =
    | { 
        type: "ADD";
        movie: movie;
    }
    | { type: "REMOVE";
        id: number;
    }
    | { type: "LOAD";
        movies: movie[];
    };

ReactGA.initialize(import.meta.env.VITE_GA_ID);

export default function App() {
  const [value, setValue] = useState<string>("");
  const [allMovies, setAllMovies] = useState<movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<movie[]>([]);   // 검색어 타이핑에 따라 실시간 필터링
  const [searchResults, setSearchResults] = useState<movie[]>([]);     // 검색 버튼을 누르고 난 후 필터링

  usePageTracking();

  return (  
      <AppContent 
        value={value} setValue={setValue} 
        allMovies={allMovies} setAllMovies={setAllMovies} 
        filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} 
        searchResults={searchResults} setSearchResults={setSearchResults}
      />
    );
}

function AppContent({ 
  value, 
  setValue, 
  allMovies, 
  setAllMovies, 
  filteredMovies, 
  setFilteredMovies, 
  setSearchResults 
}: AppProps) {

  // [...movies] → movies 배열을 새로운 배열로 복사
  useEffect(() => {
    fetchMultiplePages().then((movies) => {
      setAllMovies([...movies]);  
      setFilteredMovies([...movies]);  
      setSearchResults([...movies]);
    });
  }, []);

  useEffect(() => {
    if (value.trim() === "") {
      if (allMovies.length > 0) {
        setFilteredMovies([...allMovies]);  
      }
    } else {
      if (allMovies.length > 0) {  
        const filtered = allMovies.filter((movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase().replace(" ", ""))
        );
        setFilteredMovies(filtered);
      }
    }
  }, [value, allMovies]);

  const initializer = (): movie[] => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) as movie[] : [];
  };

  const [favorites, dispatch] = useReducer(
    favoritesReducer as React.Reducer<movie[], Action>,
    undefined,
    initializer
  );

  const [sortType] = useState<"default" | "rating" | "latest" | "oldest">("default");

  const sortedMovies = useMemo<movie[]>(() => {
    let sorted = [...filteredMovies];

    if (sortType === "rating") {
      sorted.sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortType === "latest") {
      sorted.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    } else if (sortType === "oldest") {
      sorted.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
    }

    return sorted;
  }, [filteredMovies, sortType]);

  return (
    <>
      <Header value={value} setValue={setValue} filteredMovies={filteredMovies} setSearchResults={setSearchResults} allMovies={allMovies} />
        <Routes>
          <Route path="/" element={<Home searchResults={sortedMovies} dispatch={dispatch} favorites={favorites} isFavorite={isFavorite} />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/favorite" element={<Favorite favorites={favorites} dispatch={dispatch} />}></Route>
        </Routes>
    </>
  );
}
