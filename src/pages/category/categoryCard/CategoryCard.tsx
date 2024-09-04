import { Link } from 'react-router-dom'

import { Button } from '../../../components'
import { Category } from '../../../models'

type CategoryProps = {
    category: Category
}

export function CategoryCard({ category }: CategoryProps) {
    return (
        <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <h3 className="text-lg font-bold text-center uppercase ">{category?.nome}</h3>
                </div>
            </div>
            <div className="flex">
                <Link to={`/edit-category/${category.id}`} className="w-full">
                    <Button>Editar</Button>
                </Link>
                <Link to={`/delete-category/${category.id}`} className="w-full">
                    <Button>Deletar</Button>
                </Link>
            </div>
        </div>
    )
}
