# 🎬MOVIE PROJECT
<img src="https://raw.githubusercontent.com/seo1a/movie-project-ts/refs/heads/main/movie-project-home.png" alt="movie-project-home" width="700"/>
<br><br>

<details>
  <summary>📱모바일 UI 확인하기</summary> 
  
  <img src="https://raw.githubusercontent.com/seo1a/movie-project-ts/refs/heads/main/movie-project-home-mobile.png" alt="movie-project-mobile" width="300"/>
  
</details>
<br>

## 🎬 프로젝트 소개
Movie Project는 TMDB(https://www.themoviedb.org/) API로부터 영화 데이터를 받아와 현재 극장 상영 중인 영화 목록을 조회·검색·정렬·즐겨찾기할 수 있는 반응형 웹 애플리케이션입니다.
사용자는 영화 검색 시 자동완성 검색어 드롭다운, 다양한 정렬 기준(평점순/최신순/오래된순), 상세 정보 보기, 그리고 다크/라이트 모드 및 즐겨찾기 기능을 통해 더욱 편리한 탐색 경험을 제공합니다.<br><br><br>

## 🌐배포
[🔗 https://movie-project-ts-eosin.vercel.app](https://movie-project-ts-eosin.vercel.app)
<br>
<br>
<br>
<br>


## 🧩기술 스택 <br>

React + TypeScript 기반으로 TMDB API를 활용한 영화 정보 조회 웹 애플리케이션<br><br>

### 1. 프론트엔드 <br>
- <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> : UI 컴포넌트 구성 및 상태 관리
- <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> : 정적 타입을 통한 안정적인 개발 및 유지보수성 향상
- <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> : 빠른 개발 서버 및 번들링 환경 구성
- <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/> : 페이지 단위 라우팅 및 상세 페이지 구성
- <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white"/> : 유틸리티 기반 스타일링을 통한 반응형 UI 구현
<br>

### 2. 상태 관리 및 로직 <br>
- <img src="https://img.shields.io/badge/React_Hooks-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> : `useState`, `useEffect`, `useReducer`, `useMemo`를 활용한 상태 및 성능 관리
- <img src="https://img.shields.io/badge/LocalStorage-FFA500?style=for-the-badge"/> : 즐겨찾기 및 UI 상태(다크/라이트 모드) 영속성 유지
<br>

### 3. API & 데이터 통신 <br>
- <img src="https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white"/> : 영화 목록, 상세 정보 등 영화 데이터 제공
- <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/> : 비동기 API 요청 처리 및 데이터 페칭
<br>

### 4. 배포 <br>
- <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/> : 프론트엔드 애플리케이션 배포 및 환경 변수 관리
<br>

### 5. 개발 환경 <br>
- <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/> : 버전 관리
- <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/> : 소스 코드 관리 및 프로젝트 문서화
<br>

<br>
<br>
<br>

## 📁프로젝트 구조 <br>

```
movie-project-ts
├── node_modules
├── public
├── src
│   ├── assets              
│   ├── components            
│   │   ├── Header.tsx        
│   │   ├── Movie.tsx        
│   │   ├── SearchBar.tsx     
│   │   └── ThemeToggle.tsx   
│   ├── pages                
│   │   ├── Home.tsx          
│   │   ├── Detail.tsx        
│   │   └── Favorite.tsx      
│   ├── types
│   │   └── movie.ts          
│   ├── api.ts                
│   ├── App.tsx               
│   ├── App.css
│   ├── index.css             
│   ├── main.tsx              
│   └── vite-env.d.ts
├── .env                   
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```
<br>
<br>
<br>
<br>

## 📚주요 기능

- **영화 검색**: 검색창에 영화 제목을 입력하면 자동완성 검색어가 드롭다운으로 표시됩니다. 자동완성 선택/엔터로 검색이 실행됩니다.

- **영화 정렬**: 홈 화면에서 기본 정렬(기본 API 정렬), 평점 높은 순, 개봉 최신 순, 개봉 오래된 순의 4가지 기준으로 정렬 가능합니다

- **영화 상세정보**: 영화 포스터 이미지 클릭 시 영화 제목, 개요, 개봉일, 평점 등 상세 정보를 표시합니다.

- **즐겨찾기**: 각 영화에 하트 아이콘을 눌러 즐겨찾기에 저장할 수 있습니다. 즐겨찾기 리스트는 local storage에 저장되어 새로고침 후에도 유지됩니다.

- **다크/라이트 모드**: 유저가 클릭으로 다크/라이트 모드 간 전환할 수 있습니다.

- **반응형 UI**: 모바일, 데스크탑에 최적화 된 사용자 경험을 제공합니다.
<br>
<br>
<br>
<br>

## 🛠설치 및 실행 방법 <br>
```bash
# 리포지터리 복제
git clone https://github.com/seo1a/movie-project-ts.git
cd movie-project-ts

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```
<br>
<br>
<br>

## ✏환경 변수 설정 (.env) <br>

다음과 같이 `.env` 파일을 루트 디렉토리에 생성하고 API 키를 입력해주세요: <br>

```
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY


`YOUR_TMDB_API_KEY` 부분에 본인의 실제 키를 입력해주세요!
```
<br>
<br>
<br>

## 💡한계 및 향후 개선 방향 <br>

### 1. UX/UI 개선 <br>
검색창, 즐겨찾기, 테마 전환 버튼의 배치나 간격 등 UI/UX 측면에서 개선의 여지가 있습니다.<br><br>
### 2. 콘텐츠 확장<br> 
현재는 상영 중인 영화 정보 중심으로 기능이 구성되어 있어 다소 서비스가 단조로워 보일 수 있다고 생각합니다. 추후 프로젝트를 개선하게 된다면 관객들의 리뷰 표시, 영화관 정보/상영 시간표 연동 등의 방향을 고려하고 있습니다.
<br> 
<br> 
<br> 

## 📌참고 <br>

TMDB API 문서: https://developer.themoviedb.org/
 
