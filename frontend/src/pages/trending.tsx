import React, { useEffect, useState } from 'react'
import { fetchTrendingPosts } from '../services/api'
import { Post } from '../types'
import PostCard from '../components/postCard'
import { FaChartLine } from 'react-icons/fa'
import Loading from '../components/loading'

const TrendingPosts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadTrendingPosts = async () => {
            try {
                setLoading(true)
                const data = await fetchTrendingPosts()
                setPosts(data)
                setError(null)
            } catch (err) {
                setError(
                    'Failed to load trending posts. Please try again later.'
                )
                console.error('Error fetching trending posts:', err)
            } finally {
                setLoading(false)
            }
        }

        loadTrendingPosts()
    }, [])

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center">
                <FaChartLine className="text-orange-500 text-3xl mr-3" />
                <h2 className="text-2xl font-bold">Trending Posts</h2>
            </div>

            {loading ? (
                <Loading
                    message="Loading trending posts..."
                    color="orange-500"
                />
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
                        No trending posts found.
                    </span>
                </div>
            ) : (
                <div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg mb-4">
                        <p className="text-orange-700 text-sm">
                            Showing {posts.length} post
                            {posts.length > 1 ? 's' : ''} with the highest
                            number of comments.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {posts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                isTrending={true}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TrendingPosts