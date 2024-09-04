import { useEffect, useState } from 'react'

import { Category } from '../../../models'
import { getAll } from '../../../services'
import { RotatingLines } from 'react-loader-spinner'
import { CategoryCard } from '../categoryCard'

export function ListCategories() {
    const [category, setCategory] = useState<Category[]>([])

    useEffect(() => {
        findAll()
    }, [])

    async function findAll() {
        await getAll('/categorias', setCategory)
    }
    console.log('category', category)

    return (
        <div className="h-screen py-20">
            {category.length === 0 ? (
                <div className="h-screen flex justify-center items-center">
                    <RotatingLines
                        visible={true}
                        width="96"
                        strokeColor="#0369a1"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                    />
                </div>
            ) : (
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.map((category: any) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            )}
        </div>
    )
}
