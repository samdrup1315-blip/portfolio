/* ─── Reducer — uses Immutable.js Map for state ─── */
import { fromJS } from 'immutable';
import {
  FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_FAILURE,
  SEND_MESSAGE_REQUEST,  SEND_MESSAGE_SUCCESS,  SEND_MESSAGE_FAILURE,
  SET_ACTIVE_SECTION,
} from './actions';

/* Initial state as Immutable.js Map */
const initialState = fromJS({
  contact: {
    email: '',
    github: '',
    linkedin: '',
  },
  loading:       false,
  error:         null,
  messageSent:   false,
  sending:       false,
  activeSection: 'home',
});

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CONTACT_REQUEST:
      return state.set('loading', true).set('error', null);

    case FETCH_CONTACT_SUCCESS:
      return state
        .set('loading', false)
        .set('contact', fromJS(action.payload));

    case FETCH_CONTACT_FAILURE:
      return state.set('loading', false).set('error', action.payload);

    case SEND_MESSAGE_REQUEST:
      return state.set('sending', true).set('messageSent', false).set('error', null);

    case SEND_MESSAGE_SUCCESS:
      return state.set('sending', false).set('messageSent', true);

    case SEND_MESSAGE_FAILURE:
      return state.set('sending', false).set('error', action.payload);

    case SET_ACTIVE_SECTION:
      return state.set('activeSection', action.payload);

    default:
      return state;
  }
};

export default portfolioReducer;
