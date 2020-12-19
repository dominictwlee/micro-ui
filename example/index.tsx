import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '../src';
import { toCssVarThemes } from '../src/theming/utils';

const customTheme = toCssVarThemes({
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
