var angular = require('angular');

angular.module('fswd.blog', [])
  .config(function($routeProvider) {
    $routeProvider.when("/", {
        controller: "blogController",
        controllerAs: "vm",
        templateURL: "/index"
    })  
  })
  .controller("blogController", function(blogService) {
    var self = this;
    blogService.retrieveBlogList().then(function(blogs) {
      self.blogList = blogs
    })
  })
  .service("blogService", function($http) {
    this.retrieveBlogList = function() {
      return $http.get('/blogs')
        .then(function(response) {
          return response.data
        })
    }
  })



module.exports = angular.module('fswd.blog');
