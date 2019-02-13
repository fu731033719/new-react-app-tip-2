import {
    CHANGE_INPUT_VALUE,
    ADD_ITEM,
    DELET_ITEM,
    INIT_LIST_ACTION
} from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM,
})

export const deletItemAction = (index) => ({
    type: DELET_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})