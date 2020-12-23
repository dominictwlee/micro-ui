import { HTMLProps, PropsWithChildren } from 'react';
import { css } from '@emotion/react';

import { themeVars } from '../theming';

const elementTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h6',
  p1: 'p',
} as const;

type ElementTag = keyof typeof elementTags;

export interface TextProps
  extends HTMLProps<HTMLParagraphElement | HTMLHeadingElement> {
  variant?: ElementTag;
}

const base = (variant: ElementTag) => css`
  font-size: ${themeVars.typography[variant].fontSize};
  font-weight: ${themeVars.typography[variant].fontWeight};
  line-height: ${themeVars.typography[variant].lineHeight};
  color: ${themeVars.colors.text.primary};
`;

export default function Text({
  variant = 'p1',
  ...props
}: PropsWithChildren<TextProps>) {
  const Element = elementTags[variant];
  return <Element css={base(variant)} {...props} />;
}
