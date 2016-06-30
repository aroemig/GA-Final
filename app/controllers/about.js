import Ember from 'ember';

export default Ember.Controller.extend({
name:'',
dayOfWeek: '',
food:'',
drinks: '',
location:'',
neighborhood:'',
url:'',
image:'',

actions: {
    save() {
        
   var newVar = this.store.createRecord('rental', {
     	name: this.get('name'),
     	day: this.get('dayOfWeek'),
     	food: this.get('food'), 
     	drinks: this.get('drinks'),
     	location: this.get('location'), 
     	neighborhood: this.get('neighborhood'),
     	url: this.get('url'),
     	image: this.get('image')

     });
        newVar.save()
     this.transitionToRoute('index')
    }
  }

});
