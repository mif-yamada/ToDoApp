import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoButton } from 'component/Button';

export default {
  title: 'Example/TodoButton',
  component: TodoButton,
} as ComponentMeta<typeof TodoButton>;

const Template: ComponentStory<typeof TodoButton> = (args) => (
  <TodoButton id={args.id}  value={args.value} disabled={args.disabled}></TodoButton>
);

export const Primary = Template.bind({});
Primary.args = {
  value: 'add',
  disabled:false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 'del',
  disabled: false,
};
