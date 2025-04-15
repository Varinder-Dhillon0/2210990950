import React from 'react'
import { FaSpinner } from 'react-icons/fa'

interface LoadingProps {
    message?: string
    color?: string
}

const Loading: React.FC<LoadingProps> = ({
    message = 'Loading...',
    color = 'blue-500',
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <FaSpinner className={`text-${color} text-4xl animate-spin mb-3`} />
            <p className="text-gray-600">{message}</p>
        </div>
    )
}

export default Loading