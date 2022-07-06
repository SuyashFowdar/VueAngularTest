angular.module('MyApp').controller('TodoCtrl2', TodoCtrl2);

/*@ngInject*/
function TodoCtrl2($scope) {
    setTimeout(function () {
        var todo = new Vue({
            el: ('#todo'),
            data: function() {
                return {
                    todos: ['Learn AngularJS', 'Have lunch', 'Have Dinner'],
                    selectedIndex: null,
                    newTodo: ''
                }
            },
            created: function() {
                console.log('Created Todo!');
            },
            methods: {
                toggleEdit: function(index) {
                    var vm = this;
                    vm.selectedIndex = index;
                    vm.newTodo = angular.copy(vm.todos[index]);
                },
                deleteItem: function(index) {
                    var vm = this;
                    vm.todos.splice(index, 1);
                },
                submit: function(e) {
                    var vm = this;
                    e.preventDefault();
                    if (vm.selectedIndex === null) {
                        vm.todos.push(vm.newTodo);
                    } else {
                        vm.todos[vm.selectedIndex] = vm.newTodo;
                        vm.selectedIndex = null;
                    }
                    vm.newTodo = '';
                }
            }
        });
    });
}