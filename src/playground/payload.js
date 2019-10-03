import { createStore } from 'redux';

const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const decrementCount = (payload = {}) => ({
    type:  'DECREMENT',
    decrementBy: typeof payload.incrementBy === 'number' ? payload.decrementBy : 1
});

const setCount = (payload) => ({
    type: 'SET',
    count: payload.count
})

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count : state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count : state.count - decrementBy
            };
        case 'SET':
            return {
                count : action.count
            };
        case 'RESET':
            return {
                count : 0
            };
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: -100}));