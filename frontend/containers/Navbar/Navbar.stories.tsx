import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Navbar from './Navbar'

export default {
  title: 'Containers/Navbar',
  component: Navbar,
  argTypes: {
    onConnect: { action: 'clicked' },
    onDisconnect: { action: 'clicked' },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})

export const Connected = Template.bind({})
Connected.args = {
  address: '0x656A2999D0D294705891F546d6753c53aC7f40d5',
}
