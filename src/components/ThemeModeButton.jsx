import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import { moon, lightbulb } from '../assets/index.js';

const ThemeModeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className='m-1' onClick={handleClick}>
      <img className={`w-[25px] h-[25px]`} src={theme === 'light' ? moon  : lightbulb} alt="theme-icon" />
    </button>
  );
};

export default ThemeModeButton;
