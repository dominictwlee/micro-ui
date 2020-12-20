import { css } from '@emotion/react';
import { HTMLProps, PropsWithChildren } from 'react';
import { themeVars } from '../theming';
import { Color } from '../types';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  color?: Color;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
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
  padding: ${themeVars.spacing[3]};
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

const fullWidthStyles = css`
  width: 100%;
`;

const buttonTextLayer = css`
  position: relative;
`;

const colorStyles = (color: Color) => css`
  border-color: ${themeVars.colors[color!].main};
  background-color: ${themeVars.colors[color!].main};
`;

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const { color = 'primary', fullWidth, children, ...buttonProps } = props;
  return (
    <button
      type="button"
      css={[
        base,
        colorStyles(color),
        fullWidth && fullWidthStyles,
        themeVars.typography.button,
      ]}
      {...buttonProps}
    >
      <span css={buttonTextLayer}>{children}</span>
    </button>
  );
}
