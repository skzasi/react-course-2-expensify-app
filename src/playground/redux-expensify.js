import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD Expense

const addExpense = (
    { 
        description = '',
        note = '', amount = 0, 
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});

// Remove Expense

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// Edit Expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});


// Set Text Filter

const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});

// Sort By Date

const sortByDate = () => ({
    type: 'SORT_BY_Date',
});

// Sort By Amount

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// Set Start Date

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate: startDate
});

// Set End Date

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate: endDate
});

// Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter( expense => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates};
                }
                else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text }
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount'}
        case 'SORT_BY_Date':
            return { ...state, sortBy: 'date'}
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate}
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate}
        default:
            return state;
    }
};

// Get Visible Expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
        
    });
};


// Store Creation

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 100,
    createdAt: 1000
}));


const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 1000,
    createdAt: -1000
}));

// store.dispatch(removeExpense({
//     id: expenseOne.expense.id
// }));

// store.dispatch(editExpense(
//     expenseTwo.expense.id, { amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [{
        id: 'poasf',
        description: 'January Rent',
        note: 'This was a final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',  //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
