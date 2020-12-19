import { HTMLProps } from 'react';
import { css } from '@emotion/react';

import { themeVars } from '../theming';
import CheckboxIcon from './CheckboxIcon';

interface CheckboxProps {
  inputProps?: HTMLProps<HTMLInputElement>;
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
  width: 32px;
  height: 32px;
  padding: 4px;
`;

const iconColor = css`
  color: ${themeVars.colors.tertiary.main};
`;

export default function Checkbox({ inputProps = {}, ...props }: CheckboxProps) {
  return (
    <span css={wrapper} {...props}>
      <input css={checkboxInputHidden} {...inputProps} type="checkbox" />
      <CheckboxIcon size="100%" css={iconColor} />
    </span>
  );
}
