import { Link } from 'react-router-dom'

import { Button } from '../../components'
import backgroundImage from '../../assets/home-page.jpg'
import { routes } from '../../routes'

export function HomePage() {
    return (
        <div
            className=" flex justify-center h-screen w-full bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col gap-4 items-center justify-center py-4">
                <h2 className="text-5xl font-bold text-white">Seja Bem Vinde!</h2>
                <Link to={routes.categories}>
                    <Button>Entrar</Button>
                </Link>
            </div>
        </div>
    )
}
