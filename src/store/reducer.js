const defaultstat = {
    inputValue: '',
    list: [],
};

export default (state = defaultstat, action) => {
    if (action.type === 'change_input_value' || action.type === 'input_clear') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        newState.inputValue = '';
        return newState;
    }
    if (action.type === 'delet_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;

    }
    return state;
}