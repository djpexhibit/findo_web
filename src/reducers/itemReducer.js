const SEARCH_ITEM = 'SEARCH_ITEM';

export default function itemReducer(state = [], action) {
  switch (action.type) {
    case SEARCH_ITEM:
      return action.items;
    default:
      return state;
  }
}
