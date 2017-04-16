var express = require('express'),
router = express.Router();

router.get("/", function(req, res) {
  res.render('index');
});

router.get("/admin", function(req, res) {
  res.render('admin');
});

router.get("/create-post", function(req, res) {
  res.render('create-post')
});
router.use('/users', require('./routes/users'));

router.get('/partials/:template', function(request, response) {
  response.render('partials/' + request.params.template);
});

module.exports = router;
