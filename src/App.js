import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import DailyAnime from "./components/DailyAnime";
import React from 'react';

const App = () => {
	const [aniList, SetAniList] = useState([]);
	const [topAni, SetTopAni] = useState([]);
	const [randAni, SetRandAni] = useState([]);
	const [search, SetSearch] = useState("");

	const today = new Date();
	const firstNum = today.getDate();
	const secondNum = today.getMonth() + 1;
	const todayNum = firstNum*secondNum;
	
	const getAnimeTop = async() => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(response => response.json());
		
		SetTopAni(temp.top.slice(0,5));
	}

	const handleSearch = e => {
		e.preventDefault();

		fetchAnime(search);
	}

	const fetchAnime = async(query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}
		&order_by=title&sort=asc&limit=10`)
			.then(response => response.json())

		SetAniList(temp.results);
	}

	useEffect(() => {
		getAnimeTop();

	}, []);

	const getRandAni = async() => {
		const temp = await fetch(`https://api.jikan.moe/v3/anime/${todayNum}`)
			.then(response => response.json());
		
		SetRandAni(temp);
	}

	useEffect(() => {
		getRandAni();

	}, []);

	console.log(randAni);

	return (
		<div className="App">
			<Header/>
			<DailyAnime 
				randAni={randAni}/>
			<div className="content-wrap">
				<Sidebar 
					topAni={topAni}/>
				<MainContent 
					handleSearch={handleSearch}
					search={search}
					SetSearch={SetSearch}
					aniList={aniList}
				/>
			</div>
		</div>
	)
	
}

export default App;
