(function() {
'use strict';

  angular
    .module('wud.techtest')
    .service('UserService', UserService);

  /** @ngInject */
  function UserService($http) {
    return {
      getUsers: function(){
        return $http.get("http://localhost:8000/users");
      },
      setUser: function(firstname, lastname, email){
        return $http.post("http://localhost:8000/user", {firstname:firstname, lastname:lastname, email:email});
      }
    }
  }

})();
