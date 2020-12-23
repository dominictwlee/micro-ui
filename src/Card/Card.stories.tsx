import { ReactElement } from 'react';
import { css } from '@emotion/react';
import { MdContentCopy } from 'react-icons/md';
import { Meta, Story } from '@storybook/react/types-6-0';

import Card from './Card';
import CardHeader from '../CardHeader';
import { Roundness, Spacing } from '../types';

const meta: Meta = {
  title: 'Card',
  component: Card,
};

export default meta;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: Story = args => (
  <Card
    css={css`
      width: 200px;
      height: 200px;
    `}
    {...args}
  />
);

interface WithHeaderArgs {
  title?: string;
  spacing?: Spacing;
  roundness?: Roundness;
}

export const WithHeader: Story<WithHeaderArgs> = ({
  title,
  spacing,
  ...args
}) => {
  return (
    <Card
      css={css`
        max-width: 385px;
      `}
      {...args}
    >
      <CardHeader
        title={title}
        spacing={spacing}
        icon={<MdContentCopy size="1.5em" />}
      />
    </Card>
  );
};

WithHeader.storyName = 'With Header';
WithHeader.args = {
  title: 'Clipboard Settings',
};
