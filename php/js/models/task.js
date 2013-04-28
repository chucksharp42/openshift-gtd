'use strict';

App.Task = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),

	taskDidChange: function () {
		Ember.run.once(this, function () {
			this.get('store').commit();
		});
	}.observes('isCompleted', 'title')
});


