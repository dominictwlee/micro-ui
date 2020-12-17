import { css } from '@emotion/react';
import React, { HTMLProps } from 'react';
import { themeVars } from '../theming';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
}

const base = css`
  display: inline-flex;
  justify-content: 'center';
  align-items: 'center';
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  color: ${themeVars.colors.text.primary};
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
