import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageFour extends Component {

    nextPage = () => {
        console.log('check');

        // this will happen this weekend
        this.props.history.push('/ReviewFeedback');
    }

    render(){ 
        return(
            <>
            <h2>Any comments you want to leave?</h2>
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
export default connect(putReduxStateOnProps)(PageFour);