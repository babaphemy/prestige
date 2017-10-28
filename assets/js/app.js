var app = angular.module('app', ['ngCookies','angularUtils.directives.dirPagination','ui.router','ui.bootstrap','ngStorage','ngSanitize','ngNotify']);
app.config(function($stateProvider, $urlRouterProvider){
   // $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl:'tpl/home.html'

        })
        .state('about', {
            url:'/about',
            templateUrl:'tpl/about.html'
        })
        .state('team', {
            url:'/team',
            templateUrl:'tpl/team.html'
        })

        .state('contact', {
            url:'/contact',
            templateUrl:'tpl/contact.html',
            controller:'contactCon',
            controllerAs:'vm'
        })
        .state('products', {
            url:'/products',
            templateUrl:'tpl/products.html',
            param:'type:null'
        })
        .state('blog', {
            url:'/blog',
            templateUrl:'tpl/blog.html'
        })

    ;
    $urlRouterProvider.otherwise('/home');
})
    .run(function ($state,$rootScope) {
        $rootScope.$state = $state;
    })
    /*.config(function(ezfbProvider) {
        // Set up FB
        ezfbProvider.setLocale('en_US');
        ezfbProvider.setInitParams({
            appId: 443958898978645 // My FB APP ID
        });
    })*/


.run(['$rootScope', '$location', '$cookieStore', '$http',
        function ($rootScope, $location, $cookieStore, $http) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in
              //  if ($location.path() != '/home' && !$rootScope.globals.currentUser) {
                   // $location.path('/home');
               // }
            });
        }]);
