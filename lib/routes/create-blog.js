var express = require('express'),
  router = express.Router(),
  User = require('../../models').User,
  Blog = require('../../models').Blog;

router.get('/', function(req, res) {
  res.render('create-blog')
});

router.post('/', function(req, res) {
  if (!req.user) {
    res.end('Please sign in to a valid username.')
  }
  else {
    req.body.author = req.user.username
    Blog.findOne({where: { title: req.body.title }})
      .then(function(existingTitle) {
        if (existingTitle) {
          res.end('Please use another Title');
        }
        else {
          req.user.createBlog(req.body).then(function() {
            res.redirect('/');
          })
        }
      })
  }
});

module.exports = router;
