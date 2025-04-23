import blogPostController from "../controllers/blogPost.controller.js";
import { Router } from "express";

export default app => {
  var router = Router();
  
  router.post("/", blogPostController.create);
  router.get("/", blogPostController.findAll);
  router.get("/published", blogPostController.findAllPublished);
  router.get("/:id", blogPostController.findOne);
  router.put("/:id", blogPostController.update);
  router.delete("/:id", blogPostController.deleteItem);
  router.delete("/", blogPostController.deleteAll);

  app.use("/api/blog-posts", router);
};
