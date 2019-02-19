import React from 'react';
import {
    Input,
    Button,
    List,
} from 'antd';
// 当一个组件仅有render函数时候，可使用无状态组件书写组件结构 如下结构
const TodoListUI = (props) => {
    const {inputValue, handleInputChange, handleAddItem, list, hanldeDeletItem} = props;
    return (
      <div style={{marginTop: '10px'}}>
          <Input 
          placeholder = "Todo info" style={{width: '300px', marginRight: '10px'}} 
          value={inputValue}
          onChange={handleInputChange}
          />
          <Button type="primary" onClick={handleAddItem}>提交</Button>
          <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={list}
              renderItem={(item, index) => (<List.Item onClick={() => {hanldeDeletItem(index)}}>{item}</List.Item>)}
              style={{marginTop: '10px'}}
          />
      </div>
    )
}
export default TodoListUI;