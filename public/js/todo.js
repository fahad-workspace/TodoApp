function TodoCtrl($scope) {
    $scope.todos = [
        {text: "Learn AngularJS", done: false},
        {text: "Build and app", done: false}
    ];
    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.formTodoText, done: false});
        $scope.formTodoText = "";
    };
    $scope.totalTodos = function () {
        return $scope.todos.length;
    };
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        })
    };
}