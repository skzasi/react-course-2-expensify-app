import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
// import moment from 'moment';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '2'};
    const state  = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '-5'};
    const state  = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = { 
        id: '4',
        description: 'College Fees', 
        amount: 500000,
        createdAt:  2129109201
    }
    const action = { type: 'ADD_EXPENSE', expense: expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);

});

test('should edit an expense by id', () => {
    const expense = { 
        id: '2',
        description: 'College Expense', 
        amount: 500000,
        createdAt:  2129109201
    }
    const action = { type: 'EDIT_EXPENSE', id: '2', updates: expense };
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual(expense);

});

test('should edit an expense if id not found', () => {
    const expense = { 
        id: '-5',
        description: 'College Expense', 
        amount: 500000,
        createdAt:  2129109201
    }
    const action = { type: 'EDIT_EXPENSE', id: '-5', updates: expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
