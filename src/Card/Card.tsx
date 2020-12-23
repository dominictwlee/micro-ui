import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

import { themeVars } from '../theming';

type Roundness = 1 | 2;

export interface CardProps {
  roundness?: Roundness;
}

const base = css`
  background-color: ${themeVars.colors.card.main};
`;

const shape = (roundness: Roundness) => css`
  border-radius: ${themeVars.shape.borderRadius[roundness]};
`;

export default function Card({
  roundness = 1,
  ...props
}: PropsWithChildren<CardProps>) {
  return <div css={[base, shape(roundness)]} {...props} />;
}
