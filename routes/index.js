import { Router } from "express";
import UserRouter from "./UserRoutes.js";
import postRouter from "./PostRoutes.js";
import commentRouter from "./CommentRoutes.js";
const router = Router();

router.use("/api/user", UserRouter);
router.use("/api/posts", postRouter);
router.use("/api/comment", commentRouter);

export default router;
