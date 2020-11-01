import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageTwo extends Component {
    state = {
        understanding: ''
    };

    nextPage = () => {
        console.log('check');

        // this will happen this weekend
        this.props.history.push('/PageThree');
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding});
    }

    handleChange = (event) => {
        console.log('input page 2');

        this.setState({
            understanding: event.target.value,
        });
    }

    render() {
        return (
            <>
                <h2>How well are you understanding the content?</h2>
                <form >
                    <input type="number" onChange={(event) => this.handleChange(event)} placeholder="1-10" />
                </form>
                <button onClick={this.nextPage}>Next</button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(PageTwo);