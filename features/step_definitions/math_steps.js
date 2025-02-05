const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Steps for cucumbers
Given('I have {int} cucumbers', function (quantity) {
  this.cucumbers = quantity;
});

When('I eat {int} cucumbers', function (quantity) {
  this.cucumbers -= quantity;
});

Then('I have {int} cucumber', function (quantity) {
  assert.strictEqual(this.cucumbers, quantity);
});

// Steps for carrots
Given('I have {int} carrots', function (quantity) {
  this.carrots = quantity;
});

When('I eat {int} carrots', function (quantity) {
  this.carrots -= quantity;
});


// Combined steps for making a salad
Given('I have {int} cucumbers and {int} carrots', function (cucumberQty, carrotQty) {
  this.cucumbers = cucumberQty;
  this.carrots = carrotQty;
});

When('I make a salad with {int} cucumbers and {int} carrots', function (cucumberQty, carrotQty) {
  this.cucumbers -= cucumberQty;
  this.carrots -= carrotQty;
  this.salads = 1;
});

Then('I have {int} cucumbers left', function (quantity) {
  assert.strictEqual(this.cucumbers, quantity);
});

Then('I have {int} carrots left', function (quantity) {
  assert.strictEqual(this.carrots, quantity);
});

Then('I have {int} salads', function (quantity) {
  assert.strictEqual(this.salads, quantity);
});
