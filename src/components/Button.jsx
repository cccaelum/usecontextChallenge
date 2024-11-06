import { useTheme } from '../themes/ThemeContext';

const Button = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <button onClick={toggleTheme}>{theme === 'light' ? 'Dark mode' : 'Light mode'}</button>
    );
};

export default Button;