'use strict';

angular.module('rationalecapApp')
  .controller('LabelModalController', function($scope, $element, close, label, edit) {

    $scope.label = label ? label : '';
    $scope.edit = edit;

    $scope.close = function(form) {
      $element.modal('hide');
      close($scope.label, 500); // close, but give 500ms for bootstrap to animate
    };

    $scope.delete = function(form) {
      $element.modal('hide');
      close('delete', 500); // close, but give 500ms for bootstrap to animate
    };

    $scope.cancel = function(form) {
      $element.modal('hide');
      close(undefined, 500); // close, but give 500ms for bootstrap to animate
    };

  });