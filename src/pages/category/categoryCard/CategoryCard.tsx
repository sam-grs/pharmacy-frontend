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
                <div className="flex w-ful py-2 px-4 items-center gap-2">
                    <h3 className="text-md font-bold text-center">Medicamento:</h3>
                    <h4 className="text-md">{category?.nome}</h4>
                </div>
            </div>
            <div className="flex gap-4 p-4">
                <Link to={`/edit-category/${category.id}`} className="w-full">
                    <Button fullWidth={true} styles="border text-sky-700 border-sky-700">
                        Editar
                    </Button>
                </Link>
                <Link to={`/delete-category/${category.id}`} className="w-full">
                    <Button fullWidth={true}>Deletar</Button>
                </Link>
            </div>
        </div>
    )
}
