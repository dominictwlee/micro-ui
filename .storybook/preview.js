import { ThemeProvider } from '../src/theming';
import BaseStylesGlobal from '../src/BaseStylesGlobal';
import 'fontsource-montserrat/400.css';
import 'fontsource-montserrat/500.css';
import 'fontsource-montserrat/600.css';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1d1e23',
      },
      {
        name: 'light',
        value: '#fff',
      },
    ],
  },
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <BaseStylesGlobal />
      <Story />
    </ThemeProvider>
  ),
];
