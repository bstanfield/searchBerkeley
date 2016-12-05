import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('not-berkeley', 'Integration | Component | not berkeley', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{not-berkeley}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#not-berkeley}}
      template block text
    {{/not-berkeley}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
