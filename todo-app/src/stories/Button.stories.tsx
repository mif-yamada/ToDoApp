import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../component/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button id={args.id} type={args.type} value={args.value} onClick={args.onClick}></Button>
);

export const Primary = Template.bind({});
Primary.args = {
  type:'button',
  value: 'add',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'button',
  value: 'del',
};
