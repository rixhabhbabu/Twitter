// import mongoose from 'mongoose'



// const postSchema = new mongoose.Schema({
//     author:{
//         type:,
//         ref:"User"
//     },
//     content: {
//         type:String,
//         maxLength:250
//         default:""
//     },
//     media:{
//         type:
//     },
//     isEdited:Boolean,

// },{})

// const Post = mongoose.model("Post",postSchema)

// Post.pre('validator',)

// export default Post

// src/models/Post.model.js

import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    publicId: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      enum: ["image"],
      default: "image",
    },
    source: {
      type: String,
      enum: ["cloudinary", "external"],
      default: "cloudinary",
    },
  },
  { _id: false }
);

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    content: {
      type: String,
      trim: true,
      maxlength: 280,
      default: "",
    },

    media: {
      type: [mediaSchema],
      validate: {
        validator(media) {
          return media.length <= 4;
        },
        message: "A post can have maximum 4 media items.",
      },
      default: [],
    },

    isEdited: {
      type: Boolean,
      default: false,
    },

    editedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

postSchema.pre("validate", async function () {
  const hasContent = this.content?.trim().length > 0;
  const hasMedia = this.media?.length > 0;

  if (!hasContent && !hasMedia) {
    throw new Error("Post must contain content or media.");
  }
});

postSchema.index({ author: 1, createdAt: -1 });
postSchema.index({ createdAt: -1 });

export default mongoose.model("Post", postSchema);
