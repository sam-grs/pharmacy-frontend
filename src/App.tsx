import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes'
import { HomePage, ListCategories, CategoryForm, DeleteCategory } from './pages'
import { Footer, Header } from './components'

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={routes.home} element={<HomePage />} />
                <Route path={routes.categories} element={<ListCategories />} />
                <Route path={routes.categoryRegistration} element={<CategoryForm />} />
                <Route path={routes.editCategory} element={<CategoryForm />} />
                <Route path={routes.deleteCategory} element={<DeleteCategory />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
