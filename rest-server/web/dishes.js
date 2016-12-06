var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  if (!req.session.manager) {
    return res.redirect('/manager/login');
  }
  res.render('dishes', { title: 'RESTaurant | Dishes' });
});

module.exports = router;