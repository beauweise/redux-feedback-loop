import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class ReviewFeedback extends Component {



    render(){ 
        return(
            <>
            <h2>Review your Feedback</h2>
                <p></p>
                <ul>
                    {/* {this.props.reduxState.pizzaMenu.map((item) => { */}
                        {/* return <li key={item.id}><MenuItem item={item} /> </li>
                    })}  */}
                </ul>
                <button onClick={this.nextPage}>Next</button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(ReviewFeedback);