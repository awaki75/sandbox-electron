import Button from '@material-ui/core/Button';
import * as React from 'react';
import { ActionDispatcher } from '../action/action-dispatcher';

interface Props {
  value: number;
  actions: ActionDispatcher;
}

export class Counter extends React.Component<Props> {
  onIncrementClick = () => {
    this.props.actions.increment();
  };

  onDecrementClick = () => {
    this.props.actions.decrement();
  };

  render() {
    const { value } = this.props;
    return (
      <p>
        <Button variant="contained" color="primary" onClick={this.onIncrementClick}>
          +
        </Button>{' '}
        <Button variant="contained" color="primary" onClick={this.onDecrementClick}>
          -
        </Button>{' '}
        Clicked: {value} times
      </p>
    );
  }
}
