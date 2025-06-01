import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  link?: string
  onClick?: () => void
}

function Button({ link, onClick, type = 'button', children }: ButtonProps) {
  const buttonContent = (
    <button
      type={type}
      className="bg-blue-500 dark:bg-purple-800 text-white px-16 py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1"
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  )

  if (link) {
    return <Link href={link}>{buttonContent}</Link>
  }

  return buttonContent
}

export { Button }
