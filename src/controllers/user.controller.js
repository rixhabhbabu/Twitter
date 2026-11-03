import User from "../models/User.model.js";

const publicProfileFields =
  "displayName username bio dateOfBirth location website profilePicture coverPicture createdAt";
const editableProfileFields =
  "displayName username bio dateOfBirth location website";

export const redirectToMyProfile = (req, res) => {
  return res.redirect(`/user/${res.locals.currentUser.username}`);
};

export const showProfile = async (req, res, next) => {
  try {
    const username = req.params.username.trim().toLowerCase();
    const profileUser = await User.findOne({ username })
      .select(publicProfileFields)
      .lean();

    if (!profileUser) {
      return res.status(404).render("error/404", { url: req.originalUrl });
    }

    return res.render("profile/profile", {
      title: `${profileUser.displayName}'s profile`,
      profileUser,
    });
  } catch (error) {
    return next(error);
  }
};

export const showEditProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.userId)
      .select(editableProfileFields)
      .lean();

    if (!user) {
      req.flash("error", "Please log in to edit your profile.");
      return res.redirect("/login");
    }

    return res.render("profile/edit-profile", {
      title: "Edit profile",
      user,
    });
  } catch (error) {
    return next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      req.flash("error", "Please log in to edit your profile.");
      return res.redirect("/login");
    }

    const displayName =
      typeof req.body.displayName === "string"
        ? req.body.displayName.trim()
        : "";
    const username =
      typeof req.body.username === "string"
        ? req.body.username.trim().toLowerCase()
        : "";
    const bio = typeof req.body.bio === "string" ? req.body.bio.trim() : "";
    const location =
      typeof req.body.location === "string" ? req.body.location.trim() : "";
    const website =
      typeof req.body.website === "string" ? req.body.website.trim() : "";
    const dateOfBirth = req.body.dateOfBirth
      ? new Date(req.body.dateOfBirth)
      : null;

    if (!displayName || !username) {
      req.flash("error", "Display name and username are required.");
      return res.redirect("/profile/edit");
    }

    if (req.body.dateOfBirth && Number.isNaN(dateOfBirth.getTime())) {
      req.flash("error", "Enter a valid date of birth.");
      return res.redirect("/profile/edit");
    }

    if (website) {
      let parsedWebsite;
      try {
        parsedWebsite = new URL(website);
      } catch {
        req.flash("error", "Enter a valid website URL including https://.");
        return res.redirect("/profile/edit");
      }
      if (!["http:", "https:"].includes(parsedWebsite.protocol)) {
        req.flash("error", "Website must start with http:// or https://.");
        return res.redirect("/profile/edit");
      }
    }

    const usernameInUse = await User.exists({
      username,
      _id: { $ne: user._id },
    });
    if (usernameInUse) {
      req.flash("error", "That username is already in use.");
      return res.redirect("/profile/edit");
    }

    user.displayName = displayName;
    user.username = username;
    user.bio = bio;
    user.dateOfBirth = dateOfBirth;
    user.location = location;
    user.website = website;

    await user.save();
    req.flash("success", "Your profile has been updated.");
    return res.redirect(`/user/${user.username}`);
  } catch (error) {
    if (error.code === 11000) {
      req.flash("error", "That username is already in use.");
      return res.redirect("/profile/edit");
    }
    if (error.name === "ValidationError") {
      req.flash("error", "Please check the profile details and try again.");
      return res.redirect("/profile/edit");
    }
    return next(error);
  }
};
