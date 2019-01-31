import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [],
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
    //组件内props内修改时执行 一般在顶层组件内无效
    componentWillReceiveProps () {
        console.log('componentWillReceiveProps');
    }
    // 组件即将挂载时候执行
    componentWillMount () {
        console.log('componentWillMount');
    }
    // 组件挂载完成时候执行
    componentDidMount () {
        console.log('componentDidMount');
        axios.get('').then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    //组件被更新之前执行
    // shouldComponentUpdate () {
    //     console.log('shouldcomponentupdate');
    //     return true;
    // }
    //组件被更新之前执行 且在shouldcomponentUpdate之后且其结果为true时执行
    componentWillUpdate () {
        console.log('componentWillUpdate');
    }
    componentDidUpdate () {
        console.log('componentDidUpdate');
    }
    render() {
        console.log('parent render');
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