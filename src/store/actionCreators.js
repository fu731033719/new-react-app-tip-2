import {
    CHANGE_INPUT_VALUE,
    ADD_ITEM,
    DELET_ITEM,
    INIT_LIST_ACTION
} from './actionTypes';
import axios from 'axios';
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

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/mock/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        });
    }
}