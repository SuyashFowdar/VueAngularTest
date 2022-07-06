angular.module('MyApp').component('item1', {
    templateUrl: 'todo1/item/item.html',
    controller: 'ItemCtrl1',
    controllerAs: 'vm',
    bindings: {
        todo: '=',
        index: '='
    }
});