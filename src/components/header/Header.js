import IconMoon from '../../assets/icon-moon.svg';
import IconSun from '../../assets/icon-sun.svg';
import './header.css';


export default function Header({setTheme, theme}){
    return (
        <header>
            <h1>devfinder</h1>
            <div
                id='color-switcher' 
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                <span>{theme === 'light' ? 'DARK' : 'LIGHT'}</span>
                <img src={theme === 'light' ? IconMoon : IconSun} alt=''></img>
            </div>
        </header>
    )
}