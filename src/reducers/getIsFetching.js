import * as fromList from './createList';

export const getIsFetching = (state, filter) =>
    fromList.getIsFetching(state.listByFilter[filter]);
