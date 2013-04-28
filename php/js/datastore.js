'use strict';

App.Store = DS.Store.extend({
	revision: 11,
	adapter: 'App.LSAdapter'
});

App.LSAdapter = DS.LSAdapter.extend({
	namespace: 'sharpgtd'
});


