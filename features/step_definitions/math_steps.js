const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Steps for cucumbers
Given('I have {int} cucumbers', function (quantity) {
  // Set the initial number of cucumbers
  this.cucumbers = quantity;
});

When('I eat {int} cucumbers', function (quantity) {
  // Subtract the eaten cucumbers from the total
  this.cucumbers -= quantity;
});

Then('I have {int} cucumber', function (quantity) {
  // Assert the remaining number of cucumbers
  assert.strictEqual(this.cucumbers, quantity);
});

// Steps for carrots
Given('I have {int} carrots', function (quantity) {
  // Set the initial number of carrots
  this.carrots = quantity;
});

When('I eat {int} carrots', function (quantity) {
  // Subtract the eaten carrots from the total
  this.carrots -= quantity;
});

// Combined steps for making a salad
Given('I have {int} cucumbers and {int} carrots', function (cucumberQty, carrotQty) {
  // Set the initial number of cucumbers and carrots
  this.cucumbers = cucumberQty;
  this.carrots = carrotQty;
});

When('I make a salad with {int} cucumbers and {int} carrots', function (cucumberQty, carrotQty) {
  // Subtract the used cucumbers and carrots for the salad
  this.cucumbers -= cucumberQty;
  this.carrots -= carrotQty;
  // Set the number of salads made
  this.salads = 1;
});

Then('I have {int} cucumbers left', function (quantity) {
  // Assert the remaining number of cucumbers
  assert.strictEqual(this.cucumbers, quantity);
});

Then('I have {int} carrots left', function (quantity) {
  // Assert the remaining number of carrots
  assert.strictEqual(this.carrots, quantity);
});

Then('I have {int} salads', function (quantity) {
  // Assert the number of salads made
  assert.strictEqual(this.salads, quantity);
});
