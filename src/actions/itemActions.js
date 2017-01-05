import * as types from './actionTypes';
import itemApi from '../api/mockItemApi';

export function searchItems(query){
    
    return function(dispatch){
        return itemApi.searchItems(query).then(items => {
            dispatch(searchItemsSuccess(items));
        }).catch(error => {
            throw(error);
        });
    }
}

export function searchItemsSuccess(items){
    return {type:types.SEARCH_ITEMS_SUCCESS, items}
}