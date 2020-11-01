import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageFour extends Component {

    nextPage = () => {
        console.log('check');

        // this will happen this weekend
        this.props.history.push('/ReviewFeedback');
    }
    handleChange = ()=>{
        console.log('input page 4');
        
    }

    render(){ 
        return(
            <>
            <h2>Any comments you want to leave?</h2>
                <p></p>
                <form >
                <input type="text" onChange={(event) => this.handleChange(event, "customer_name")} placeholder="Comment"/>
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