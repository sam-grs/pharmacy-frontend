import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Input } from '../../../components'
import { Category } from '../../../models'
import { create, getAll, update } from '../../../services'
import { routes } from '../../../routes'

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
                alert('Categoria atualizada com sucesso')
                navigate(routes.categories)
            } catch (error: any) {
                alert('Erro ao atualizar a Categoria')
            }
        } else {
            try {
                await create(`/categorias`, category, setCategory)
                alert('Categoria cadastrada com sucesso')
                navigate(routes.categories)
            } catch (error: any) {
                alert('Erro ao cadastrar a Categoria')
            }
        }
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8"></h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <Input
                        placeholder="Digite o nome da categoria"
                        name="nome"
                        value={category.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>

                <Button type="submit">{id !== undefined ? 'Editar' : 'Cadastrar'}</Button>
            </form>
        </div>
    )
}
