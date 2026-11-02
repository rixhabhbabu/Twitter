import User from "../models/User.model.js";

export const loadCurrentUser = async (req, res, next) => {
  res.locals.currentUser = null;

  if (!req.session.userId) {
    return next();
  }

  try {
    const user = await User.findById(req.session.userId)
      .select("displayName username profilePicture")
      .lean();

    if (!user) {
      delete req.session.userId;
    }
    res.locals.currentUser = user;
    return next();
  } catch (error) {
    return next(error);
  }
};

export const isLoggedIn = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }

  req.flash("error", "Please log in to continue.");
  return res.redirect("/login");
};

export const isGuest = (req, res, next) => {
  if (!req.session.userId) {
    return next();
  }

  return res.redirect("/");
};
