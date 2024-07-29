// index.js
class Validator {
    constructor() {
      this.errors = {};
    }
  
    validate(rules, data) {
      this.errors = {};
      for (let field in rules) {
        const ruleSet = rules[field].split('|');
        ruleSet.forEach((rule) => {
          const [ruleName, ruleValue] = rule.split(':');
          if (!this[ruleName](data[field], ruleValue)) {
            this.addError(field, ruleName);
          }
        });
      }
      return { valid: Object.keys(this.errors).length === 0, errors: this.errors };
    }
  
    required(value) {
      return value !== undefined && value !== null && value !== '';
    }
  
    string(value) {
      return typeof value === 'string';
    }
  
    number(value) {
      return typeof value === 'number';
    }
  
    min(value, minValue) {
      return value >= minValue;
    }
  
    email(value) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(value).toLowerCase());
    }
  
    addError(field, rule) {
      if (!this.errors[field]) {
        this.errors[field] = [];
      }
      this.errors[field].push(rule);
    }
  }
  
  module.exports = Validator;
  