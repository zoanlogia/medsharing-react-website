import moon from '@/assets/images/moon-solid.svg';
import lightbulb from '@/assets/images/lightbulb-solid.svg';
import { useTheme } from '@/hooks/useTheme';

const ThemeModeButton = () => {
  const { theme, setTheme } = useTheme()

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
