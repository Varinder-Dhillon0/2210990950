import React, { useEffect, useRef, useState } from 'react'
import { fetchTopUsers } from '../services/api'
import { User } from '../types'
import UserCard from '../components/userCard'
import { FaTrophy } from 'react-icons/fa'
import Loading from '../components/loading'

const TopUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadUsers = async () => {
            try {
                setLoading(true)
                const data = await fetchTopUsers()
                setUsers(data)
                setError(null)
            } catch (err) {
                setError('Failed to load top users. Please try again later.')
                console.error('Error fetching top users:', err)
            } finally {
                setLoading(false)
            }
        }

        loadUsers()
    }, [])

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center">
                <FaTrophy className="text-yellow-500 text-3xl mr-3" />
                <h2 className="text-2xl font-bold">Top Users</h2>
            </div>

            {loading ? (
                <Loading message="Loading top users..." color="yellow-500" />
            ) : error ? (
                <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <span className="block sm:inline">{error}</span>
                </div>
            ) : users.length === 0 ? (
                <div
                    className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <span className="block sm:inline">No top users found.</span>
                </div>
            ) : (
                <div className="space-y-4">
                    {users.map((user, index) => (
                        <UserCard key={user.id} user={user} rank={index + 1} />
                    ))}
                </div>
            )}
        </div>
    )
}


const useAuth = () =>{

    
    return {true}
}

export default TopUsers