import React from 'react';
import { css } from '@emotion/react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { themeVars } from '../theming';
import { Color } from '../types';

interface CheckboxIconProps {
  size?: string;
  color?: Color;
}

const unchecked = css`
  display: block;
  input:checked ~ & {
    display: none;
  }
`;

const checked = css`
  display: none;
  input:checked ~ & {
    display: block;
  }
`;

const iconColor = (color: Color) => css`
  color: ${themeVars.colors[color].main};
`;

export default function CheckboxIcon({ color, ...props }: CheckboxIconProps) {
  return (
    <>
      <MdCheckBoxOutlineBlank
        css={[unchecked, color && iconColor(color)]}
        {...props}
        data-testid="checkbox-checked-icon"
      />
      <MdCheckBox
        css={[checked, color && iconColor(color)]}
        {...props}
        data-testid="checkbox-unchecked-icon"
      />
    </>
  );
}
