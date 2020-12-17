import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

import { themeVars } from '../theming';

export interface CardProps {
  roundness?: 1 | 2;
  spacing?: 1 | 2 | 3 | 4 | 5 | 6;
}

const base = css`
  background-color: ${themeVars.colors.card.main};
  padding: ${themeVars.spacing[5]} ${themeVars.spacing[6]};
`;

const shape = ({ roundness = 1 }: CardProps) => css`
  border-radius: ${themeVars.shape.borderRadius[roundness]};
`;

const spacing = ({ spacing = 3 }: CardProps) => css`
  padding: ${themeVars.spacing[spacing]} ${themeVars.spacing[spacing]};
`;

export default function Card({
  roundness,
  spacing: _spacing,
  ...props
}: PropsWithChildren<CardProps>) {
  return <div css={[base, shape, spacing]} {...props} />;
}
