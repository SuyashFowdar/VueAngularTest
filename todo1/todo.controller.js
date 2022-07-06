angular.module('MyApp').controller('TodoCtrl1', TodoCtrl1);

/*@ngInject*/
function TodoCtrl1($scope) {
    var vm = this;
    vm.todos = ['Learn AngularJS', 'Have lunch', 'Have Dinner'];
    vm.selectedIndex = null;
    vm.submit = submit;
    $scope.$on('deleteItem', deleteItem);
    $scope.$on('toggleEdit', toggleEdit);

    function submit() {
        if (vm.selectedIndex === null) {
            vm.todos.push(vm.newTodo);
        } else {
            vm.todos[vm.selectedIndex] = vm.newTodo;
            vm.selectedIndex = null;
        }
        vm.newTodo = '';
    }

    function toggleEdit(e, index) {
        vm.selectedIndex = index;
        vm.newTodo = angular.copy(vm.todos[index]);
        $scope.$apply();
    }

    function deleteItem(e, index) {
        vm.todos.splice(index, 1);
        $scope.$apply();
    }
}