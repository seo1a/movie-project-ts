# 🍕JMT searcher
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
https://movie-project-ts-eosin.vercel.app/
<br>
<br>
<br>
<br>



## 📚주요 기능

- **영화 검색**: 검색창에 영화 제목을 입력하면 자동완성 검색어가 드롭다운으로 표시됩니다. 자동완성 선택/엔터로 검색이 실행됩니다.

- **영화 정렬**: 홈 화면에서 기본 정렬(기본 API 정렬), 평점 높은 순, 개봉 최신 순, 개봉 오래된 순의 4가지 기준으로 정렬 가능합니다

- **영화 상세정보**: 영화 포스터 이미지 클릭 시 영화 소개(overview) 및 개봉일 등의 상세 정보를 확인할 수 있습니다.

- **즐겨찾기**: 각 영화에 하트 아이콘을 눌러 즐겨찾기에 저장할 수 있습니다. 즐겨찾기 리스트는 local storage에 저장되어 새로고침 후에도 유지됩니다.

- **다크/라이트 모드**: 유저가 클릭으로 다크/라이트 모드 간 전환할 수 있습니다.

- **반응형 UI**: 모바일, 데스크탑에 최적화 된 사용자 경험을 제공합니다.
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
![project_directory](https://github.com/user-attachments/assets/42dde5d5-d64e-4a79-aadd-f9b53a5340ab)
<br>
<br>
<br>
<br>

## 🛠설치 및 실행 방법 <br>
```bash
# 리포지터리 복제
git clone https://github.com/seo1a/movie-project-2.git
cd movie-project-2

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
VITE_OMDB_API_KEY=YOUR_OMDB_API_KEY
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY


`YOUR_OMDB_API_KEY` 부분에 본인의 실제 키를 입력해주세요!
```
<br>
<br>
<br>

## 📌한계 및 아쉬운 점 (2025.12.21 수정) <br>

가장 아쉬운 점이라 함은 서비스에서 제공하는 리뷰의 개수와 형태를 꼽을 수 있겠습니다.<br> 
### 1. 네이버의 리뷰의 제공 형태 <br>
네이버 플레이스의 리뷰는 공식적인 api로 제공되지 않습니다. 많은 시도 끝에 puppeteer을 사용해 네이버 플레이스의 리뷰를 가져오는 것이 가능함을 확인했지만, 속도 측면에서 사용자를 도저히 만족시킬 수 없을 것 같다는 판단 하에 공식적으로 제공되는 네이버 블로그 리뷰 api를 사용했습니다. 타 플랫폼과 동일한 형태의 리뷰를 제공하지 못해 아쉽습니다. 하지만 주변의 피드백을 들어보면 맛집을 찾아볼 때, 네이버 플레이스 리뷰보다 블로그 리뷰를 위주로 찾아보는 경우가 많아 오히려 사용자에게 더 유용한 정보가 될 수 있겠다고 생각했습니다.<br><br>
### 2. 구글 플레이스와 카카오맵 리뷰의 개수<br> 
구글 플레이스 api가 공식적으로 제공하는 리뷰의 개수는 5개입니다. 또한 카카오맵 스크래핑을 통해 가져올 수 있는 리뷰의 개수도 5개로, 사용자가 충분히 리뷰를 비교하고 선택하기에는 다소 적은 개수라고 생각됩니다.<br><br>
### 3.카카오맵 리뷰 제공 중단<br> 
초기 개발 시점에는 카카오맵 장소 페이지의 리뷰 데이터를 https://place.map.kakao.com/commentlist/v/{placeId} 엔드포인트를 통해
텍스트 형태로 확인 및 수집할 수 있었습니다. 그러나 카카오 측의 내부 정책 변경으로 인해,
해당 URL에 직접 접근하여 리뷰 데이터를 가져오는 방식이
현재는 더 이상 동작하지 않으며, 외부에서 리뷰 텍스트를 수집하는 것이 불가능해졌습니다.<br><br>

이에 따라 본 서비스에서는 카카오맵 리뷰 텍스트 제공 기능을 중단하였으며,
카카오맵은 다음 역할에 한해 사용되고 있습니다.<br>

- 장소 검색 및 위치 확인

- 지도 상 마커 표시

- 동일 상호명의 다중 지점 구분<br><br>

카카오맵 리뷰는 공식적으로 제공되는 Public API가 존재하지 않기 때문에 puppeteer 등의 스크래핑 방식에 의존하지 않고
서비스의 안정성과 지속 가능성을 우선하여 해당 기능을 제거하는 방향을 선택했습니다. 향후 카카오에서 공식 리뷰 API가 제공될 경우,
기능 재도입을 검토할 예정입니다.<br><br>

### 4.플랫폼별 상호명 불일치로 인한 장소 매칭 한계<br>
또한 검색창에서 키워드를 검색하면 카카오맵에 등록된 상호명을 기준으로 query를 각 플랫폼에 넘겨주도록 설계했습니다. 이 과정에서 플랫폼마다 상호명이 다르게 등록된 경우 간혹 구글-카카오 간 동일한 가게를 특정하지 못하는 경우가 발생했습니다. 추후에 도로명 주소나 우편번호를 통해 이를 구분하는 방식을 고려해보고자 합니다.

