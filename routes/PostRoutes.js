import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
} from "../controller/PostController.js";
const postRouter = Router();
postRouter.post("/", createPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);
postRouter.get("/", getAllPosts);

export default postRouter;
