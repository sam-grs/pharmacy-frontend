import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Input } from '../../../components'
import { Category } from '../../../models'
import { create, getAll, update } from '../../../services'
import { routes } from '../../../routes'
import { Alert } from '../../../components'
import { ToastContainer } from 'react-toastify'

const initialValues = {
    id: 0,
    nome: '',
}

export function CategoryForm() {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [category, setCategory] = useState<Category>(initialValues)

    useEffect(() => {
        if (id !== undefined) {
            findId(id)
        }
    }, [id])

    async function findId(id: string) {
        await getAll(`/categorias/${id}`, setCategory)
    }

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setCategory({
            ...category,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id != undefined) {
            try {
                await update(`/categorias`, category, setCategory)
                Alert({ message: 'Categoria atualizada com sucesso' })

                setTimeout(() => navigate(routes.categories), 3000)
            } catch (error: any) {
                Alert({ message: 'Erro ao atualizar a Categoria', type: 'error' })
            }
        } else {
            try {
                await create(`/categorias`, category, setCategory)
                Alert({ message: 'Categoria cadastrada com sucesso' })

                setTimeout(() => navigate(routes.categories), 3000)
            } catch (error: any) {
                Alert({ message: 'Erro ao cadastrar a Categoria', type: 'error' })
            }
        }
    }

    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <h1 className="text-4xl text-center my-8"></h1>

            <form className="flex flex-col gap-4 w-1/3" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <Input
                        placeholder="Digite o nome da categoria"
                        name="nome"
                        value={category.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>
                <ToastContainer />

                <Button type="submit">{id !== undefined ? 'Editar' : 'Cadastrar'}</Button>
            </form>
        </div>
    )
}
