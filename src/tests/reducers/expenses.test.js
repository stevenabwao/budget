import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should set ADD_EXPENSE state', () => {
    const expense = {
        id: '6',
        description: 'Laptop',
        note: '29500',
        amount: 195,
        createdAt: 2000
    }

    const action = {
        type : 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses, expense
    ])
});

test('should remove an expense by id', () => {
    const action = {type : 'REMOVE_EXPENSE',
    id : expenses[1].id
};
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if id is not found', () => {
    const action = { type : 'REMOVE_EXPENSE', id: '-1'};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type : 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates : {
            amount
        }
    };

    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount)
});

test('should not edit an expense when id is not found', () => {
    const amount = 122000;
    const action = {
        type : 'EDIT_EXPENSE',
        id: '-1',
        updates : {
            amount
        }
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
});