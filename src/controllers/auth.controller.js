import User from "../models/User.model.js";

const regenerateSession = (req) =>
  new Promise((resolve, reject) => {
    req.session.regenerate((error) => (error ? reject(error) : resolve()));
  });

export const showRegister = (req, res) => {
  res.render("auth/register", {
    title: "Create your account",
    activeAuthTab: "register",
  });
};

export const register = async (req, res, next) => {
  try {
    const displayName = req.body.displayName?.trim();
    const username = req.body.username?.trim().toLowerCase();
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (!displayName || !username || !email || !password || !confirmPassword) {
      req.flash("error", "Please fill in every required field.");
      return res.redirect("/register");
    }
    if (password.length < 8) {
      req.flash("error", "Password must be at least 8 characters long.");
      return res.redirect("/register");
    }
    if (password !== confirmPassword) {
      req.flash("error", "The passwords do not match.");
      return res.redirect("/register");
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    }).lean();

    if (existingUser) {
      req.flash(
        "error",
        existingUser.email === email && existingUser.username === username
          ? "That email and username are already in use."
          : existingUser.email === email
            ? "That email is already in use."
            : "That username is already in use.",
      );
      return res.redirect("/register");
    }

    const user = await User.create({ displayName, username, email, password });
    await regenerateSession(req);
    req.session.userId = user._id.toString();
    req.flash("success", "Your account has been created.");
    return res.redirect("/");
  } catch (error) {
    if (error.code === 11000) {
      req.flash("error", "That email or username is already in use.");
      return res.redirect("/register");
    }
    if (error.name === "ValidationError") {
      req.flash("error", "Please check your name, username, email, and password.");
      return res.redirect("/register");
    }
    return next(error);
  }
};

export const showLogin = (req, res) => {
  res.render("auth/login", { title: "Log in", activeAuthTab: "login" });
};

export const login = async (req, res, next) => {
  try {
    const identifier = req.body.identifier?.trim().toLowerCase();
    const password = req.body.password;

    if (!identifier || !password) {
      req.flash("error", "Enter your email or username and password.");
      return res.redirect("/login");
    }

    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      req.flash("error", "The email/username or password is incorrect.");
      return res.redirect("/login");
    }

    await regenerateSession(req);
    req.session.userId = user._id.toString();
    req.flash("success", "You are now logged in.");
    return res.redirect("/");
  } catch (error) {
    return next(error);
  }
};

export const logout = (req, res, next) => {
  req.session.destroy((error) => {
    if (error) return next(error);
    res.clearCookie("connect.sid");
    return res.redirect("/login");
  });
};
