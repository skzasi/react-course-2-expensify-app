import {createStore } from 'redux'


//Action Generators - functions that will return action objects

const incrementCount = ({ incrementBy = 1  } = {}) => ({
        type: 'INCREMENT',
        incrementBy: incrementBy
    });

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count = 10 } = {}) => ({
    type: 'SET',
    count
});


// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT' : 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
            case 'SET':
                return {
                    count: action.count
                };            
        default: 
            return state;

    }
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 50 }));

store.dispatch(incrementCount());


store.dispatch(decrementCount({ decrementBy: 22 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount());


store.dispatch(resetCount());


store.dispatch(setCount({ count: 22 }));
store.dispatch(setCount());

