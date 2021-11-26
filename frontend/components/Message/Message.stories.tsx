import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Message from './Message'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Message',
  component: Message,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Message>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  type: 'normal',
  text: 'Normal message',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  text: 'Your transaction was successful'
}

export const Error = Template.bind({})
Error.args = {
  type: 'error',
  text: 'There was an error for your transaction',
}
