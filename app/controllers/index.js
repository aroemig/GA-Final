import Ember from 'ember';

export default Ember.Controller.extend({

	model: null,

		dayOfWeek: 'Sunday',	

	barsByDayOfWeek: Ember.computed('model.@each.{day,neighborhood}', 'dayOfWeek', 'hoods', function() {
		return this.get('model').filter((special) => {
			return special.get('day') === this.get('dayOfWeek') && 
				special.get('neighborhood') === this.get('hoods')
		})
	}),
		hoods: 'Wicker Park',	

	actions: {
		dayOfWeekChanged() {
			var newDay = $('#dayOfWeek').val()
			this.set('dayOfWeek', newDay)
		},

		neighborhoodChanged() {
			var newneighborhood = $('#hoods').val()
			this.set('hoods', newneighborhood)
		}
	}

});
