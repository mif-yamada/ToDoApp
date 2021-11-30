import { RootState } from './index';
import { TodoState } from './slice';

export function getTodoState(state: RootState): TodoState {
  return state.todoApp;
}
