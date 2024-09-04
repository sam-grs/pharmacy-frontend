import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes'
import { HomePage } from './pages'
import { Footer, Header } from './components'

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="min-h-[80vh]">
                <Routes>
                    <Route path={routes.home} element={<HomePage />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}
