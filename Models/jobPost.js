const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const jobPostSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "please provide your company name"],
      unique: [true, "name must be unique"],
      minLength: [3, "company must be at list 3 characters"],
      maxLength: [100, "name is to long"],
    },

    CompanyTitle: {
      type: String,
      required: [true, "please provide your company title"],
    },
    description: {
      type: String,
      required: [true, "please provide a description for this company"],
    },
    CompanyLogoUrl: {
      type: String,
      validate: [validator.isURL, "please provide a valid url"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "please provide a valid email"],
      lowercase: true,
      unique: [true, "name must be unique"],
    },
    website: {
      type: String,
      validate: [validator.isURL, "please provide a valid url"],
    },
    companyContactNumber: {
      type: Number,
      required: [true, "please provide your company Contact Number"],
    },

    location: String,

    jobTitle: {
      type: String,
      required: [true, "please provide job title"],
    },

    positionName: {
      type: String,
      required: [true, "please provide job position name"],
    },

    experience: {
      type: String,
      required: [true, "please provide job experience"],
    },
    skillRequired: [
      {
        type: String,
        required: [true, "please provide job skills Required"],
      },
    ],
    salary: {
      type: Number,
      required: [true, "please provide salary"],
    },
    applierInfo: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],

    hiringManagers: {
      name: {
        type: String,
        // required: true,
      },
      id: {
        type: ObjectId,
        ref: "hiringManagerInfo",
        // required: true,
      },
    },
  },

  {
    timestamps: true,
  }
);

const jobPost = mongoose.model("jobPost", jobPostSchema);
module.exports = jobPost;
