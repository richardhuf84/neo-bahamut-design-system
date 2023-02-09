import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NBButton, type NBButtonProps } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: NBButton,
} as ComponentMeta<typeof NBButton>;

const Template: ComponentStory<typeof NBButton> = (args) => <NBButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: 'secondary',
  children: 'Button',
};