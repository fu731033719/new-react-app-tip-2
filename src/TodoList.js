import React, { Component } from 'react';
import store from './store/index';
import { 
    getInputChangeAction,
    addItemAction,
    deletItemAction,
    getTodoList
} from './store/actionCreators';
import TodoListUI from './TodoListUI';
class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.hanldeDeletItem = this.hanldeDeletItem.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange (e) {
        const edit_value = e.target.value;
        const action = getInputChangeAction(edit_value);
        store.dispatch(action);
    }
    handleAddItem () {
        const action = addItemAction();
        store.dispatch(action);
    }
    handleStoreChange () {
        this.setState(store.getState());
    }
    hanldeDeletItem (index) {
        const action = deletItemAction(index);
        store.dispatch(action);
    }
    render () {
        return (<TodoListUI
        inputValue={this.state.inputValue} 
        list={this.state.list}
        handleInputChange = {
            this.handleInputChange
        }
        handleAddItem = {
            this.handleAddItem
        }
        hanldeDeletItem = {
            this.hanldeDeletItem
        }
        />)
    }
    componentDidMount () {
        const action = getTodoList();
        store.dispatch(action);
    }
}
export default TodoList;