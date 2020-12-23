import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

import { themeVars } from '../theming';
import { Roundness } from '../types';

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
