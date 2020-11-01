import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageOne extends Component {

state = {
    pageOne: ''
  };

    nextPage = () => {
        console.log('check');
        // this will happen this weekend
        this.props.history.push('/PageTwo');
        this.props.dispatch({type: 'SET_PAGEONE', payload: this.state.pageOne});

    }

    handleChange = (event)=>{
        console.log('input page 1');

        this.setState({
            pageOne: event.target.value,
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