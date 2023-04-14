import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Test, TestProps } from './TestComponent';

export default {
  component: Test,
  title: 'Test',
} as Meta;

const Template: Story<TestProps> = (args) => <Test {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
