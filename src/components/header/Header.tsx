import { Link } from 'react-router-dom'

import { routes } from '../../routes'

export function Header() {
    return (
        <div className="flex justify-between items-center p-4 bg-sky-700 text-white w-full text-lg">
            <Link to={routes.home} className="text-2xl font-bold">
                Farmácia
            </Link>
            <Link to={routes.categoryRegistration} className="text-md font-bold">
                Cadastrar categoria
            </Link>
        </div>
    )
}
