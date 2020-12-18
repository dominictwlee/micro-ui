import React from 'react';
import { css } from '@emotion/react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

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

interface CheckboxIconProps {
  size?: string;
}

export default function CheckboxIcon({ size }: CheckboxIconProps) {
  return (
    <>
      <MdCheckBoxOutlineBlank css={unchecked} size={size} />
      <MdCheckBox css={checked} size={size} />
    </>
  );
}
