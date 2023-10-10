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

	// const today = new Date();
	// const firstNum = today.getDate();
	// const secondNum = today.getMonth() + 1;
	// const multiplier = new Date(today.getFullYear(), secondNum, 0).getDate();
	// const todayNum = firstNum + secondNum*multiplier;

	const fetchAnime = async(query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}
		&order_by=title&sort=asc&limit=10`)
			.then(response => response.json());
		console.log('temp2',temp)
		SetAniList(temp.data);
	}

	const handleSearch = e => {
		e.preventDefault();

		fetchAnime(search);
	}

	const getAnimeTop = async() => {
		const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing&page=1`)
			.then(response => response.json());
			console.log(temp)
		SetTopAni(temp.data.slice(0,5));
	}

	const getRandAni = async() => {
		const temp = await fetch(`https://api.jikan.moe/v4/random/anime`)
			.then(response => response.json());
		
		SetRandAni(temp.data);
	}

	useEffect(() => {
		getAnimeTop();
		getRandAni();
	}, []);

	// useEffect(() => {
	// 	const getRandAni = async() => {
	// 		const temp = await fetch(`https://api.jikan.moe/v4/anime/${todayNum}`)
	// 			.then(response => response.json())
	// 		SetRandAni(temp.data);
	// 	};

	// 	getRandAni();
	// }, [todayNum]);

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
