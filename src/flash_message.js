'use strict';
angular.module('flashmessage',[])
.service("flash_message", ['$rootScope', '$timeout', function ($rootScope, $timeout) {
	var object = {};
	var defaults = {
		"class":"",
		"content":"",
		"button_1_text":"Ok",
		"button_2_text":"Cancel",
		"button_1_click":function(){object.close();},
		"button_2_click":function(){object.close()},
		"button_1_class":"",
		"button_2_class":"hidden"
	};
	object.message = {};

	for(var p in defaults){
		object.message[p] = defaults[p];
	}
	
	var t = null;
	var triedApply = 0;

	function runApply(){
		$timeout.cancel(t);
		return tryApply();
	}

	function tryApply(){
		var phase = $rootScope.$root.$$phase;
		if((phase == '$apply' || phase == '$digest') && triedApply < 100){
			triedApply++;
			t = $timeout(function(){runApply();}, 100);
		}else if(triedApply < 100){
			triedApply = 0;
			$rootScope.$apply();
			return object;
		}
	}

	object.set = function (data) {
		for(var p in data){
			if(object.message.hasOwnProperty(p)){
				object.message[p] = data[p];
			}
		}
		console.log(object);
		return runApply();
	};

	object.close = function(){
		console.log(defaults)
		return object.set(defaults);
	};

	return object;
}])

.directive('flashMessage', function(){
	return {
		restrict: 'E',
		controller: ['$scope', '$element', 'flash_message', function($scope, $element, flash_message){
			$scope.flash_message = flash_message;
		}],
		template:'<div id="flash-message" class="{{flash_message.message.class}}">'+
			'<div id="flash-message-outer"><div id="flash-message-inner"><div id="flash-message-section">'+
				'<div id="flash-message-content" ng-bind="flash_message.message.content"></div>'+
				'<div id="flash-message-buttons">'+
					'<button flash-message-button-1 id="flash-message-button-1" ng-click="flash_message.message.button_1_click()" class="{{flash_message.message.button_1_class}}" ng-bind-html="flash_message.message.button_1_text">Ok</button>'+
					'<button flash-message-button-2 id="flash-message-button-2" ng-click="flash_message.message.button_2_click()" class="{{flash_message.message.button_2_class}}" ng-bind-html="flash_message.message.button_2_text">Cancel</button>'+
				'</div>'+
			'</div></div></div>'+
		'</div>',
		link:function(scope,elm,attr){}
	};
})
; 
