import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionDispatcher } from '../action/action-dispatcher';
import { Counter } from './counter';

interface Props {
  value: number;
  actions: ActionDispatcher;
}

class AppInternal extends React.Component<Props, {}, {}> {
  render() {
    const { value, actions } = this.props;
    return <Counter value={value} actions={actions} />;
  }
}

const mapStateToProps = (state: number) => ({ value: state });
const mapDispatchToProps = (dispatch: Dispatch) => ({ actions: new ActionDispatcher(dispatch) });

// tslint:disable-next-line:variable-name
export const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppInternal);
