import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageTwo extends Component {

    nextPage = () => {
        console.log('check');

        // this will happen this weekend
        this.props.history.push('/PageThree');
    }
    handleChange = ()=>{
        console.log('input page 2');
        
    }

    render(){ 
        return(
            <>
            <h2>How well are you understanding the content?</h2>
            <form >
                <input type="number" onChange={(event) => this.handleChange(event, "customer_name")} placeholder="1-10"/>
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