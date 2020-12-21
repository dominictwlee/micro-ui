import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

import { themeVars } from '../theming';

type Roundness = 1 | 2;
type Spacing = 1 | 2 | 3 | 4 | 5 | 6;

export interface CardProps {
  roundness?: Roundness;
  spacing?: Spacing;
}

const base = css`
  background-color: ${themeVars.colors.card.main};
  padding: ${themeVars.spacing[5]} ${themeVars.spacing[6]};
`;

const shape = (roundness: Roundness) => css`
  border-radius: ${themeVars.shape.borderRadius[roundness]};
`;

const pSpacing = (spacing: Spacing) => css`
  padding: ${themeVars.spacing[spacing]} ${themeVars.spacing[spacing]};
`;

export default function Card({
  roundness = 1,
  spacing = 3,
  ...props
}: PropsWithChildren<CardProps>) {
  return <div css={[base, shape(roundness), pSpacing(spacing)]} {...props} />;
}
