angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicModal) {
  $scope.home_timeline = [
    {
      "name":"Adam",
      "screen_name": "adam",
      "profile_image_url":"http://i.pravatar.cc/150?img=50",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus et libero at molestie.",
      "picture": "http://lorempixel.com/400/200/sports/1/",
      "created_at":"November 05, 2016"
    },
    {
      "name":"Ben",
      "screen_name": "ben",
      "profile_image_url":"http://i.pravatar.cc/150?img=51",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus et libero at molestie.",
      "picture": "http://lorempixel.com/400/200/sports/2/",
      "created_at":"November 05, 2016"
    },
    {
      "name":"Max",
      "screen_name": "max",
      "profile_image_url":"http://i.pravatar.cc/150?img=52",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus et libero at molestie.",
      "picture": "http://lorempixel.com/400/200/sports/3/",
      "created_at":"November 05, 2016"
    },
    {
      "name":"Perry",
      "screen_name": "perry",
      "profile_image_url":"http://i.pravatar.cc/150?img=53",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus et libero at molestie.",
      "picture": "http://lorempixel.com/400/200/sports/6/",
      "created_at":"November 05, 2016"
    },
    {
      "name":"Mike",
      "screen_name": "mike",
      "profile_image_url":"http://i.pravatar.cc/150?img=54",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus et libero at molestie.",
      "picture": "http://lorempixel.com/400/200/sports/5/",
      "created_at":"November 05, 2016"
    }
  ];

  $scope.addMessage = function() {
    $ionicModal.fromTemplateUrl('templates/addMessage.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
    // $scope.tweet.message = '';
  };

  $scope.submitMessage = function() {
    $scope.modal.hide();
    console.log('success');
  };
})

.controller('CalendarCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
