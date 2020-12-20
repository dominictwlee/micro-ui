import { css } from '@emotion/react';
import React, { ChangeEvent, HTMLProps } from 'react';
import CheckboxIcon from '../Checkbox/CheckboxIcon';
import { Color, Size } from '../types';

type InputElementProps = HTMLProps<HTMLInputElement>;

interface IconInputProps {
  color: Color;
  size: Size;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: InputElementProps['checked'];
  id?: InputElementProps['id'];
  inputProps?: InputElementProps;
  type: 'checkbox' | 'radio';
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

export default function IconInput({
  size,
  checked,
  onChange,
  id,
  inputProps,
  color,
  ...props
}: IconInputProps) {
  return (
    <span css={[wrapper, sizes[size]]} {...props}>
      <input
        css={checkboxInputHidden}
        {...inputProps}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <CheckboxIcon size="100%" color={color} />
    </span>
  );
}
