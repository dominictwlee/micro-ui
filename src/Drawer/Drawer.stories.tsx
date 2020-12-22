import React from 'react';
import { useState } from 'react';
import Drawer from './Drawer';

const meta = {
  title: 'Drawer',
  component: Drawer,
  parameters: {
    controls: { expanded: true },
  },
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

const Template = (args: any) => <DrawerWithToggle {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: any = Template.bind({});
