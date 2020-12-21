import { useTheme } from './ThemeContext';
import { toCssVarNames } from './utils';
import defaultThemes from './defaultThemes';
import { render, screen, fireEvent } from '../utils/testUtils';

const theme = toCssVarNames(defaultThemes.dark);

function ThemeToggler() {
  const [themeMode, setThemeMode] = useTheme();

  return (
    <div>
      <h1 style={{ color: theme.colors.primary.main }}>{themeMode}</h1>
      <button
        onClick={() =>
          setThemeMode(prevThemeMode =>
            prevThemeMode === 'dark' ? 'light' : 'dark'
          )
        }
      >
        toggle
      </button>
    </div>
  );
}

describe('ThemeProvider', () => {
  test('theme defaults to dark', () => {
    render(<ThemeToggler />);
    expect(screen.getByText('dark')).toBeInTheDocument();
  });

  test('theme can be toggled to light', () => {
    render(<ThemeToggler />);
    fireEvent.click(screen.getByText('toggle'));
    expect(screen.getByText('light')).toBeInTheDocument();
  });

  test('css var maps to correct value', () => {
    render(<ThemeToggler />);
    expect(screen.getByText('dark')).toHaveStyle({
      color: 'rgb(27, 208, 251);',
    });
  });
});
