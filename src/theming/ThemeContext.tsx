import React, {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useMemo,
  useLayoutEffect,
} from 'react';
import { Global, Interpolation, Theme } from '@emotion/react';
import { toThemeCssVars } from './utils';

const defaultThemes = {
  light: {
    colors: {
      primary: '#1BD0FB',
      background: 'white',
    },
  },
  dark: {
    colors: {
      primary: '#792AFC',
      background: '#1D1E23',
    },
  },
};

const themeCssVars = toThemeCssVars(defaultThemes);

type ThemeValue = [
  'light' | 'dark',
  React.Dispatch<React.SetStateAction<'light' | 'dark'>>
];

const ThemeContext = createContext<ThemeValue | undefined>(undefined);

interface ThemeProviderProps {
  theme?: Interpolation<Theme>;
}

export function ThemeProvider({
  theme,
  children,
}: PropsWithChildren<ThemeProviderProps>) {
  const [themeMode, setThemeMode] = useState<keyof typeof defaultThemes>(
    'dark'
  );
  const themeValue = useMemo<ThemeValue>(() => [themeMode, setThemeMode], [
    themeMode,
  ]);

  useEffect(() => {
    document.body.dataset.theme = themeMode;
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <Global styles={theme ?? themeCssVars} />
      {children}
    </ThemeContext.Provider>
  );
}
