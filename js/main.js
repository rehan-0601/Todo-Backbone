
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

$(document).ready(function(){
	// var todoItem = new TodoItem({ description: "TodoItem1"});
	//
	//
	// var todoItemView = new TodoItemView({model: todoItem});
	// $("body").append(todoItemView.render().$el);

	// var todoItems = new TodoItems([
	// 	new TodoItem({id:1, description: "Todo item1"}),
	// 	new TodoItem({id:2, description: "Todo item2"})
	// ]);

	var todoItems = new TodoItems();
	todoItems.fetch();

	//redundant since we have a listener on collection when models are added.
	// todoItems.fetch({
	// 	sucess: function(){
	// 		var todoItemsView = new TodoItemsView({model: todoItems});
	// 		$("body").append(todoItemsView.render().$el);
	// 	}
	// });

	var todoItemsView = new TodoItemsView({model: todoItems});
	$("body").append(todoItemsView.render().$el);
});