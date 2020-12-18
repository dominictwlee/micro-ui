import { css } from '@emotion/react';

import CheckboxIcon from './CheckboxIcon';

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

export default function Checkbox() {
  return (
    <span css={wrapper}>
      <input
        type="checkbox"
        css={checkboxInputHidden}
        onChange={e => console.log(e.target.value)}
      />
      <CheckboxIcon />
    </span>
  );
}
