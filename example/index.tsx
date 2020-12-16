import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '../src';
import { toThemeCssVars } from '../src/theming/utils';

const customTheme = toThemeCssVars({
  light: {
    colors: {
      primary: 'pink',
      background: 'white',
    },
  },
  dark: {
    colors: {
      primary: 'blue',
      background: '#1D1E23',
    },
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={customTheme}></ThemeProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
