# angularjs-flash-message
An Angularjs module for flash messages

##Example
####HTML
```html
<form>
	<div class="form-group">
		<label>Class (".active" makes it appear)</label>
		<input class="form-control" ng-model="fm.class" type="text" style="display:block;" />
	</div>
	<div class="form-group">
		<label>Content</label>
		<textarea class="form-control" ng-model="fm.content" style="display:block;"></textarea>
	</div>
	<div class="form-group">
		<label>Button 1 text</label>
		<input class="form-control" ng-model="fm.button_1_text" type="text" style="display:block;" />
	</div>
	<div class="form-group">
		<label>Button 1 class</label>
		<input class="form-control" ng-model="fm.button_1_class" type="text" style="display:block;" />
	</div>
	<div class="form-group">
		<label>Button 2 text</label>
		<input class="form-control" ng-model="fm.button_2_text" type="text" style="display:block;" />
	</div>
	<div class="form-group">
		<label>Button 2 class</label>
		<input class="form-control" ng-model="fm.button_2_class" type="text" style="display:block;" />
	</div>
	<label style="display:block;">(There is also button_1_click and button_2_click, but for security, nope, not going to happen)</label>
	<br />
	<button class="btn btn-primary" ng-click="flash_message.set(fm)">Try it</button>
</form>
<flash-message></flash-message>
```
####Javascript
```javascript
angular.module('st4rtApp',[
	'flashmessage'
]);
```

##Options
* ___class___ - A class to add to the message container. "active" is what activates the message.
* ___content___ - The text content of the message. In the near future, html will be supported.
* ___button_1_text___ - The text of the first button. Default "Ok".
* ___button_1_click___ - The function for the first button. Default "function(){object.close();}".
* ___button_1_class___ - The class for the first button. Default "".
* ___button_2_text___ - The text of the second button. Default "Cancel".
* ___button_2_click___ - The function for the second button. Default "function(){object.close();}".
* ___button_2_class___ - The class for the second button. Default "hidden".

##Methods
* ___.set(data)___ - "data" is the options above.
* ___.close()___ - Closes the flash message.

##Use
* ___Bower___ - ckc-angular-flash-message
* Add "flash_message" to your app's dependencies
* Add "flash_message.js" and "flash_message.css" to you scripts/css

##Todo
* Add the ability to have html in the content option
