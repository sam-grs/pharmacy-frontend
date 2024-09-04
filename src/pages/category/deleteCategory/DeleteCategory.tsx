import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Category } from '../../../models'
import { routes } from '../../../routes'
import { Alert, Button } from '../../../components'
import { del, getAll } from '../../../services'
import { ToastContainer } from 'react-toastify'

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

    async function deleteCategory() {
        try {
            await del(`/categorias/${id}`)

            Alert({ message: 'Deletado com sucesso' })
            setTimeout(() => back(), 3000)
        } catch (err: any) {
            Alert({ message: 'Erro ao deletar, verifique com administrador', type: 'error' })
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="border border-slate-900 rounded-md p-8 gap-2">
                <h2 className="text-center font-semibold text-xl mb-2">Tem certeza de deletar a Categoria?</h2>
                <div className="flex items-center gap-2 mb-5">
                    <h3 className="py-2 font-bold text-md">Categoria:</h3>
                    <h4 className="text-md h-full">{category.nome}</h4>
                </div>
                <div className="flex gap-4">
                    <ToastContainer />
                    <Button onClick={back} fullWidth={true} styles="border text-sky-700 border-sky-700">
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
