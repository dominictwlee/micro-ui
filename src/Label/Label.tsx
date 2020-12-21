import { HTMLProps, PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { themeVars } from '../theming';

export interface LabelProps extends HTMLProps<HTMLLabelElement> {}

const base = css`
  color: ${themeVars.colors.text.primary};
`;

export default function Label({ ...props }: PropsWithChildren<LabelProps>) {
  return <label css={[base, themeVars.typography.h4]} {...props} />;
}
