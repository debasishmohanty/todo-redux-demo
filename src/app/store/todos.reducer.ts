import { state } from '@angular/animations';
import { Action } from '@ngrx/store';

export const ACTIONS = {
  LOAD_TODOS: 'LOAD_TODOS'
};
export interface State {
  name: string;
  priority: number;
  completed: boolean
}
export const initialState: State = {
  name: '',
  priority: 0,
  completed: false
};
export function todosReducer(state: State, ) {
  state
}
