const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const hiringManagerInfoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide your name"],
      unique: [true, "name must be unique"],
      minLength: [3, "name must be at list 3 characters"],
      maxLength: [100, "name is to long"],
    },

    email: {
      type: String,
      validate: [validator.isEmail, "please provide a valid email"],
      lowercase: true,
      unique: [true, "name must be unique"],
    },

    contactNumber: {
      type: Number,
      required: [true, "please provide your Contact Number"],
      unique: [true, "name must be unique"],
    },

    jobPosts: [
      {
        type: ObjectId,
        ref: "jobPost",
      },
    ],
  },

  {
    timestamps: true,
  }
);

const hiringManagerInfo = mongoose.model(
  "hiringManagerInfo",
  hiringManagerInfoSchema
);
module.exports = hiringManagerInfo;
