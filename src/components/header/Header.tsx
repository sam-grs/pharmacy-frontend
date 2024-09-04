import { Link } from 'react-router-dom'

import { routes } from '../../routes'

export function Header() {
    return (
        <div className="flex justify-between p-4 bg-indigo-700 text-white w-full text-lg">
            <Link to={routes.home} className="text-2xl font-bold">
                Farmácia
            </Link>
        </div>
    )
}
