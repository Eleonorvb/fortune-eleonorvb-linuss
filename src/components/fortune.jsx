import React, { Component } from 'react';

class Fortune extends Component {
    
    
    render() { 
        return ( 
            <div>
                <button data-testid="button" onClick={this.props.onFortunePress} className='btn btn-primary btn-sm m-4'>Tell me my fortune!</button>
                {this.props.showMessage && <div className="m-4">{this.props.chosenZodiac.fortune}</div>}
            </div>
        );
    }
}
 
export default Fortune;