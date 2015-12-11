var myApp = angular.module('nymexCapitalApp', 
  [
  'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'home/home.html'
  })
  .state('firm', {
    url: '/firm',
    templateUrl: 'firm/firm.html'
  })
  .state('team', {
    url: '/team',
    templateUrl: 'team/team.html'
  })
  .state('practice', {
    url: '/practice',
    templateUrl: 'practice/practice.html'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'contact/contact.html'
  })

})
.factory('language', function(){
  var isEnglish = true;


  var switchToSpanish = function(){
    isEnglish = false;
  }

  var switchToEnglish = function(){
    isEnglish = true;
  }

  var getIsEnglish = function(){
    return isEnglish;
  }

  return {
    getIsEnglish : getIsEnglish,
    switchToSpanish : switchToSpanish,
    switchToEnglish : switchToEnglish
  }
})
.factory('Animations', function(){
  var slideContactPageDown = function(){
      $( "#contact" ).toggle({duration: 150, });
  }

  return {
    slideContactPageDown : slideContactPageDown
  }

})
.controller('nymexController', ['$scope', 'language', 'Animations', function($scope, language, Animations){
  console.log('what it do');
  $scope.obj = {
    eng : language.getIsEnglish()
  }


  $scope.switchToSpanish = function(){
    language.switchToSpanish();
    $scope.obj.eng = language.getIsEnglish();
  }

  $scope.switchToEnglish = function(){
    language.switchToEnglish();
    $scope.obj.eng = language.getIsEnglish();    
  }

  $scope.slide = Animations.slideContactPageDown
  

}]);