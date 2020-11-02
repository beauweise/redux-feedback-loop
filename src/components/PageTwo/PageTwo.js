import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageTwo extends Component {
    state = {
        understanding: ''
    };

    nextPage = () => {
        console.log('check');
        if (this.state.understanding === "" || this.state.understanding === null) {// not allowing for empty inputs
            alert('Please enter all info');
            return;
        } else if (this.state.feeling > 10 || this.state.feeling < 1) {
            alert('Please enter a number 1-10');
            return;
        }
        else {
            this.props.history.push('/PageThree');
            this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding });
        }
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
                    <input type="number" min="1" max="10" onChange={(event) => this.handleChange(event)} placeholder="1-10" />
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