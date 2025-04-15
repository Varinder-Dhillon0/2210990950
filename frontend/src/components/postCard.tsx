import React, { useState } from 'react'
import { FaComment, FaHeart, FaFire } from 'react-icons/fa'
import { Post } from '../types'

interface PostCardProps {
    post: Post
    isTrending?: boolean
}

const PostCard: React.FC<PostCardProps> = ({ post, isTrending = false }) => {
    const [showComments, setShowComments] = useState(false)

    const formattedDate = new Date(post.createdAt).toLocaleString()

    console.log(post)

    return (
        <div
            className={`bg-white rounded-lg shadow-md overflow-hidden mb-4 ${
                isTrending ? 'border-2 border-orange-400' : ''
            }`}
        >
            {/* Post Header */}
            <div className="flex items-center p-4 border-b">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
                    <img
                        src={post.userAvatar}
                        alt={post.userName}
                        className="h-full w-full object-cover"
                    />
                </div>
                {/* <div className="flex-1">
                    <h3 className="font-bold">{post.userName}</h3>
                    <p className="text-xs text-gray-500">{formattedDate}</p>
                </div> */}
                {isTrending && (
                    <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <FaFire className="mr-1" /> Trending
                    </div>
                )}
            </div>

            {/* Post Content */}
            <div className="p-4">
                <p className="mb-4">{post.content}</p>
                {post.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                            src={post.image}
                            alt="Post"
                            className="w-full h-auto"
                        />
                    </div>
                )}
            </div>

            {/* Post Stats */}
            <div className="border-t border-b px-4 py-2 flex text-gray-500 text-sm">
                <div className="flex items-center mr-6">
                    <FaHeart className="mr-1 text-red-500" />
                    <span>{Math.floor(Math.random() * 100)} likes</span>
                </div>
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center hover:text-blue-500"
                >
                    <FaComment className="mr-1" />
                    <span>{post.commentCount} comments</span>
                </button>
            </div>

            {/* Comments Section */}
            {showComments && (
                <div className="p-4 bg-gray-50">
                    <h4 className="font-medium mb-2 text-gray-700">Comments</h4>
                    {post.comments && post.comments.length > 0 ? (
                        <div className="space-y-3">
                            {post.comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="flex p-2 rounded bg-white"
                                >
                                    <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                                        <img
                                            src={comment.userAvatar}
                                            alt={comment.username}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-baseline">
                                            <span className="font-medium mr-2">
                                                {comment.username}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {new Date(
                                                    comment.createdAt
                                                ).toLocaleString()}
                                            </span>
                                        </div>
                                        <p className="text-sm">
                                            {comment.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-sm">
                            No comments yet.
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}

export default PostCard