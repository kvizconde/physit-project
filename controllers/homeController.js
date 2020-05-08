const homeModel = require("../models/homeData");
const loginController = require("../controllers/loginController");

// Get home
exports.getHome = (req, res) => {
  console.log(req.body);
  res.render("home", {
    title: "The Future of Physio",
    homepageJSCSS: true,
    patients: loginController.patientInfo,
  });
};
