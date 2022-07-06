angular.module('MyApp').controller('ItemCtrl', ItemCtrl);

/*@ngInject*/
function ItemCtrl($scope) {
    var vm = this;
    vm.toggleEdit = toggleEdit;
    vm.deleteItem = deleteItem;

    function toggleEdit() {
        $scope.$emit('toggleEdit', vm.index);
    }

    function deleteItem() {
        $scope.$emit('deleteItem', vm.index);
    }
}