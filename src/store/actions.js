/* ─── Redux Action Types ─── */

export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE';
export const SEND_MESSAGE_REQUEST  = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS  = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE  = 'SEND_MESSAGE_FAILURE';
export const SET_ACTIVE_SECTION    = 'SET_ACTIVE_SECTION';

/* ─── Action Creators ─── */

export const fetchContactRequest = ()       => ({ type: FETCH_CONTACT_REQUEST });
export const fetchContactSuccess = (data)   => ({ type: FETCH_CONTACT_SUCCESS, payload: data });
export const fetchContactFailure = (error)  => ({ type: FETCH_CONTACT_FAILURE, payload: error });
export const sendMessageRequest  = (form)   => ({ type: SEND_MESSAGE_REQUEST,  payload: form });
export const sendMessageSuccess  = ()       => ({ type: SEND_MESSAGE_SUCCESS });
export const sendMessageFailure  = (error)  => ({ type: SEND_MESSAGE_FAILURE,  payload: error });
export const setActiveSection    = (sec)    => ({ type: SET_ACTIVE_SECTION,    payload: sec });
