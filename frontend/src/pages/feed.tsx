import React, { useEffect, useState } from 'react'
import { fetchFeed } from '../services/api'
import { Post } from '../types'
import PostCard from '../components/postCard'
import { FaStream, FaBell } from 'react-icons/fa'
import Loading from '../components/loading'

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [newPostsCount, setNewPostsCount] = useState<number>(0)
    const [newPosts, setNewPosts] = useState<Post[]>([])

    useEffect(() => {
        const loadFeed = async () => {
            try {
                setLoading(true)
                const data = await fetchFeed()
                setPosts(data)
                setError(null)
            } catch (err) {
                setError('Failed to load feed. Please try again later.')
                console.error('Error fetching feed:', err)
            } finally {
                setLoading(false)
            }
        }

        loadFeed()

        // // Setup socket event listeners
        // socket.on('newPost', (post: Post) => {
        //     setNewPosts((prev) => [post, ...prev])
        //     setNewPostsCount((prev) => prev + 1)
        // })

        // return () => {
        //     // Cleanup socket listeners on component unmount
        //     socket.off('newPost')
        // }
    }, [])

    const showNewPosts = () => {
        setPosts((prev) => [...newPosts, ...prev])
        setNewPosts([])
        setNewPostsCount(0)
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                    <FaStream className="text-green-500 text-3xl mr-3" />
                    <h2 className="text-2xl font-bold">Feed</h2>
                </div>

                {newPostsCount > 0 && (
                    <button
                        onClick={showNewPosts}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center transition-colors"
                    >
                        <FaBell className="mr-2" />
                        {newPostsCount} new post{newPostsCount > 1 ? 's' : ''}
                    </button>
                )}
            </div>

            {loading ? (
                <Loading message="Loading your feed..." color="green-500" />
            ) : error ? (
                <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <span className="block sm:inline">{error}</span>
                </div>
            ) : posts.length === 0 ? (
                <div
                    className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <span className="block sm:inline">
                        No posts found in your feed.
                    </span>
                </div>
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Feed