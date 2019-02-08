import * as fromById from '../reducers/byId';
import * as fromList from '../reducers/createList';

export const getVisibleTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
};
