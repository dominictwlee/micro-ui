import { css, keyframes, jsx } from '@emotion/react';
import React, { HTMLProps } from 'react';
import { themeVars } from '../theming';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
}

const fillToRight = keyframes`
  to {
    width: 100%;
  }
`;

const base = css`
  display: inline-flex;
  justify-content: 'center';
  align-items: 'center';
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  color: ${themeVars.colors.text.primary};

  &:after {
    top: 0;
    left: 0;
    height: 100%;
    z-index: 0;
    width: 0;
    background: pink;
  }

  &:hover:after {
    animation: ${fillToRight} 0.7s forwards;
  }
`;

const primary = css`
  border-color: ${themeVars.colors.primary.main};
  background-color: ${themeVars.colors.primary.main};
`;

const colorStyles = {
  primary,
  secondary: primary,
  tertiary: primary,
};

export default function Button({ color = 'primary', ...props }: ButtonProps) {
  return <button type="button" css={[base, colorStyles[color]]} {...props} />;
}
