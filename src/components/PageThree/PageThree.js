import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageThree extends Component {

    state = {
        pageThree: ''
    };
    nextPage = () => {
        console.log('check');

        // this will happen this weekend
        this.props.history.push('/PageFour');
        this.props.dispatch({ type: 'SET_PAGETHREE', payload: this.state.pageThree});

    }
    handleChange = (event)=>{
        console.log('input page 3');
        this.setState({
            pageThree: event.target.value,
        });
    }

    render(){ 
        return(
            <>
            <h2>How well are you being supported?</h2>
            <form >
                <input type="number" onChange={(event) => this.handleChange(event)} placeholder="1-10"/>
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