import { useState, useEffect } from "react";

export default function ThemeToggle() {
    /*
        useState()에 화살표함수 사용 => 렌더링 최적화
        (useState()의 인자로 일반 값을 넣으면 렌더링마다 계산이 이루어짐.
        비용이 많이 드는 연산(예: localStorage 조회)을 할 경우, 불필요한 연산을 방지하기 위해 함수로 감쌈.
        useState()가 처음 실행될 때 한 번만 실행됨.)
     */
    const [theme, setTheme] = useState<"dark" | "light">(() => {
        const saved = localStorage.getItem("theme");
        return (saved === "dark" || saved === "light") ? saved : "dark";
    });

    useEffect(() => {
        // document.documentElement.classList 를 통해 index.html에 접근해 class="dark" 설정
        if(theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer font-customBold 
          w-24 h-10 sm:w-28 sm:h-12 px-4 py-2 
          rounded-lg text-black dark:text-white text-sm md:text-lg 
          bg-gray-300 dark:bg-gray-700 bg-opacity-50 
          items-center transition hover:bg-opacity-70 dark:hover:bg-opacity-70 whitespace-nowrap"
        >
          {theme === "dark" ? "Light🌞" : "Dark🌙"}
        </button>
      );
}
