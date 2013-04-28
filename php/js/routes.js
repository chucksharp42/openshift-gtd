'use strict';

App.Router.map(function() {
  this.resource('tasks');
});

App.Router.map(function () {
	this.resource('tasks', { path: '/' }, function () {
		this.route('active');
		this.route('completed');
	});
});

App.TasksRoute = Ember.Route.extend({
	model: function () {
		return App.Task.find();
	}
});

App.TasksIndexRoute = Ember.Route.extend({
	setupController: function () {
		var tasks = App.Task.find();
		this.controllerFor('tasks').set('filteredApp', tasks);
	}
});

App.TasksActiveRoute = Ember.Route.extend({
	setupController: function () {
		var tasks = App.Task.filter(function (task) {
			if (!task.get('isCompleted')) {
				return true;
			}
		});

		this.controllerFor('tasks').set('filteredApp', tasks);
	}
});

App.TasksCompletedRoute = Ember.Route.extend({
	setupController: function () {
		var tasks = App.Task.filter(function (task) {
			if (task.get('isCompleted')) {
				return true;
			}
		});

		this.controllerFor('tasks').set('filteredApp', tasks);
	}
});
