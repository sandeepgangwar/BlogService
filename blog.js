// Code goes here

;(function(){
  'use strict'
     var blog = angular.module('blog', []);
   blog.controller('MainCtrl',function($scope){
    $scope.posts = [
      {
        "title":"Post A",
        "body":"This is post A",
        "date":"12 Nov 2015",
        "author":"Sandeep"
      },
        {
        "title":"Post B",
        "body":"This is post B",
        "date":"12 Nov 2016",
        "author":"Sandeep Singh"
      },
      ]
  })
  
  
})();