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
        this.status = store.getState();
    }
    render () {
        return (
            <div style={{marginTop: '10px'}}>
                <Input placeholder = "Todo info" style={{width: '300px', marginRight: '10px'}} value={this.status.inputValue}/>
                <Button type="primary">提交</Button>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.status.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                    style={{marginTop: '10px'}}
                />
            </div>
        )
    }
}
export default TodoList;