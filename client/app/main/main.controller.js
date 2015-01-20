'use strict';

angular.module('animeGeniusApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.medias = [];

    $http.get('/api/medias')
      .success(function (medias) {
        $scope.doug = medias;
        angular.forEach(medias, function (media) {
          $scope.medias.push(media);
        });
      })
      .error(function (err) {
        console.log(err);
      });

    $scope.addThing = function () {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', {
        name: $scope.newThing
      });
      $scope.newThing = '';
    };

    $scope.deleteThing = function (thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });