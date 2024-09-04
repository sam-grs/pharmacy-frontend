import { FC, MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    type?: 'button' | 'reset' | 'submit'
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    styles?: string
    fullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({
    type = 'button',
    disabled = false,
    styles = 'text-white bg-sky-700 hover:bg-sky-600',
    fullWidth = false,
    children,
    onClick,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
                 py-1 px-5 
                 rounded-md
                 ${fullWidth && 'w-full'}
                 ${styles} 
                 `}
        >
            {children}
        </button>
    )
}
