import { css } from '@emotion/react';
import Radio from './Radio';

const meta = {
  title: 'Radio',
  component: Radio,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args: any) => <Radio {...args} />;
Template.args = {
  name: 'radio-options',
};

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
    <Radio {...args} labelPosition="left" id="radio-1" label="option 1" />
    <Radio {...args} labelPosition="top" id="radio-2" label="option 2" />
    <Radio {...args} labelPosition="right" id="radio-3" label="option 3" />
    <Radio {...args} labelPosition="bottom" id="radio-4" label="option 4" />
  </div>
);
