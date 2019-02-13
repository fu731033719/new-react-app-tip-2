import React from 'react';
import {
    Input,
    Button,
    List,
} from 'antd';
// 当一个组件仅有render函数时候，可使用无状态组件书写组件结构 如下结构
const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '10px'}}>
                <Input 
                placeholder = "Todo info" style={{width: '300px', marginRight: '10px'}} 
                value={props.inputValue}
                onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleAddItem}>提交</Button>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={(index) => {props.hanldeDeletItem(index)}}>{item}</List.Item>)}
                    style={{marginTop: '10px'}}
                />
            </div>
    )
}
// class TodoListUI extends Component {
//     render () {
//         return (
//             <div style={{marginTop: '10px'}}>
//                 <Input 
//                 placeholder = "Todo info" style={{width: '300px', marginRight: '10px'}} 
//                 value={this.props.inputValue}
//                 onChange={this.props.handleInputChange}
//                 />
//                 <Button type="primary" onClick={this.props.handleAddItem}>提交</Button>
//                 <List
//                     header={<div>Header</div>}
//                     footer={<div>Footer</div>}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.hanldeDeletItem(index)}}>{item}</List.Item>)}
//                     style={{marginTop: '10px'}}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI;