
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

// always return a new state object
// always return a state type
export const tasksReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {

    

    return state;
};