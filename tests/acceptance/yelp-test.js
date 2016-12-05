import { test } from 'qunit';
import moduleForAcceptance from 'search-berkeley/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | yelp');


test('visiting /list verifies that search bar exists', function(assert) {
  visit('/list');

  andThen(function() {
    assert.equal(find('.form-control').length, 1);
  });
});

test('visiting / redirects to /list on page load', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/list');
  });
});

test('visiting /list/tacos shows 16 restaurant results in list, using .length paramater', function(assert) {
  visit('/list/tacos');

  andThen(function() {
    assert.equal(find('.tiny').length, 16);
  });
});
