const hiringManagerInfo = require("../Models/HiringManagerInfo");
const jobPost = require("../Models/jobPost");

exports.createhiringManagerInfoService = async (data) => {
  const result = await hiringManagerInfo.create(data);
  return result;
};

exports.gethiringManagerInfoService = async () => {
  const result = await hiringManagerInfo.find().populate("jobPosts");
  return result;
};

exports.gethiringManagerInfoByIdService = async (id) => {
  const result = await jobPost.findById(id).populate("applierInfo");
  return result;
};
