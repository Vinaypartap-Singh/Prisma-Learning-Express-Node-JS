import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../controller/UserController.js";

const UserRouter = Router();

// Routes for POST, CREATE
UserRouter.post("/", createUser);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);
UserRouter.get("/", getAllUser);

export default UserRouter;
