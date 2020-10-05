import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })

});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'Gas Bill', amount: '' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { description: 'Gas Bill', amount: '' }
    });
});

test('should setup add expense action object with provided values', () => {

    // const expenseData = {
    //     description: 'Rent',
    //     amount: 109500,
    //     createdAt: 1000,
    //     note: 'This was last months rent'
    // }

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })

});

test('should add expense to database and store', () => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: '',
        createdAt: 250000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        // expect(1).toBe(1);
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expenses: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        // done();
    });
    // done();

});

test('should add expense with defaults to database and store', () => {

});

// test('should setup add expense action object with default values', () => {

//     const defaultValues = {
//         description: '',
//         amount: 0,
//         createdAt: 0,
//         note: ''    
//     }

//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//         ...defaultValues,
//         id: expect.any(String)
//     }})
// });


