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

export default function CheckboxIcon() {
  return (
    <>
      <div css={unchecked}>
        <MdCheckBoxOutlineBlank />
      </div>
      <div css={checked}>
        <MdCheckBox />
      </div>
    </>
  );
}
