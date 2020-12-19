import React from 'react';
import { css } from '@emotion/react';
import { themeVars } from '../theming';
import { Color } from '../types';

interface InputProps {
  color?: Color;
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

export default function Input({ color, ...props }: InputProps) {
  return (
    <div>
      <input type="text" css={[inputBase, focused]} {...props} />
    </div>
  );
}
