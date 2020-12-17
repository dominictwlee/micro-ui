import React from 'react';
import { ThemeProvider } from '../src/theming';
import Normalize from '../src/Normalize';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <Normalize />
      <Story />
    </ThemeProvider>
  ),
];
