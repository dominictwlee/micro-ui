import React from 'react';
import Input from './Input';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args: any) => <Input {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: any = Template.bind({});
Default.args = {
  label: 'Name',
  id: 'name',
};
