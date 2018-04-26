import { SENT } from '../actions/index.js';

const initState = {
  success: false,
  error: ''
};

export default function (state = initState, action) {
  switch (action.type) {
    case SENT:
      return {
        ...state,
        success: action.success,
        error: action.error
      };
    default:
    return state;

  }
}
