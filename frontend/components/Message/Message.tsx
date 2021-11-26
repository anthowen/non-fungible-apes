import React from 'react'

interface Props {
  /**
   * Represents the type of the message
   */
  type?: 'normal' | 'error' | 'success'
  /**
   * Class name of the component
   */
  className?: string
  /**
   * The text
   */
  text?: string
}

function Message({ type = 'normal', className, text }: Props) {
  return (
    <p
      className={`text-xl ${
        type === 'success'
          ? 'text-green-500'
          : type === 'error'
          ? 'text-red-800'
          : 'text-gray-900'
      } ${className || ''}`}
    >
      {text}
    </p>
  )
}

export default Message
