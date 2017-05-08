angular.module('item')
.component('itemShowArchive', {
	templateUrl : 'app/item/itemShowArchive/itemShowArchive.component.html',
	controller: function(itemService, $routeParams, $location){
		var vm = this;
		
		if (!vm.item && parseInt($routeParams.id)) {
			itemService.show($routeParams.id)
			.then(function(response){
				vm.item = response.data;
			})
			.catch(function(error){
			    $location.path('/notfound');
			})
		};
		
		vm.goBackToArchiveList = function(){
		    $location.path('/archive');

		};
		
		
		vm.retireItem = function(){
			
				itemService.returnItem(vm.item).then(function(res){
					vm.goBackToArchiveList();
				});
			
		}
		
		vm.deleteItem = function(){
			itemService.destroy(vm.item).then(function(res){
				vm.goBackToArchiveList();
			});
		}
		
	},
	controllerAs: 'vm'
})
	