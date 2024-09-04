import { FC, MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    type?: 'button' | 'reset' | 'submit'
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    color?: string
    background?: string
    fullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({
    type = 'button',
    disabled = false,
    color = 'text-white',
    background = 'bg-indigo-700',
    fullWidth = false,
    children,
    onClick,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${background} 
                 bg-sky-700
                 py-1 px-5 
                 ${color} 
                 rounded-md
                 hover:bg-sky-600
                 ${fullWidth && 'w-full'}`}
        >
            {children}
        </button>
    )
}
