import { toCssVarNames, toCssVars } from './utils';

describe('Theming utils', () => {
  const mockThemeObj = {
    colors: {
      primary: '#1BD0FB',
      background: '#1D1E23',
      secondary: {
        main: '#792AFC',
        darker: '#670EF9',
      },
    },
  };

  const invalidThemeObj = {
    colors: {
      primary: ['#1BD0FB', '#1D1E23'],
      secondary: {
        main: '#792AFC',
        darker: 1,
      },
    },
  };
  test('convert theme values to css var names', () => {
    expect(toCssVarNames(mockThemeObj)).toEqual({
      colors: {
        primary: 'var(--colors-primary)',
        background: 'var(--colors-background)',
        secondary: {
          main: 'var(--colors-secondary-main)',
          darker: 'var(--colors-secondary-darker)',
        },
      },
    });
  });

  test('convert theme object to flattened css var names mapped to values', () => {
    expect(toCssVars(mockThemeObj)).toEqual({
      '--colors-primary': '#1BD0FB',
      '--colors-background': '#1D1E23',
      '--colors-secondary-main': '#792AFC',
      '--colors-secondary-darker': '#670EF9',
    });
  });

  test('toCssVars throws if theme object has invalid css values', () => {
    expect(() => toCssVars(invalidThemeObj)).toThrowError();
  });

  test('toCssVarNames throws if theme object has invalid css values', () => {
    expect(() => toCssVarNames(invalidThemeObj)).toThrowError();
  });
});
