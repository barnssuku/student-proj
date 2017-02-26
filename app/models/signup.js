import DS from 'ember-data';

export default DS.Model.extend({
  emailAddress: DS.attr('string'),
  passwordField: DS.attr('string'),
  passwordAgain: DS.attr('string')
});
