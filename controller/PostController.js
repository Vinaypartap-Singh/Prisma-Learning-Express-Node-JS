import prisma from "../db/db.config.js";

export const createPost = async (req, res) => {
  const { user_id, title, description } = req.body;

  const newPost = await prisma.post.create({
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });

  return res.json({ status: 200, data: newPost });
};

export const updatePost = async (req, res) => {
  const post_id = req.params.id;
  const { title, description } = req.body;

  await prisma.user.update({
    where: {
      id: Number(post_id),
    },
    data: {
      title,
      description,
    },
  });

  return res.json({ status: 200, message: "Post updated" });
};

export const deletePost = async (req, res) => {
  const post_id = req.params.id;

  await prisma.post.delete({
    where: {
      id: Number(post_id),
    },
  });

  return res.json({ status: 200, message: "Post deleted" });
};

export const getAllPosts = async (req, res) => {
  const getPost = await prisma.post.findMany({
    include: {
      comment: true,
    },
  });

  return res.json({ status: 200, data: getPost });
};

// Single Post

export const SinglePost = async (req, res) => {
  const post_id = req.params.id;

  const post = await prisma.post.findFirst({
    where: {
      id: Number(post_id),
    },
  });

  return res.json({ status: 200, data: post });
};
