app.controller('customerCtrl', function($scope, $http) {
  $http.get('customersModel.json')
       .then(function(res){
          $scope.customersModel = res.data;                
        });
});