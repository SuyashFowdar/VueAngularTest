angular.module('MyApp').controller('ItemCtrl1', ItemCtrl1);

/*@ngInject*/
function ItemCtrl1($scope) {
    var vm = this;

    setTimeout(function () {
        var item = new Vue({
            el: ('#item' + vm.index),
            data: function() {
                return {
                    todo: vm.todo,
                    index: vm.index
                }
            },
            created: function() {
                console.log('Created Item!');
            },
            methods: {
                deleteItem: function() {
                    deleteItem();
                },
                toggleEdit: function() {
                    toggleEdit();
                }
            }
        });

        // Functions that need to be emitted or have impact on Angular, are put outside
        function toggleEdit() {
            $scope.$emit('toggleEdit', vm.index);
        }

        function deleteItem() {
            $scope.$emit('deleteItem', vm.index);
        }
    });
}