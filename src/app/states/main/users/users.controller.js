(function() {
  'use strict';

  angular
    .module('wud.techtest')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController($uibModal,UserService) {
    var vm = this;

    vm.errorGetUsers = false;
    vm.Open = Open;

	LoadUsers();

  //DRB: function to load list users
	function LoadUsers() {
	   UserService.getUsers().then(function(users){
		  vm.errorGetUsers = false;
		  if(users && users.data){
			vm.usersList = users.data;
		  }
		}, function(){
		  vm.errorGetUsers = true;
		});
	}


   function Open() {
     $uibModal.open({
       templateUrl: 'app/states/main/users/modal.html',
       controller : 'ModalInstanceController',
       controllerAs: 'users',
       resolve: {
         usersList : function(){
           return vm.usersList;
         }
       }
     });

   }
 }

})();
