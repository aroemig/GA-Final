import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	name: attr(),
	day: attr(),
	food: attr(),
  	drinks: attr(),
  	location: attr(),
  	neighborhood: attr(),
  	url: attr(),
  	image: attr()

});