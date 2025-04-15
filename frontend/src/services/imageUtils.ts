/**
 * Utility functions for generating random images for users and posts
 */

const userAvatars = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
    'https://randomuser.me/api/portraits/women/6.jpg',
    'https://randomuser.me/api/portraits/men/7.jpg',
    'https://randomuser.me/api/portraits/women/8.jpg',
    'https://randomuser.me/api/portraits/men/9.jpg',
    'https://randomuser.me/api/portraits/women/10.jpg',
]

const postImages = [
    'https://elearningindustry.com/wp-content/uploads/2020/10/advantages-and-disadvantages-of-online-learning.jpg',
    'https://media.istockphoto.com/id/1336136316/photo/woman-online-shopping-on-smart-phone-fashion-clothes-at-home.jpg?s=612x612&w=0&k=20&c=PYDR6zm5uC84qF-6a1dI8G5uXWrTg0wWMcjHSewsAM8=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFEPqAD1Sk4Qe2rm1ube13t95WqFiOXSm9w&s',
]


//gets random avatar
export const getRandomUserAvatar = (): string => {
    const randomIndex = Math.floor(Math.random() * userAvatars.length)
    return userAvatars[randomIndex]
}

//gets random image
export const getRandomPostImage = (): string => {
    const randomIndex = Math.floor(Math.random() * postImages.length)
    return postImages[randomIndex]
}

export default {
    getRandomUserAvatar,
    getRandomPostImage,
}