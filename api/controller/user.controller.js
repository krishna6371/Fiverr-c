// import User from "../models/user.model.js";
// // import createError from "../utils/createError.js";
import User from "../models/user.model.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  // console.log(token);
  if (req.userId !== user._id.toString()) {
    return next(createError(403, "you  delete only your account"));
  }

  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};
