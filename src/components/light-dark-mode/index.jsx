import useLocalStorage from "./useLocalStorage";
import './theme.css';

export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container-toggle">
        <p>Hello Shiba, {theme === 'light' ? "Light Theme" : "Dark Theme"} !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
