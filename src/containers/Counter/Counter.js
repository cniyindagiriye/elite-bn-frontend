import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/Counter/CounterControl';
import CounterOutput from '../../components/Counter/CounterOutput';
import * as actionTypes from '../../constants/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
        <hr />
        <button className="px-8 py-6 hover:text-red-500 border-l-4 border-red-700" onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li className="text-center cursor-pointer my-2" key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  ctr: state.ctr.counter,
  storedResults: state.res.results,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
  onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
  onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
  onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
  onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result }),
  onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
