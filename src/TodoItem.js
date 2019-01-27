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
    render () {
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
    content: PropTypes.string,
    handleDeleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'hello'
}
export default TodoItem