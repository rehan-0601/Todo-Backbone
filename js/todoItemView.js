/**
 * Created by rmulla on 5/13/17.
 */
var TodoItemView = Backbone.View.extend({
	tagName: "li",

	initialize: function(options){
		if (!(options && options.model)){
			throw new Error("Model is not specified.");
		}

		this.model.on("change", this.render, this);
	},

	events: {
		"click #toggle": "onToggleClick",
		"click #delete": "onClickDelete"
	},

	onClickDelete: function(){
		this.model.destroy();
	},

	onToggleClick: function(){
		this.model.toggle();
		this.model.save();
	},

	render: function(){
		this.$el.attr("id", this.model.get("id"));
		this.$el.toggleClass("completed", this.model.get("completed"));
		var checked = this.model.get("completed")? "checked":"";
		//use escape here to prevent cross site scripting attack from user input in the text box
		this.$el.html("<input id='toggle' type='checkbox'" + checked +"></input>");
		this.$el.append(this.model.escape("title") + "<button id='delete'>Delete</button>");

		return this;
	}
});
