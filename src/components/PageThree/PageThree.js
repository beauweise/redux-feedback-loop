import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class PageThree extends Component {

    nextPage = () => {
        console.log('check');

        // this will happen this weekend
        this.props.history.push('/PageFour');
    }

    render(){ 
        return(
            <>
            <h2>How well are you being supported?</h2>
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
export default connect(putReduxStateOnProps)(PageThree);