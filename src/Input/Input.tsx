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
  border: 1px solid ${themeVars.colors.border.light};
  color: ${themeVars.colors.text.primary};
  padding: ${themeVars.spacing[1]};
  background: transparent;
  outline: none;
`;

const focused = ({ color = 'primary' }: InputProps) => css`
  &:focus {
    border-color: ${themeVars.colors[color].lighter};
    box-shadow: 0 0 0 1px ${themeVars.colors[color].lighter};
  }
`;

const inputLabel = css`
  display: block;
`;

export default function Input({ color, label, ...props }: InputProps) {
  return (
    <div>
      {label && (
        <Label css={[themeVars.typography.inputLabel, inputLabel]}>
          {label}
        </Label>
      )}
      <input type="text" css={[inputBase, focused]} {...props} />
    </div>
  );
}
