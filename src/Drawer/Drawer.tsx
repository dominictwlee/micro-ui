import { css } from '@emotion/react';
import Overlay from '../Overlay';
import Text from '../Text';
import { themeVars } from '../theming';

interface DrawerProps {
  open?: boolean;
}

const base = css`
  right: 0;
  top: 0;
  bottom: auto;
  left: auto;
  height: 100%;
  width: 25%;
  background-color: ${themeVars.colors.card.light};
  transform: translateX(100%);
  transition: transform 300ms ease-out;
`;

const openStyles = css`
  transform: translateX(0);
  transition: transform 300ms ease-in;
`;

export default function Drawer({ open = false }: DrawerProps) {
  return (
    <Overlay css={[base, open && openStyles]}>
      <Text variant="h3">Hello World</Text>
    </Overlay>
  );
}
