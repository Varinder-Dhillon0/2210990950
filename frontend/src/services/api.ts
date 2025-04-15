import axios from 'axios'
import { Post, User } from '../types'
import { getRandomPostImage, getRandomUserAvatar } from './imageUtils'

const API_URL = 'http://localhost:5000' // Our backend microservice

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Helper to ensure user has an avatar
const ensureUserAvatar = (user: User): User => {
    if (!user.avatar) {
        return { ...user, avatar: getRandomUserAvatar() }
    }
    return user
}

// Helper to ensure post has an image and users have avatars
const ensurePostImages = (post: Post): Post => {
    // Ensure post has an image
    const updatedPost = {
        ...post,
        image: post.image || getRandomPostImage(),
        userAvatar: post.userAvatar || getRandomUserAvatar(),
    }

    // Ensure all comments have user avatars
    if (updatedPost.comments && updatedPost.comments.length > 0) {
        updatedPost.comments = updatedPost.comments.map((comment) => ({
            ...comment,
            userAvatar: comment.userAvatar || getRandomUserAvatar(),
        }))
    }

    return updatedPost
}

// API functions
export const fetchTopUsers = async (): Promise<User[]> => {
    const response = await api.get('/users')
    return response.data.map(ensureUserAvatar)
}

export const fetchTrendingPosts = async (): Promise<Post[]> => {
    const response = await api.get('/posts?type=popular')
    return response.data.map(ensurePostImages)
}

export const fetchFeed = async (): Promise<Post[]> => {
    const response = await api.get('/posts?type=latest')
    return response.data.map(ensurePostImages)
}

export const fetchPost = async (postId: string): Promise<Post> => {
    const response = await api.get(`/posts/${postId}`)
    return ensurePostImages(response.data)
}

export default {
    fetchTopUsers,
    fetchTrendingPosts,
    fetchFeed,
    fetchPost,
}