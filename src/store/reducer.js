import {
    CHANGE_INPUT_VALUE,
    ADD_ITEM,
    DELET_ITEM
} from './actionTypes';
const defaultstat = {
    inputValue: '',
    list: [],
};

export default (state = defaultstat, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELET_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;

    }
    return state;
}