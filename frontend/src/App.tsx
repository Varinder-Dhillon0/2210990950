import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import TopUsers from './pages/topUsers'
import TrendingPosts from './pages/trending'
import Feed from './pages/feed'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<TopUsers />} />
                    <Route path="trending" element={<TrendingPosts />} />
                    <Route path="feed" element={<Feed />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App