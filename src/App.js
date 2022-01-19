import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
	const [aniList, SetAniList] = useState([]);
	const [topAni, SetTopAni] = useState([]);
	const [search, SetSearch] = useState("");

	state={
    	myCurrentTime : new Date().toLocaleString(),
  	}

	return (
		<div className="App">
			<Header />
			<p>Current Date and Time: {this.state.myCurrentTime}</p>
			<div className="content-wrap">
				
			</div>
		</div>
	)
}

export default App;
