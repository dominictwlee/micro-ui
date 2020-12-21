import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

interface OverlayProps {
  container?: Element | null;
}

const base = css`
  position: fixed;
  inset: 0;
  z-index: 1500;
`;

export default function Overlay(props: PropsWithChildren<OverlayProps>) {
  const { container, children, ...restProps } = props;
  const portalContainer = container ?? document.body;
  return ReactDOM.createPortal(
    <div css={base} {...restProps}>
      {children}
    </div>,
    portalContainer
  );
}
