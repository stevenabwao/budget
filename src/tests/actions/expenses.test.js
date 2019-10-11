import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual([])
});

test('should set AddExpense state', () => {
    const expense = {
        id: '6',
        description: 'Laptop',
        note: '29500',
        amount: 19500,
        createdAt: 2000
    }
    const action ={
        type: 'ADD_EXPENSE',
        expense
    }
    const state =expensesReducer(expenses, action)
    expect(state).toEqual([
        ...expenses, expense
    ]);
});
test('should remove an expense by id', () => {
    const action = {type: 'REMOVE_EXPENSE',
    id: expenses[1].id
}
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove an expense if id is not found', () => {
    const action = {type: 'REMOVE_EXPENSE',id: '-1'}
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});
test('should edit an expense', () => {
    const amount = 122000;
    const action ={
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
        
    const state =expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense when id is not found', () => {
    const amount = 122000;
    const action ={
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
        
    const state =expensesReducer(expenses, action)
    expect(state).toEqual(expenses);
});

test('should setup add expense with default to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults={
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(()=>{
        const action =store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
       
    });
