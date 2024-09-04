import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Category } from '../../../models'
import { routes } from '../../../routes'
import { Button } from '../../../components'
import { del, getAll } from '../../../services'

export function DeleteCategory() {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [category, setCategory] = useState<Category>({} as Category)
    const back = () => navigate(routes.categories)

    useEffect(() => {
        if (id !== undefined) {
            findId(id)
        }
    }, [id])

    async function findId(id: string) {
        await getAll(`/categorias/${id}`, setCategory)
    }

    function deleteCategory() {
        del(`/categorias/${id}`)
        back()
    }

    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar categoria</h1>

            <p className="text-center font-semibold mb-4">Tem certeza de deletar a Categoria?</p>

            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-sky-700 text-white font-bold text-2xl">Categoria</header>
                <p className="p-8 text-3xl bg-slate-200 h-full">{category.nome}</p>
                <div className="flex">
                    <Button onClick={back} fullWidth={true}>
                        Não
                    </Button>
                    <Button onClick={deleteCategory} fullWidth={true}>
                        Sim
                    </Button>
                </div>
            </div>
        </div>
    )
}
