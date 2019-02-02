const defaultstat = {
    inputValue: 'Todo item',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ],
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
    return state;
}