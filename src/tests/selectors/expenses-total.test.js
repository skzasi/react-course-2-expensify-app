import React from 'react';
import selectExpenseTotal from '../../selectors/expenses-total';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExpenseTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = selectExpenseTotal([expenses[0]]);
    expect(result).toBe(500);
});

test('should correctly add up multiple expenses', () => {
    const result = selectExpenseTotal(expenses);
    expect(result).toBe(46700);
});
