import { css } from '@emotion/react';
import React, { HTMLProps, PropsWithChildren } from 'react';
import { themeVars } from '../theming';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
}

const borderRadius = css`
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
  border: 0;
  cursor: pointer;
  ${borderRadius}

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity, background 0.3s;
    top: 0;
    left: 0;
    background: ${themeVars.colors.primary.light};
    ${borderRadius}
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
  }

  &:active:before {
    background: ${themeVars.colors.primary.dark};
  }
`;

const buttonTextLayer = css`
  position: relative;
`;

const colorStyles = ({ color = 'primary' }: ButtonProps) => css`
  border-color: ${themeVars.colors[color].main};
  background-color: ${themeVars.colors[color].main};
`;

export default function Button({
  color,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button type="button" css={[base, colorStyles]} {...props}>
      <span css={buttonTextLayer}>{children}</span>
    </button>
  );
}
