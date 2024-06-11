import prisma from "../db/db.config.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.json({ message: "User Already Exist", status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return res.json({ status: 200, data: newUser, message: "User Created" });
};

export const updateUser = async (req, res) => {
  const user_id = req.params.id;
  const { name, email, password } = req.body;

  await prisma.user.update({
    where: {
      id: Number(user_id),
    },
    data: {
      name,
      email,
      password,
    },
  });

  return res.json({ status: 200, message: "User updated" });
};

export const deleteUser = async (req, res) => {
  const user_id = req.params.id;

  await prisma.user.delete({
    where: {
      id: Number(user_id),
    },
  });

  return res.json({ status: 200, message: "User deleted" });
};

export const getAllUser = async (req, res) => {
  const getuser = await prisma.user.findMany({
    include: {
      post: true,
      comment: true,
    },
  });

  return res.json({ status: 200, data: getuser });
};
