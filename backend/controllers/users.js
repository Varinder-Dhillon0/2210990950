const { getUsers, getUserPosts, getPostComments } = require('../services/apiServices');
const cache = require('../utils/cache');

exports.getTopUsers = async (req, res) => {
  try {
    const cached = cache.get('topUsers');
    if (cached) return res.json(cached);

    const users = await getUsers();
    console.log(users)
    const userCommentsCount = [];

    for (const [userId, userName] of Object.entries(users)) {
      const posts = await getUserPosts(userId);
      let commentCount = 0;

      for (const post of posts) {
        const comments = await getPostComments(post.id);
        commentCount += comments.length;
      }

      userCommentsCount.push({ userId, userName, commentCount });
    }

    const topUsers = userCommentsCount
      .sort((a, b) => b.commentCount - a.commentCount)
      .slice(0, 5);

    cache.set('topUsers', topUsers);
    res.json(topUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};