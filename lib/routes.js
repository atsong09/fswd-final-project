var express = require('express'),
router = express.Router(),
Blog = require('./../models').Blog;

router.get("/", function(req, res) {
  res.render('index');
});

router.get("/admin", function(req, res) {
  res.render('admin');
});

router.get("/blogs", function(req, res) {
  Blog.findAll().then(function(blogs) {
    res.format({
      html: function() {
        res.redirect('/')
      },
      json: function() {
        return res.json(blogs)
      }
    })
  })
});

router.use('/users', require('./routes/users'));

router.use('/create-blog', require('./routes/create-blog'));

router.get('/partials/:template', function(request, response) {
  response.render('partials/' + request.params.template);
});

module.exports = router;
