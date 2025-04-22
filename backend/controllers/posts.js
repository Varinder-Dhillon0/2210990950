const { getUsers, getUserPosts, getPostComments } = require('../services/apiServices');
const cache = require('../utils/cache');

exports.getPosts = async (req, res) => {
  try {
    const { type } = req.query;
    if (type !== 'popular' && type !== 'latest') {
      return res.status(400).json({ error: 'Invalid query param' });
    }

    const cached = cache.get(`posts-${type}`);
    if (cached) return res.json(cached);

    const users = await getUsers();
    console.log(users)
    let allPosts = [];
    

    for (const userId of Object.keys(users)) {
      const posts = await getUserPosts(userId);
      console.log(posts)
      allPosts = allPosts.concat(posts);
    }

    if (type === 'popular') {
      let postCommentMap = [];

      for (const post of allPosts) {
        const comments = await getPostComments(post.id);
        postCommentMap.push({ ...post, commentCount: comments.length });
      }

      const max = Math.max(...postCommentMap.map(p => p.commentCount));
      const popularPosts = postCommentMap.filter(p => p.commentCount === max);

      cache.set('posts-popular', popularPosts);
      return res.json(popularPosts);
    }

    if (type === 'latest') {
      const latestPosts = allPosts
        .sort((a, b) => b.id - a.id) // assuming higher ID = newer
        .slice(0, 5);

      cache.set('posts-latest', latestPosts);
      return res.json(latestPosts);
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
