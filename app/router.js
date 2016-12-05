import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('list', function() {
    this.route('results', { path: ':term'});
  });

  this.route('bens-favorites', function() {
    this.route('favorites', { path: ':term'});
  });
  this.route('results');
  this.route('search');
});

export default Router;
