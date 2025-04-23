import db from "../models/index.js";
import blogPostService from "../services/blogPost.service.js";

const BlogPost = db.blogPosts;
const Op = db.Sequelize.Op;

const create = (req, res) => {

  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const blogPost = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  BlogPost.create(blogPost)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });

};

const findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  BlogPost.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving blog posts."
      });
    });
};

const findOne = (req, res) => {
  const id = req.params.id;

  BlogPost.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving blog post with id=" + id
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  BlogPost.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Blog post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update blog post with id=${id}. Maybe it was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating blog post with id=" + id
      });
    });
};

const deleteItem = (req, res) => {
  const id = req.params.id;

  BlogPost.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Blog post was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete blog post with id=${id}. Maybe it was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete blog post with id=" + id
      });
    });
};

const deleteAll = (req, res) => {
  BlogPost.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Blog post were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all blog posts."
      });
    });
};

const findAllPublished = (req, res) => {
  BlogPost.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving blog posts."
      });
    });
};


export default {
  create,
  findAll,
  findOne,
  update,
  deleteAll,
  findAllPublished,
  deleteItem
};