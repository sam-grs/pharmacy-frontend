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
        <>
            {/* ver se o loading vai funcionar */}
            <div className="flex justify-center items-center h-full">
                {category.length === 0 && (
                    <RotatingLines
                        visible={true}
                        width="96"
                        strokeColor="#0369a1"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                    />
                )}
            </div>
            <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.map((category: any) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </>
    )
}
