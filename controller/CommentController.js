import prisma from "../db/db.config.js";

export const createComment = async (req, res) => {
  const { user_id, post_id, comment } = req.body;

  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        increment: 1,
      },
    },
  });

  const newComment = await prisma.comment.create({
    data: {
      user_id: Number(user_id),
      post_id: Number(post_id),
      comment,
    },
  });

  return res.json({ status: 200, data: newComment });
};

export const updateComment = async (req, res) => {
  const comment_id = req.params.id;
  const { comment } = req.body;

  await prisma.user.update({
    where: {
      id: Number(comment_id),
    },
    data: {
      comment,
    },
  });

  return res.json({ status: 200, message: "Comment updated" });
};

export const deleteComment = async (req, res) => {
  const comment_id = req.params.id;

  await prisma.comment.delete({
    where: {
      id: Number(comment_id),
    },
  });

  return res.json({ status: 200, message: "Comment deleted" });
};

export const getAllComments = async (req, res) => {
  const getComments = await prisma.comment.findMany({});

  return res.json({ status: 200, data: getComments });
};
