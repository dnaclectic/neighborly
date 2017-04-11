'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userSchema = require('../../models/userSchema');

var _userSchema2 = _interopRequireDefault(_userSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.route('/usercheck').post(function (req, res, next) {
  _userSchema2.default.findOne({
    name: req.body.name.toLowerCase()
  }, function (err, user) {
    if (err) next(err);
    if (!user) {
      res.json({ userfound: false });
    } else if (user) {
      res.json({ userfound: true });
    }
  });
});

module.exports = router;