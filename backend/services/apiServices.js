const axios = require('axios');

const BASE_URL = process.env.BASE_URL;
const TOKEN = process.env.TOKEN;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const getUsers = async () => {
    console.log("Sending request with headers:", {
        Authorization: `Bearer ${TOKEN}`,
      });
      
  const res = await axiosInstance.get(`/users`);
  return res.data.users;
};

const getUserPosts = async (userId) => {
  const res = await axiosInstance.get(`/users/${userId}/posts`);
  return res.data.posts;
};

const getPostComments = async (postId) => {
  const res = await axiosInstance.get(`/posts/${postId}/comments`);
  return res.data.comments;
};

module.exports = { getUsers, getUserPosts, getPostComments };
