import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [
                'learn english',
                'learn react'
            ],
            inputValue: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDeletItem = this.handleDeletItem.bind(this);
    }
    handleButtonClick () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    handleDeletItem (index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        });
    }
    getTodoItems () {
        return (
            this.state.list.map((item, index) => {
                return <TodoItem handleDeletItem={this.handleDeletItem} key={index} cotent={item} index={index}/>
            })
        )
    }
    render() {
        return  (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className="red-btn" onClick={this.handleButtonClick}>add</button>
                </div>
                <ul>
                    {this.getTodoItems()}
                </ul>
            </Fragment>
            
        )
    }
}
export default TodoList