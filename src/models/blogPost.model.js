module.exports = (sequelize, Sequelize) => {
  const BlogPost = sequelize.define("blog_post", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return BlogPost;
};
