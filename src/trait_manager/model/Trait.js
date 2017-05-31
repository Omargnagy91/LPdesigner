define(function(require, exports, module){
  'use strict';
  var Backbone = require('backbone');

		module.exports = Backbone.Model.extend({

			defaults: {
				type: 'text', // text, number, range, select
				label: '',
				name: '',
				min: '',
				max: '',
				value: '',
				target: '',
				default: '',
				placeholder: '',
				changeProp: 0,
				options: [],
			},

			initialize: function(){
				if (this.get('target')) {
					this.target = this.get('target');
					this.unset('target');
				}
			},

		});
	});