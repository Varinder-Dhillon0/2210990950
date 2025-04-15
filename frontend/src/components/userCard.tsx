import React from 'react'
import { User } from '../types'

interface UserCardProps {
    user: User
    rank: number
}

const UserCard: React.FC<UserCardProps> = ({ user, rank }) => {

    console.log(user)

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center transition-transform hover:scale-105">
            <div className="text-3xl font-bold text-blue-500 mr-4 w-10 text-center">
                {rank}
            </div>
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-blue-400 mr-4">
                <img
                    src={user.avatar}
                    alt={user.userName}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className="text-gray-600">@{user.userName}</p>
                <div className="mt-2 bg-blue-100 text-blue-800 inline-block px-2 py-1 rounded-full text-sm">
                    {user.commentCount} {user.commentCount === 1 ? 'comment' : 'comments'}
                </div>
            </div>
        </div>
    )
}

export default UserCard