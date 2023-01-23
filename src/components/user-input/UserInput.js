import { useState, useEffect } from "react"
import iconSearch from "../../assets/icon-search.svg"
import './user-input.css'

export default function UserInput({setData}) {
    const [login, setLogin] = useState('');
    const [error, setError] = useState('');    
    const USER_REGEX = /^[A-Za-z0-9-]+$/

    const handleChange = (event) => {
        if ((USER_REGEX.test(event.target.value) && event.target.value.length <= 29) || event.target.value === '') 
            setLogin(event.target.value);
	}
    
    const fetchData = (login) => {
		const API_URL = 'https://api.github.com/users/' + login
		fetch(API_URL)
			.then((response) => response.json())
			.then((json) => {
				if (json.message === "Not Found") {
                    setError('No results');
                    return;
                }
                setData(json);
                setError('');
			})
			.catch((error) => {
                console.log(error);
                setError(error.message);
            });
	}

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') 
            fetchData(login);
    }

    useEffect(() => fetchData('octocat'), []);

    return (<div id='user-input'>
        <img src={iconSearch} alt=''/>
        <div id='input-box-container'>
            <input
                type="text"
                onChange={handleChange} 
                value={login} 
                onKeyDown={handleKeyDown}
                placeholder='Search GitHub username…'
            ></input>
            <span>{error}</span>
        </div>
        <button onClick={() => fetchData(login)}>Search</button>
    </div>)
}