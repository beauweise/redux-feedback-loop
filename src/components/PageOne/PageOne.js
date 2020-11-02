import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageOne extends Component {

    state = {
        feeling: ''
    };

    nextPage = () => {
        console.log('check');
        // this will happen this weekend
        if (this.state.feeling === "" || this.state.feeling === null) {// not allowing for empty inputs
            alert('Please enter all info');
            return;}
        else if(this.state.feeling >10 || this.state.feeling < 1){
            alert('Please enter a number 1-10');
            return;
        }else{
        this.props.history.push('/PageTwo');
        this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feeling });
        }
    }

    handleChange = (event) => {
        console.log('input page 1');
       
            this.setState({
                feeling: event.target.value,
            });
    }


    render() {
        return (
            <>
                <h2>How are you feeling today?</h2>
                <form>
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
export default connect(putReduxStateOnProps)(PageOne);