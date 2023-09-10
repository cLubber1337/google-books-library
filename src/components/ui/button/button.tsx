import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  onClick: () => void
}

export const Button = ({ onClick, ...props }: ButtonProps) => {
  return (
    <button
      className="my-4 flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white
      transition-all hover:bg-blue-500 active:bg-blue-800 disabled:opacity-50 disabled:hover:bg-blue-700"
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>
  )
}
