import { HTMLProps } from 'react';
import { css } from '@emotion/react';

import { themeVars } from '../theming';
import CheckboxIcon from './CheckboxIcon';

interface CheckboxProps {
  inputProps?: HTMLProps<HTMLInputElement>;
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  size?: 'small' | 'medium' | 'large';
}

const checkboxInputHidden = css`
  position: absolute;
  cursor: inherit;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

const wrapper = css`
  display: inline-flex;
  cursor: pointer;
  outline: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

const sizeSmall = css`
  width: 24px;
  height: 24px;
  padding: 4px;
`;

const sizeMedium = css`
  width: 32px;
  height: 32px;
  padding: 4px;
`;

const sizeLarge = css`
  width: 48;
  height: 48px;
  padding: 4px;
`;

const sizes = {
  small: sizeSmall,
  medium: sizeMedium,
  large: sizeLarge,
};

const iconColor = ({ color = 'tertiary' }: CheckboxProps) => css`
  color: ${themeVars.colors[color].main};
`;

export default function Checkbox({
  inputProps = {},
  size = 'medium',
  ...props
}: CheckboxProps) {
  return (
    <span css={[wrapper, sizes[size]]} {...props}>
      <input css={checkboxInputHidden} {...inputProps} type="checkbox" />
      <CheckboxIcon size="100%" css={iconColor} />
    </span>
  );
}
