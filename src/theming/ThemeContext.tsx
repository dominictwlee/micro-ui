import React, {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useMemo,
  useContext,
} from 'react';
import { Global, Interpolation, Theme } from '@emotion/react';
import { toCssVarThemes, toCssVarNames } from './utils';
import defaultThemes from './defaultThemes';

const defaultCssVarThemes = toCssVarThemes(defaultThemes);
export const themeVars = toCssVarNames(defaultThemes.dark);

type ThemeValue = [
  'light' | 'dark',
  React.Dispatch<React.SetStateAction<'light' | 'dark'>>
];

const ThemeContext = createContext<ThemeValue | undefined>(undefined);

export interface ThemeProviderProps {
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
      <Global styles={theme ?? defaultCssVarThemes} />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return theme;
}
