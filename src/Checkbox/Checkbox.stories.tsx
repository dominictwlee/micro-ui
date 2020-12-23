import Checkbox from './Checkbox';
import { css } from '@emotion/react';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

const Template = (args: any) => <Checkbox {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: any = Template.bind({});

export const Labelled: any = (args: any) => (
  <div
    css={css`
      display: flex;
      justify-content: space-evenly;
    `}
  >
    <Checkbox {...args} labelPosition="left" id="checkbox-1" />
    <Checkbox {...args} labelPosition="top" id="checkbox-2" />
    <Checkbox {...args} labelPosition="right" id="checkbox-3" />
    <Checkbox {...args} labelPosition="bottom" id="checkbox-4" />
  </div>
);
Labelled.args = {
  label: 'Enable some functionality',
};
