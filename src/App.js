import React , { Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
class App extends Component {
    constructor () {
        super();
        this.state = {
            show: true,
            list: [],
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    render () {
        return (
            <Fragment>
                {/* <div className={this.state.show ? 'show' : 'hide'}>Hello</div> */}
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames = 'fade'
                    unmountOnExit
                    onEnter={(el) => {
                        el.style.color = 'blue'
                    }}
                    appear={true}
                >
                    <div>Hello</div>
                </CSSTransition>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames = 'fade'
                                    unmountOnExit
                                    onEnter={(el) => {
                                        el.style.color = 'blue'
                                    }}
                                    appear={true}
                                    key={index}
                                >
                                <div >{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                
                <button onClick={this.handleToggle}>toggle</button>
            </Fragment>
        )
    }
    handleToggle () {
        this.setState((prevState) => ({
            show: !this.state.show,
            list: [...prevState.list, 'item-add']
        }));
    }
}

export default App