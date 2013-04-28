'use strict';

App.TaskController = Ember.ObjectController.extend({
	isEditing: false,

	editTask: function () {
		this.set('isEditing', true);
	},

	removeTask: function () {
		var todo = this.get('model');

		todo.deleteRecord();
		todo.get('store').commit();
	}
});
