import React, { Component }from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor (props) {
        super();
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }
    handleDeleteItem () {
        const { handleDeletItem, index} = this.props;
        handleDeletItem(index);
    }
    // 一个组件从父组件接受参数
    // 如果该子组件是第一次在父组件内被渲染 则不会执行componentWillReceiveProps
    // 如果该子组件已经在父组件内渲染过则会执行componentWillReceiveProps
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }
    // 当该组件将从页面中删除时执行该函数
    componentWillUnmount () {
        console.log('child componentWillUnmount');
    }
    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.cotent !== this.props.cotent) {
            return true;
        } else {
            return false;
        }
    }
    render () {
        console.log('child render');
        const { cotent, test } = this.props;
        return (
            <div onClick={this.handleDeleteItem}>
                {test}{cotent}
            </div>
        )
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    handleDeleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'hello'
}
export default TodoItem