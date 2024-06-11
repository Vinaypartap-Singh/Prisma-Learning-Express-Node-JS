import { Router } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  updateComment,
} from "../controller/CommentController.js";

const commentRouter = Router();
commentRouter.get("/", getAllComments);
commentRouter.post("/", createComment);
commentRouter.put("/", updateComment);
commentRouter.delete("/", deleteComment);

export default commentRouter;
