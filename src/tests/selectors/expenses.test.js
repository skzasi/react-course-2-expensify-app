import moment from 'moment';
import visibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'r', 
        sortBy: 'date', 
        startDate: undefined, 
        endDate: undefined
    };
    
    const result = visibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);

});

test('should filter by startdate', () => {

    const filters = {
        text: '', 
        sortBy: 'date', 
        startDate: moment(0), 
        endDate: undefined
    };
    const result = visibleExpenses(expenses, filters);
    // console.log('data', moment(0).isBefore(expenses[0].createdAt));
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by enddate', () => {
    const filters = {
        text: '', 
        sortBy: 'date', 
        startDate: undefined, 
        endDate: moment(0)
    };
    const result = visibleExpenses(expenses, filters);
    // console.log('data', moment(0).isSameOrAfter(expenses[0].createdAt));
    expect(result).toEqual([expenses[0], expenses[1]]);

});

test('should sort by date', () => {

    const filters = {
        text: '', 
        sortBy: 'date', 
        startDate: undefined, 
        endDate: undefined
    };
    const result = visibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],  expenses[0], expenses[1]]);    
});

test('should sort by amount', () => {
    const filters = {
        text: '', 
        sortBy: 'amount', 
        startDate: undefined, 
        endDate: undefined
    };
    const result = visibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],  expenses[1], expenses[0]]);
});

// test('', () => {

// });

