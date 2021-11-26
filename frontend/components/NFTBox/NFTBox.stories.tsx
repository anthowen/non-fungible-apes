import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NFTBox from './NFTBox'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/NFTBox',
  component: NFTBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    show: { control: 'switch' },
  },
} as ComponentMeta<typeof NFTBox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NFTBox> = (args) => <NFTBox {...args} />

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  show: true,
  className: 'text-blue'
}
