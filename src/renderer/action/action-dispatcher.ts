import { Action } from '.';

type dispatch = (action: Action) => void;

export class ActionDispatcher {
  constructor(private dispatch: dispatch) {}

  increment() {
    this.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    this.dispatch({ type: 'DECREMENT' });
  }
}
