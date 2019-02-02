import React, { Component } from 'react';
import {
    Input,
    Button,
    List,
} from 'antd';
import store from './store/index';
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
            type: 'change_input_value',
            value: e.target.value,
        }
        store.dispatch(action);
    }
    handleAddItem () {
        const action = {
            type: 'add_item',
            value: [...this.state.list, this.state.inputValue]
        }
        store.dispatch(action);
    }
    handleStoreChange () {
        this.setState(store.getState());
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
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                    style={{marginTop: '10px'}}
                />
            </div>
        )
    }
}
export default TodoList;