import React, { Component, MouseEvent } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import actions from './actions';
// import { state } from './reducer';
class Page extends Component {

    btnClick = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.btnClick}>增加</button>
                <h1>点击次数</h1>
            </div>
        );
    }
}

export default Page;
