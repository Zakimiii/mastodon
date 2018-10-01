import { List as ImmutableList, fromJS as ConvertToImmutable } from 'immutable';
import { CONVERSATIONS_FETCH_SUCCESS } from '../actions/conversations';

const initialState = ImmutableList([]);

const normalize = items => ConvertToImmutable(items.map(item => ({
  id: item.id,
  accounts: item.accounts.map(a => a.id),
  last_status: item.last_status.id,
})));

export default function conversations(state = initialState, action) {
  if (action.type === CONVERSATIONS_FETCH_SUCCESS) {
    state = normalize(action.conversations);
  }

  return state;
};
