import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type AlertProps = {
    message: string
    type?: 'success' | 'error' | 'info'
}

export function Alert({ message, type = 'success' }: AlertProps) {
    toast[type](`🦄 ${message}`, {
        position: 'bottom-left',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
    })
}
