import { useGlobalContext } from '../context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button onClick={toggleTheme} className='dark-toggle'>
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
