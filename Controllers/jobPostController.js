const {
  createJobPostService,
  getJobPostService,
  patchJobPostByIdService,
  getJobPostByIdService,
  patchJobPostApplyByIdService,
} = require("../Services/jobPost.service");

exports.createjobPost = async (req, res, next) => {
  try {
    const result = await createJobPostService(req.body);

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};

exports.getjobPost = async (req, res, next) => {
  try {
    let queryObjectFilter = { ...req.query };
    const excludeField = ["sort", "page", "limit"];
    excludeField.forEach((field) => delete queryObjectFilter[field]);

    let queries = {};
    // for sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
      console.log(sortBy);
    }

    let filterString = JSON.stringify(queryObjectFilter);
    filterString = filterString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );
    queryObjectFilter = JSON.parse(filterString);

    const result = await getJobPostService(queryObjectFilter, queries);
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};

exports.getjobPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getJobPostByIdService(id);
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};

exports.patchjobPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await patchJobPostByIdService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};

exports.patchjobPostApplyById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const result = await patchJobPostApplyByIdService(id, userId);
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};
