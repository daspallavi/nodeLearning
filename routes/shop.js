const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('from shop.js', adminData.products);
  const products = adminData.products;
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  //nodejs method render used to render template shop.pud. extension is not needed to mention as in app.js
  // default template engine is already set in global configuration app.set()
  // render method also helps to send data attached to it in form of object to set in synamic content
  // these data will be available in shop.pug file
  res.render('shop', { prods: products, docTitle: 'Shop' })
});

module.exports = router;
