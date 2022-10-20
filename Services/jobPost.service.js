const jobPost = require("../Models/jobPost");
const HiringManagerInfo = require("../Models/HiringManagerInfo");
const { json } = require("express");

const ObjectId = require("mongodb").ObjectId;
exports.createJobPostService = async (data) => {
  const result = await jobPost.create(data);

  const { _id: jobPostId, hiringManagers } = result;

  console.log(hiringManagers.id);

  const res = await HiringManagerInfo.updateOne(
    { _id: hiringManagers.id },
    { $push: { jobPosts: jobPostId } }
  );

  return { result, res };
};

exports.getJobPostService = async (query) => {
  const result = await jobPost.find(query);
  return result;
};

exports.getJobPostByIdService = async (id) => {
  const result = await jobPost.findById(id).populate("applierInfo");
  return result;
};

exports.patchJobPostByIdService = async (jopPostId, patchData) => {
  const result = await jobPost.updateOne(
    { _id: jopPostId },
    { $set: patchData },
    { runValidators: true }
  );
  return result;
};

exports.patchJobPostApplyByIdService = async (jopPostId, patchData) => {
  const query = { _id: ObjectId(jopPostId) };
  const applierInfo = await jobPost.find(query);

  // const compareApplierId = JSON.stringify(applierInfo[0].applierInfo[0]);

  const loopData = applierInfo[0].applierInfo;

  for (const loop of loopData) {
    console.log(JSON.stringify(loop) === JSON.stringify(patchData));
    if (JSON.stringify(loop) === JSON.stringify(patchData)) {
      return "You already apply this post";
    }
  }

  const result = await jobPost.updateOne(
    { _id: jopPostId },
    { $push: { applierInfo: patchData } },
    { runValidators: true }
  );
  return { result, applierInfo };
};
