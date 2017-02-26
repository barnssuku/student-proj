import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  responseMessage: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    newSignup(){
      const email = this.get('emailAddress');
      const password = this.get('passwordField');
      const passwordAgain = this.get('passwordAgain');

      const newSignup = this.store.createRecord('signup', {
        emailAddress: email,
        passwordField: password,
        passwordAgain: passwordAgain
      });
      newSignup.save().then((response) => {
        this.set('responseMessage', 'Thank you for registering with Classic Tutorials. Go ahead a login using the login menu above.');
        this.set('emailAddress', '');
        this.set('passwordField', '');
        this.set('passwordAgain', '');
      });

    }
  }
});
