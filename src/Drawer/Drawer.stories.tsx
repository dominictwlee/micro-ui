import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import Drawer from './Drawer';

const meta: Meta = {
  title: 'Drawer',
  component: Drawer,
};

export default meta;

function DrawerWithToggle() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} />
      <button onClick={() => setOpen(!open)}>Toggle</button>
    </>
  );
}

const Template: Story = args => <DrawerWithToggle {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: any = Template.bind({});
