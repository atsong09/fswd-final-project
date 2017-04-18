var express = require('express'),
router = express.Router();

router.get("/", function(req, res) {
  res.render('index');
});

router.get("/admin", function(req, res) {
  res.render('admin');
});

router.use('/users', require('./routes/users'));

router.use('/create-blog', require('./routes/create-blog'));

router.get('/partials/:template', function(request, response) {
  response.render('partials/' + request.params.template);
});

module.exports = router;
