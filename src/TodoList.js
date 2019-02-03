import React, { Component } from 'react';
import {
    Input,
    Button,
    List,
} from 'antd';
import store from './store/index';
import {
    CHANGE_INPUT_VALUE,
    ADD_ITEM,
    DELET_ITEM
} from './store/actionTypes';
class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange (e) {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value,
        }
        store.dispatch(action);
    }
    handleAddItem () {
        const action = {
            type: ADD_ITEM,
        }
        store.dispatch(action);
    }
    handleStoreChange () {
        this.setState(store.getState());
    }
    hanldeDeletItem (index) {
        const action = {
            type: DELET_ITEM,
            index
        }
        store.dispatch(action);
    }
    render () {
        return (
            <div style={{marginTop: '10px'}}>
                <Input 
                placeholder = "Todo info" style={{width: '300px', marginRight: '10px'}} 
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleAddItem}>提交</Button>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.hanldeDeletItem.bind(this,index)}>{item}</List.Item>)}
                    style={{marginTop: '10px'}}
                />
            </div>
        )
    }
}
export default TodoList;