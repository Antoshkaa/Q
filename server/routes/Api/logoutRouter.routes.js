const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    req.session.destroy();
    res.json({});
  });

module.exports = router;
