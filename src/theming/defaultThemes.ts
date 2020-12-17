const shared = {
  spacing: {
    '1': '8px',
    '2': '12px',
    '3': '16px',
    '4': '24px',
    '5': '32px',
    '6': '48px',
  },
  shape: {
    borderRadius: {
      '1': '4px',
      '2': '8px',
    },
  },
  typography: {
    h1: {
      fontSize: '36px',
      lineHeight: 1.2,
      fontWeight: 600,
    },
    h2: {
      fontSize: '24px',
      lineHeight: 1.3,
      fontWeight: 600,
    },
    h3: {
      fontSize: '18px',
      lineHeight: 1.3,
      fontWeight: 600,
    },
    h4: {
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h5: {
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h6: {
      fontSize: '14px',
      lineHeight: 1.28,
      fontWeight: 500,
    },
    h7: {
      fontSize: '12px',
      lineHeight: 1.6,
      fontWeight: 500,
    },
    p1: {
      fontSize: '14px',
      lineHeight: 1.42,
      fontWeight: 400,
    },
  },
};

const defaultThemes = {
  light: {
    colors: {
      primary: {
        light: '#75E1FA',
        lighter: '#47D9FB',
        main: '#1BD0FB',
        darker: '#04CAF8',
        dark: '#01A2C8',
      },
      secondary: {
        light: '#FFB974',
        lighter: '#FFA043',
        main: '#FF8915',
        darker: '#FF7F00',
        dark: '#FF7F00',
      },
      tertiary: {
        light: '#FFEF74',
        lighter: '#FFEA43',
        main: '#FFE515',
        darker: '#FFE200',
        dark: '#EAD005',
      },
      accent: {
        light: '#AE7FFA',
        lighter: '#9353FB',
        main: '#792AFC',
        darker: '#670EF9',
        dark: '#5103D1',
      },
      background: '#1D1E23',
      divider: '#4B4B4E',
      border: {
        light: '#97979B',
        dark: '#73768C',
      },
      card: {
        light: '#3B3F49',
        main: '#2C2D35',
        dark: '#272A31',
      },
    },
    ...shared,
  },
  dark: {
    colors: {
      primary: {
        light: '#75E1FA',
        lighter: '#47D9FB',
        main: '#1BD0FB',
        darker: '#04CAF8',
        dark: '#01A2C8',
      },
      secondary: {
        light: '#AE7FFA',
        lighter: '#9353FB',
        main: '#792AFC',
        darker: '#670EF9',
        dark: '#5103D1',
      },
      tertiary: {
        light: '#FFEF74',
        lighter: '#FFEA43',
        main: '#FFE515',
        darker: '#FFE200',
        dark: '#EAD005',
      },
      accent: {
        light: '#FFB974',
        lighter: '#FFA043',
        main: '#FF8915',
        darker: '#FF7F00',
        dark: '#FF7F00',
      },
      background: '#1D1E23',
      divider: '#4B4B4E',
      border: {
        light: '#97979B',
        dark: '#73768C',
      },
      card: {
        light: '#3B3F49',
        lighter: '#2C2D35',
        main: '#272A31',
      },
      text: {
        primary: '#ffffff',
        secondary: '#CBCBCD',
      },
    },
    ...shared,
  },
};

export default defaultThemes;
