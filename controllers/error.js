
const express = require('express');
const router = express.Router();

exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
}

exports.routes = router;
