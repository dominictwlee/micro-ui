import React, { HTMLProps } from 'react';
import { css } from '@emotion/react';
import { themeVars } from '../theming';
import { Color } from '../types';
import Label from '../Label';

interface InputProps extends HTMLProps<HTMLInputElement> {
  color?: Color;
  label?: string;
}

const inputBase = css`
  border-radius: ${themeVars.shape.borderRadius[1]};
  border-style: solid;
  border-width: 1px;
  border-color: ${themeVars.colors.border.light};
  color: ${themeVars.colors.text.primary};
  padding: ${themeVars.spacing[1]};
  background: transparent;
  outline: none;
  box-shadow: 0 0 0 1px rgba(71, 217, 251, 0);
  transition: border-color, box-shadow 150ms ease-in;
`;

const focused = ({ color = 'primary' }: InputProps) => css`
  &:focus {
    transition-timing-function: ease-out;
    border-color: ${themeVars.colors[color].lighter};
    box-shadow: 0 0 0 1px ${themeVars.colors[color].lighter};
  }
`;

const inputLabel = css`
  display: block;
  margin-bottom: ${themeVars.spacing[0]};
`;

export default function Input({ color, label, ...props }: InputProps) {
  return (
    <div>
      {label && (
        <Label css={[inputLabel, themeVars.typography.inputLabel]}>
          {label}
        </Label>
      )}
      <input type="text" css={[inputBase, focused]} {...props} />
    </div>
  );
}
