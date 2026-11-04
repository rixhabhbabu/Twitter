import User from "../models/User.model.js";
import {
  deleteImage,
  removeLocalFile,
  uploadImage,
} from "../services/cloudinary.service.js";

export const updateProfileImages = async (req, res, next) => {
  const avatar = req.files?.profilePicture?.[0];
  const cover = req.files?.coverPicture?.[0];

  let oldAvatarId = "";
  let oldCoverId = "";
  let newAvatar = null;
  let newCover = null;
  let userSaveCompleted = false;

  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      req.flash("error", "Please log in first.");
      return res.redirect("/login");
    }

    if (!avatar && !cover) {
      req.flash("error", "Choose a profile picture or a cover picture first.");
      return res.redirect("/profile/edit");
    }

    if (avatar) {
      oldAvatarId = user.profilePicture?.publicId ?? "";
      newAvatar = await uploadImage(avatar.path, {
        folder: "app/avatars",
        transformation: [
          { width: 400, height: 400, crop: "fill", gravity: "face" },
          { quality: "auto", fetch_format: "auto" },
        ],
      });
      user.profilePicture = newAvatar;
    }

    if (cover) {
      oldCoverId = user.coverPicture?.publicId ?? "";
      newCover = await uploadImage(cover.path, {
        folder: "app/covers",
        transformation: [
          { width: 1500, height: 500, crop: "fill" },
          { quality: "auto", fetch_format: "auto" },
        ],
      });
      user.coverPicture = newCover;
    }

    await user.save();
    userSaveCompleted = true;

    if (avatar) await deleteImage(oldAvatarId);
    if (cover) await deleteImage(oldCoverId);

    req.flash("success", "Your images have been updated.");
    return res.redirect(`/user/${user.username}`);
  } catch (error) {
    if (!userSaveCompleted) {
      await Promise.all([
        deleteImage(newAvatar?.publicId),
        deleteImage(newCover?.publicId),
      ]);
    }
    return next(error);
  } finally {
    await Promise.all([
      removeLocalFile(avatar?.path),
      removeLocalFile(cover?.path),
    ]);
  }
};
