import Ember from 'ember';

export default Ember.Controller.extend({
  valueChanged: Ember.observer('username', 'password', function() {
    this.set('errorMessage', false);
  }),

  actions: {
    login: function() {
      var username = this.get('username');
      var password = this.get('password');

      if (username === 'letme' && password === 'in') {
        this.transitionToRoute('home');
      } else {
        this.set('errorMessage', 'Wrong username or password');
      }
    }
  }
});
