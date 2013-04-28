'use strict';

App.EditTaskView = Ember.TextField.extend({
	classNames: ['edit'],

	valueBinding: 'task.title',

	change: function () {
		var value = this.get('value');

		if (Ember.isEmpty(value)) {
			this.get('controller').removeTask();
		}
	},

	focusOut: function () {
		this.set('controller.isEditing', false);
	},

	insertNewline: function () {
		this.set('controller.isEditing', false);
	},

	didInsertElement: function () {
		this.$().focus();
	}
});

