import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

const addExpense = (expense = {}) => ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description : expense.description ? expense.description : '',
        note : expense.note ? expense.note : '',
        amount : expense.amount ? expense.amount : 0,
        createdAt : expense.createdAt ? expense.createdAt : 0
    }
})

const removeExpense = (expense = {}) => ({
    type : 'REMOVE_EXPENSE',
    id : expense.id
});

const expensesReducerDefaultState = [];

//Expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {  
        case  'ADD_EXPENSE':
            return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
        default:
            return state;
    }
}

//Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


    //Store creation
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )

    store.subscribe(() => {
        console.log(store.getState());
    })

    const expenseOne = store.dispatch(addExpense({description: 'Rent',amount : 100}));
    const expenseTwo = store.dispatch(addExpense({description: 'Coffee',amount : 300}));

    store.dispatch(removeExpense({id : expenseOne.expense.id}));