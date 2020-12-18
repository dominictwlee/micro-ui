import React from 'react';
import { css } from '@emotion/react';

import CheckboxIcon from './CheckboxIcon';

const checkboxInputHidden = css`
  position: absolute;
  z-index: -1;
  opacity: 0;
  overflow: hidden;
`;

export default function Checkbox() {
  return (
    <div css={{ display: 'flex' }}>
      <div>
        <input
          type="checkbox"
          css={checkboxInputHidden}
          onChange={e => console.log(e.target.value)}
        />
        <CheckboxIcon />
      </div>

      <label>Some label</label>
    </div>
  );
}
