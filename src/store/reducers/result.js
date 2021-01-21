import * as actionTypes from '../../constants/actions';
import * as initials from '../initialState';

const reducer = (state = initials.resultInitialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((result) => result.id !== action.resultElementId),
      };
  }
  return state;
};

export default reducer;
