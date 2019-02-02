import React, { Component } from 'react';
import {
    Input,
    Button,
    List,
} from 'antd';
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class TodoList extends Component {
    render () {
        return (
            <div style={{marginTop: '10px'}}>
                <Input placeholder = "Todo info" style={{width: '300px', marginRight: '10px'}}/>
                <Button type="primary">提交</Button>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                    style={{marginTop: '10px'}}
                />
            </div>
        )
    }
}
export default TodoList;