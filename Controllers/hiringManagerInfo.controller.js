const {
  createhiringManagerInfoService,
  gethiringManagerInfoService,
  gethiringManagerInfoByIdService,
} = require("../Services/hiringManagerInfo.service");

exports.createHiringManagerInfo = async (req, res, next) => {
  try {
    const result = await createhiringManagerInfoService(req.body);

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

exports.getHiringManagerInfo = async (req, res, next) => {
  try {
    // const email2 = req.user?.email;

    const result = await gethiringManagerInfoService();

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

exports.getHiringManagerInfoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await gethiringManagerInfoByIdService(id);
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
