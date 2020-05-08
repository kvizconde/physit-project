module.exports = (req, res, next) => {
	if (!req.session.physioID) return res.redirect('/')

	next()
}
