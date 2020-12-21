import { css } from '@emotion/react';
import Overlay from '../Overlay';
import { themeVars } from '../theming';

const base = css`
  right: 0;
  top: 0;
  bottom: auto;
  left: auto;
  height: 100%;
  width: 25%;
  background-color: ${themeVars.colors.card.light};
`;

export default function Drawer() {
  return <Overlay css={base}>Hello World</Overlay>;
}
