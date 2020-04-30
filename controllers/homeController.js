const homeModel = require("../models/homeData");

// Get home
exports.getHome = (req, res) => {
    res.render('home', {
    title: 'The Future of Physio',
    homepageJSCSS: true,
    });
};