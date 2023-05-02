import { useEffect, useState } from 'react';
import { Switch } from './HandleThemeStyled';

const HandleTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, []);

  return (
    <Switch>
      <label className="switch">
        theme
        <input
          type="checkbox"
          className={currentTheme}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
    </Switch>
  );
};

export default HandleTheme;
