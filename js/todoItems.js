/**
 * Created by rmulla on 5/13/17.
 */
var TodoItems = Backbone.Collection.extend({
	model: TodoItem,
	url: "http://jsonplaceholder.typicode.com/todos"
});