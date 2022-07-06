angular.module('MyApp').component('item', {
    templateUrl: 'todo/item/item.html',
    controller: 'ItemCtrl',
    controllerAs: 'vm',
    bindings: {
        todo: '=',
        index: '='
    }
});