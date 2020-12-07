import React from 'react';

import { Button } from './Button';

export default {
  component: Button,
  title: 'Button'
};

const Template = args => <Button {...args} >{args.label}</Button>

export const Default = Template.bind({});

Default.args = {
  color: 'red',
  label: 'Hi there'
}