
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

// payload -> data that we need to update the state (use in action)
export type TaskAction =
| { type: 'ADD_TODO', payload: string }
| { type: 'TOGGLE_TODO', payload: number }
| { type: 'DELETE_TODO', payload: number };

export const getTasksInitialState = (): TaskState => {
    return {
        todos: [],
        completed: 0,
        pending: 0,
        length: 0,
    }
}

// always return a new state object
// always return a state type
export const tasksReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    //* regulary we use switch case in reducers
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };

            //! dont use push
            // state.todos.push(newTodo); // mutating the state -> not recommended
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1,
            };
        }
        case 'DELETE_TODO': {
            const currentTodos = state.todos.filter((todo) => todo.id !== action.payload);
            const completedTodos = currentTodos.filter(todo => todo.completed).length;
            const pendingTodos = currentTodos.length - completedTodos;

            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completed: completedTodos,
                pending: pendingTodos,
            };
        }
        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map((todo) => {
            if (todo.id === action.payload) {
                return {
                ...todo,
                completed: !todo.completed
                }
            }
                return todo;
            });
            
            return {
                ...state,
                todos: updatedTodos,
                length: updatedTodos.length,
                completed: updatedTodos.filter(todo => todo.completed).length,
                pending: updatedTodos.filter(todo => !todo.completed).length,
            }
        }
        default:
            return state;
    }



    return state;
};