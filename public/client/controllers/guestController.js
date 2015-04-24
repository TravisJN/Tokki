angular.module('tokki')
  .controller('GuestController', ['$scope', '$state', '$stateParams', '$location', 'GuestServices', function($scope, $state, $stateParams, $location, GuestServices) {

  // Rating values and gui state
  $scope.ratings = [
  {value: 5, selected: null},
  {value: 4, selected: null},
  {value: 3, selected: null},
  {value: 2, selected: null},
  {value: 1, selected: null}];

  $scope.answers = [
  {value: 'A', selected: null},
  {value: 'B', selected: null},
  {value: 'C', selected: null},
  {value: 'D', selected: null},
  {value: 'E', selected: null}];

  // Current vote value
  $scope.currRating = null;
  $scope.currAnswer = null;
  var socket = io();

  // Opens Session
  $scope.init = function(sessionId) {
    GuestServices.getSession( sessionId, function(sessionId, data) {
      // Runs on session end

      socket.on('questionForStudent', function(msg){
        console.log('question posted!!', msg);
        $scope.index=msg.index;
      });
      GuestServices.listen( function() {
        $state.go('home', {}, {reload: true});
      });
    });
  };

  // Submits a vote, updates gui
  $scope.vote = function(newRating) {
    for(var i=0; i < $scope.ratings.length; i++){
      $scope.ratings[i].selected = null;
    }
    if($scope.currRating === newRating.value){
      GuestServices.vote(null);
      $scope.currRating = null;
    }else{
      GuestServices.vote(newRating.value);
      $scope.currRating = newRating.value;
      newRating.selected = 'selected';
    }
  };

  // Run init, passing in the session id

  $scope.submitAnswer = function(newAnswer) {
    for(var i=0; i < $scope.answers.length; i++){
      $scope.answers[i].selected = null;
    }

      console.log('answer value,',newAnswer.value );
      GuestServices.submitAnswer([$scope.index,newAnswer.value]);
      $scope.currAnswer= newAnswer.value;
      newAnswer.selected = 'selected';
  };

  $scope.hidePage = function(){
    $scope.show = false;
  };

  $scope.show = true;

  // This will be given before this page loads.
  console.log('$location: ' + $location.path().split('/')[2]);
>>>>>>> development
  $scope.init($location.path().split('/')[2]);
}]);
