'use strict';

eventsApp.controller('EventController', function($scope) {
  $scope.event = {
    name: 'Angular Boot Camp',
    date: '1/3/2016',
    time: '3:59 pm',
    location: {
      address: 'Google Headquarters',
      city: 'Mountain View',
      province: 'CA'
    },
    imageUrl: 'img/angularjs-logo.png'
  }
});