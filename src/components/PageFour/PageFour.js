import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageFour extends Component {
    state = {
        pageFour: ''
      };
    nextPage = () => {
        console.log('check');

        // this will happen this weekend
        this.props.history.push('/ReviewFeedback');
        this.props.dispatch({type: 'SET_PAGEFOUR', payload: this.state.pageFour});

    }
    handleChange = (event)=>{
        console.log('input page 4');
        this.setState({
            pageFour: event.target.value,
          });
    }

    render(){ 
        return(
            <>
            <h2>Any comments you want to leave?</h2>
                <p></p>
                <form >
                <input type="text" onChange={(event) => this.handleChange(event)} placeholder="Comment"/>
            </form>
                <button onClick={this.nextPage}>Next</button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(PageFour);