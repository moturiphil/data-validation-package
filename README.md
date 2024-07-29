# Data Validator

A simple and flexible data validation library for JavaScript.

## Installation

```sh
npm install data-validator


# Usage

const Validator = require('data-validator');

const validator = new Validator();

const rules = {
  name: 'required|string',
  age: 'required|number|min:18',
  email: 'required|email',
};

const data = {
  name: 'John Doe',
  age: 25,
  email: 'john@example.com',
};

const result = validator.validate(rules, data);

if (result.valid) {
  console.log('Validation passed');
} else {
  console.log('Validation failed', result.errors);
}
