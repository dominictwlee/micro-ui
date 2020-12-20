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

const iconColor = (props: CheckboxIconProps) => css`
  color: ${themeVars.colors[props.color!].main};
`;

export default function CheckboxIcon(props: CheckboxIconProps) {
  return (
    <>
      <MdCheckBoxOutlineBlank
        css={[unchecked, props.color && iconColor(props)]}
        {...props}
        data-testid="checkbox-checked-icon"
      />
      <MdCheckBox
        css={[checked, props.color && iconColor(props)]}
        {...props}
        data-testid="checkbox-unchecked-icon"
      />
    </>
  );
}
