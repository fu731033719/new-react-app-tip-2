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
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })

        // this.setState((prevState) => ({
        //     list: [...prevState.list, prevState.inputValue],
        //     inputValue: ''
        // }));
        // console.log(this.ul.querySelectorAll('div')); setState的异步特性会影响有同步需求的DOM获取
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div'));
        });
        
    }
    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        });
        // this.setState({
        //     inputValue: this.input.value
        // });
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
                    <input value={this.state.inputValue} onChange={this.handleInputChange} ref={(input) => {this.input = input}}/>
                    <button className="red-btn" onClick={this.handleButtonClick}>add</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItems()}
                </ul>
            </Fragment>
            
        )
    }
}
export default TodoList