angular.module('MyApp', ['ui.router']);

Vue.setComponent = function(component) {
    Vue.component(component.name, function(resolve) {
        $.get(component.templateUrl).done(function(template) {
            component.template = template;
            resolve(component);
        });
    });
}