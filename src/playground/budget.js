import { createStore, combineReducers } from "redux"

const expensesReducerDefaultState = [];

//Expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {  
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

    console.log(store.getState());
