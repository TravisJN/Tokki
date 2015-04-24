angular.module('tokki', ['ui.router', 'ngFx', 'ngAnimate']);

angular.module('tokki')
  .config(function($stateProvider, $urlRouterProvider) {

  // Routes to the home page.  Default to '/home'
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './views/homeView.html',
      controller: 'LoginController'
    })
    // Routes to the guest session view
    .state('guestSession', {
      url: '/guestSession/:guestId',
      templateUrl: './views/guestSession.html',
      controller: 'GuestController'
    })
    // Routes to the host menu
    .state('hostMenu', {
      url: '/hostMenu',
      templateUrl: './views/hostMenu.html',
      controller: 'LoginController'
    })
    // Routes to the hosts current session
    .state('hostSession', {
      url: '/hostSession',
      templateUrl: './views/hostSession.html',
      controller: 'HostController'
    })
    .state('hostSession.results', {
      //View that shows results of question sent by host
      url: '/results',
      templateUrl: './views/questionResultsView.html',
      controller: 'QuestionResultsController'
    })
    // Routes to the host's history of sessions
    .state('hostHistoryView', {
      url: '/hostHistoryView',
      templateUrl: './views/hostHistoryView.html',
      controller: 'AnalysisController'
    })
    //Routes to the host session analysis
    .state('hostAnalysisView', {
      url: '/hostAnalysisView',
      templateUrl: './views/hostAnalysisView.html',
      controller: 'AnalysisController'
    })
    //Routes to the host login view
    .state('hostLoginView', {
      url: '/hostLogin',
      templateUrl: './views/hostLoginView.html',
      controller: 'AnalysisController'
    })
    //Routes to the host post question view
    .state('questionMenu', {
      url: '/questionMenu',
      templateUrl: './views/questionMenuView.html',
      controller: 'PostQuestionController'
    })
    .state('questionMenu.postQuestion', {
      url: '/postQuestion',
      templateUrl: './views/postQuestionView.html',
      controller: 'PostQuestionController'
    })
    .state('questionMenu.allQuestions', {
      url: '/allQuestions',
      templateUrl: './views/allQuestionsView.html',
      controller: 'AllQuestionsController'
    });

  $urlRouterProvider.otherwise('/home');
});
