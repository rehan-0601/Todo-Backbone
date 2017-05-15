/**
 * Created by rmulla on 5/13/17.
 */
var TodoItemsView = Backbone.View.extend({
	tagName: "ul",
	id: "todo-items",

	initialize: function(options){
		if(!(options && options.model)) {
			throw new Error("model is not specified");
		}

		this.model.on("add", this.onAddTodoItem, this);
		this.model.on("remove", this.onRemoveTodoItem, this);
	},

	onRemoveTodoItem: function(todoItem){
		this.$("li#"+todoItem.id).remove();

	},

	onAddTodoItem: function(todoItem) {
		var view = new TodoItemView({model: todoItem});
		this.$el.append(view.render().$el);
	},

	events: {
		"click #add": "onClickAdd",
		"keypress #newTodoItem": "onKeyPress"
	},

	onKeyPress: function(e){
		if(e.keyCode == 13){
			this.onClickAdd();
		}
	},

	onClickAdd: function(){
		var $textBox = $("#newTodoItem");

		if ($textBox.val()){
			var todoItem = new TodoItem({title: $textBox.val() });

			this.model.create(todoItem);
			//same as
			// todoItem.save();
			// this.model.add(todoItem);
			$textBox.val("");
		}

	},

	render: function(){
		var that = this;

		this.$el.append("<input autofocus type='text' id='newTodoItem' />");
		this.$el.append("<button id='add'>Add</button>");

		this.model.each(function(todoItem){
			var view = new TodoItemView({model: todoItem});
			that.$el.append(view.render().$el);
		});

		return this;
	}
});
