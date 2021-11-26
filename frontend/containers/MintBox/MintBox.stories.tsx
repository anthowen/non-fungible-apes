import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MintBox from './MintBox';

export default {
  title: 'Containers/MintBox',
  component: MintBox,
  argTypes: {
    onMint: { action: 'clicked' },
  },
} as ComponentMeta<typeof MintBox>;

const Template: ComponentStory<typeof MintBox> = (args) => <MintBox {...args} />;

export const Default = Template.bind({});

