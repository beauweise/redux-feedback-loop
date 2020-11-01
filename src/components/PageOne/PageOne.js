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
        this.props.history.push('/PageTwo');
        this.props.dispatch({type: 'SET_FEELING', payload: this.state.feeling});

    }

    handleChange = (event)=>{
        console.log('input page 1');

        this.setState({
            feeling: event.target.value,
          });
        }
    

    render(){ 
        return(
            <>
            <h2>How are you feeling today?</h2>
            <form>
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
export default connect(putReduxStateOnProps)(PageOne);