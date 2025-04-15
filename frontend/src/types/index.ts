export interface User {
    id: string
    name: string
    userName: string
    avatar: string
    commentCount: number
}

export interface Comment {
    id: string
    postId: string
    userId: string
    username: string
    userAvatar: string
    content: string
    createdAt: string
}

export interface Post {
    id: string
    userId: string
    userName: string
    userAvatar: string
    content: string
    image: string
    comments: Comment[]
    commentCount: number
    createdAt: string
}