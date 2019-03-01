import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getInputChangeAction,
    addItemAction,
    deletItemAction,
    getInitList
} from './store/actionCreators';
import TodoListUI from './TodoListUI';

class ToDoList extends Component {
  render() {
    const {inputValue, list, changeInputValue, handleClick, handleDeletItem,} = this.props;
    return (
      <TodoListUI
      inputValue = {inputValue}
      list = {list}
      handleInputChange = {changeInputValue}
      handleAddItem = {handleClick}
      hanldeDeletItem = {handleDeletItem}
      />
    )
  }
  componentDidMount () {
    this.props.listInit();
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    handleClick () {
      const action = addItemAction();
      dispatch(action);
    },
    handleDeletItem (index) {
      const action = deletItemAction(index);
      dispatch(action);
    },
    listInit () {
      const action = getInitList();
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);