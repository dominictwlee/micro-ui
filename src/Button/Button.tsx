import { css } from '@emotion/react';
import React, { HTMLProps, PropsWithChildren } from 'react';
import { themeVars } from '../theming';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
}

const border = css`
  border-color: none;
  border-radius: ${themeVars.shape.borderRadius[1]};
`;

const base = css`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${themeVars.colors.text.primary};
  padding: 10px;
  width: 50%;
  cursor: pointer;
  ${border};

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
    top: 0;
    left: 0;
    background: ${themeVars.colors.primary.light};
    ${border}
  }

  &:hover:before,
  &:active:before {
    opacity: 1;
  }
`;

const buttonTextLayer = css`
  position: relative;
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

export default function Button({
  color = 'primary',
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button type="button" css={[base, colorStyles[color]]} {...props}>
      <span css={buttonTextLayer}>{children}</span>
    </button>
  );
}
