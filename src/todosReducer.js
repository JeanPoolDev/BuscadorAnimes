

export function todosReducer(initialState, action) {

  switch (action.type) {
    case '[ADD_TODO]':
      return [...initialState, action.payload];
    case '[DELEVE_TODO]':
      return initialState.filter(todos => todos.id !== action.payload);

    default: initialState

  }
}