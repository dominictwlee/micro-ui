import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../theming';

const Providers = ({ children }: any) => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
};

const customRender = (ui: any, options: any = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
