angular.module('MyApp').controller('HomeCtrl', HomeCtrl);

function HomeCtrl() {
    var vm = this;
    vm.x = 'Welcome to the To-Do App!';
}