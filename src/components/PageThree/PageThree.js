import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageThree extends Component {

    state = {
        support: ''
    };
    nextPage = () => {
        console.log('check');
        if (this.state.support === "" || this.state.support === null) {// not allowing for empty inputs
            alert('Please enter all info');
            return;
        } else if (this.state.feeling > 10 || this.state.feeling < 1) {
            alert('Please enter a number 1-10');
            return;
        }
        else {
            this.props.history.push('/PageFour');
            this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support });
        }
    }
    handleChange = (event) => {
        console.log('input page 3');
        this.setState({
            support: event.target.value,
        });
    }

    render() {
        return (
            <>
                <h2>How well are you being supported?</h2>
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
export default connect(putReduxStateOnProps)(PageThree);