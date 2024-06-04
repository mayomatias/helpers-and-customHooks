export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
      return initialState;
      break;
    
    case '[TODO] Remove Todo':
      return initialState.filter( todo => todo.id !== action.payload);
      break;
   
    case '[TODO] Change State':
    return initialState.map(todo => {
      if(todo.id === action.payload){
        return{
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    });

    case 'addTodo':
      if (action.payload.description == '') {
          alert('Completa los campos')
          return initialState;
      }
      return [...initialState, action.payload];
      break;
    

    default:
      return initialState;
  }
}