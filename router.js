angular.module('MyApp').config(config);

function config($stateProvider, $urlRouterProvider) {
    const homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
    };

    const todoState = {
        name: 'todo',
        url: '/todo',
        templateUrl: './todo/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'vm'
    };

    const todo1State = {
        name: 'todo1',
        url: '/todo1',
        templateUrl: './todo1/todo.html',
        controller: 'TodoCtrl1',
        controllerAs: 'vm'
    };

    const todo2State = {
        name: 'todo2',
        url: '/todo2',
        templateUrl: './todo2/todo.html',
        controller: 'TodoCtrl2',
        controllerAs: 'vm'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(todoState);
    $stateProvider.state(todo1State);
    $stateProvider.state(todo2State);
    $urlRouterProvider.otherwise('/home');
}