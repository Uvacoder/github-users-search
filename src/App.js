import { useState } from "react";

import UserInput from "./components/user-input/UserInput";
import Profile from "./components/profile/Profile.js";
import Header from "./components/header/Header.js";
import useLocalStorage from "use-local-storage";
import "./app.css"

export default function App(){
	const [data, setData] = useState({});
	const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

	return(<div theme={theme} id='app'>
		<Header setTheme={setTheme} theme={theme}/>
		<UserInput setData={setData} />
		<Profile data={data} />		
	</div>)
}