import { Link, Outlet } from 'react-router-dom'
import { FaUsers, FaFire, FaStream } from 'react-icons/fa'

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        Social Media Analytics
                    </h1>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    to="/"
                                    className="flex items-center hover:text-blue-200 transition-colors"
                                >
                                    <FaUsers className="mr-2" /> Top Users
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/trending"
                                    className="flex items-center hover:text-blue-200 transition-colors"
                                >
                                    <FaFire className="mr-2" /> Trending Posts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/feed"
                                    className="flex items-center hover:text-blue-200 transition-colors"
                                >
                                    <FaStream className="mr-2" /> Feed
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile Navigation */}
            <div className="md:hidden bg-white border-b p-3 sticky top-0 z-10 shadow-sm">
                <nav className="flex justify-around">
                    <Link
                        to="/"
                        className="flex flex-col items-center text-gray-600 hover:text-blue-600"
                    >
                        <FaUsers className="text-xl" />
                        <span className="text-xs mt-1">Top Users</span>
                    </Link>
                    <Link
                        to="/trending"
                        className="flex flex-col items-center text-gray-600 hover:text-blue-600"
                    >
                        <FaFire className="text-xl" />
                        <span className="text-xs mt-1">Trending</span>
                    </Link>
                    <Link
                        to="/feed"
                        className="flex flex-col items-center text-gray-600 hover:text-blue-600"
                    >
                        <FaStream className="text-xl" />
                        <span className="text-xs mt-1">Feed</span>
                    </Link>
                </nav>
            </div>

            <main className="container mx-auto p-4">
                <Outlet />
            </main>

            <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
                <p>
                    © {new Date().getFullYear()} Social Media Analytics
                    Dashboard
                </p>
            </footer>
        </div>
    )
}

export default Layout