import Text from '../Text';
import { css } from '@emotion/react';
import { themeVars } from '../theming';
import { Spacing } from '../types';

export interface CardHeaderProps {
  title?: string;
  icon?: React.ReactElement;
  action?: React.ReactElement;
  spacing?: Spacing;
}

const base = (spacing: Spacing) => css`
  display: flex;
  align-items: center;
  padding: ${themeVars.spacing[spacing]};
`;

const mainHeaderContent = css`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  color: ${themeVars.colors.text.primary};
`;

const titleStyles = css`
  margin-left: ${themeVars.spacing[1]};
`;

const actionWrapper = css`
  flex: 0 1 auto;
`;

export default function CardHeader({
  title,
  icon,
  action,
  spacing = 5,
}: CardHeaderProps) {
  return (
    <div css={base(spacing)}>
      <div css={mainHeaderContent}>
        {icon}
        <Text variant="h3" css={titleStyles}>
          {title}
        </Text>
      </div>
      <div css={actionWrapper}>{action}</div>
    </div>
  );
}
