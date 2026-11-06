import Post from "../models/Post.model.js";
import { deleteImage, removeLocalFile, uploadImage } from "../services/cloudinary.service.js";

export const createPost = async (req, res, next) => {
  const files = req.files ?? [];
  const uploadedImages = [];
  try {
    const content = String(req.body.content ?? "").trim();
    const media = [];
    if (!content && !files.length) {
      req.flash("error", "Post mein text ya image add karo.");
      return res.redirect("/");
    }
    if (content.length > 280) {
      req.flash("error", "Post 280 characters se chhoti honi chahiye.");
      return res.redirect("/");
    }
    for (const file of files) {
      const uploadedImage = await uploadImage(file.path, { folder: "app/posts", transformation: [{ width: 1600, height: 1600, crop: "limit" }, { quality: "auto", fetch_format: "auto" }] });
      uploadedImages.push(uploadedImage);
      media.push({ ...uploadedImage, type: "image", source: "cloudinary" });
    }
    await Post.create({ author: req.session.userId, content, media });
    req.flash("success", "Post publish ho gayi.");
    return res.redirect("/");
  } catch (error) {
    await Promise.all(uploadedImages.map((image) => deleteImage(image.publicId)));
    return next(error);
  } finally {
    await Promise.all(files.map((file) => removeLocalFile(file.path)));
  }
};

export const showPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "displayName username profilePicture").lean();
    if (!post) return res.status(404).render("error/404", { url: req.originalUrl });
    return res.render("post/detail", { post });
  } catch (error) { return next(error); }
};

export const showEditPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "displayName username profilePicture");
    if (!post) return res.status(404).render("error/404", { url: req.originalUrl });
    if (post.author._id.toString() !== req.session.userId) {
      req.flash("error", "Sirf apni post edit kar sakte ho.");
      return res.redirect(`/posts/${post.id}`);
    }
    return res.render("post/edit", { post });
  } catch (error) { return next(error); }
};

export const updatePost = async (req, res, next) => {
  const files = req.files ?? [];
  const uploadedImages = [];
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).render("error/404", { url: req.originalUrl });
    if (post.author.toString() !== req.session.userId) {
      req.flash("error", "Sirf apni post edit kar sakte ho.");
      return res.redirect(`/posts/${post.id}`);
    }
    const content = String(req.body.content ?? "").trim();
    if (content.length > 280) {
      req.flash("error", "Post 280 characters se chhoti honi chahiye.");
      return res.redirect(`/posts/${post.id}/edit`);
    }
    const removeMedia = req.body.removeMedia === "true";
    let media = removeMedia ? [] : [...post.media];
    if (media.length + files.length > 4) {
      req.flash("error", "Ek post mein maximum 4 images add kar sakte ho.");
      return res.redirect(`/posts/${post.id}/edit`);
    }
    if (!content && !media.length && !files.length) {
      req.flash("error", "Post mein text ya image hona zaroori hai.");
      return res.redirect(`/posts/${post.id}/edit`);
    }
    for (const file of files) {
      const uploadedImage = await uploadImage(file.path, { folder: "app/posts", transformation: [{ width: 1600, height: 1600, crop: "limit" }, { quality: "auto", fetch_format: "auto" }] });
      uploadedImages.push(uploadedImage);
      media.push({ ...uploadedImage, type: "image", source: "cloudinary" });
    }
    const removedCloudinaryIds = post.media.filter((old) => !media.some((current) => current.publicId && current.publicId === old.publicId)).map((item) => item.publicId);
    post.content = content;
    post.media = media;
    post.isEdited = true;
    post.editedAt = new Date();
    await post.save();
    await Promise.all(removedCloudinaryIds.map(deleteImage));
    req.flash("success", "Post update ho gayi.");
    return res.redirect(`/posts/${post.id}`);
  } catch (error) {
    await Promise.all(uploadedImages.map((image) => deleteImage(image.publicId)));
    return next(error);
  } finally { await Promise.all(files.map((file) => removeLocalFile(file.path))); }
};

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      req.flash("error", "Post nahi mili.");
      return res.redirect("/");
    }
    if (post.author.toString() !== req.session.userId) {
      req.flash("error", "Sirf apni post delete kar sakte ho.");
      return res.redirect(`/posts/${post.id}`);
    }
    await post.deleteOne();
    await Promise.all(post.media.filter((item) => item.source === "cloudinary").map((item) => deleteImage(item.publicId)));
    req.flash("success", "Post delete ho gayi.");
    return res.redirect("/");
  } catch (error) { return next(error); }
};
