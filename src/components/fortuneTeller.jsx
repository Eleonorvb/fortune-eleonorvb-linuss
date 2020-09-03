import React, { Component } from 'react';
import Fortune from './fortune';


class FortuneTeller extends Component {
    state = { 
        chosenZodiac: this.props.fortunes[0]
     }

     handleChange = (event, fieldName) => {
        let zodiac = this.props.fortunes
     }

    render() { 
        return ( 
            <div>
                
            <form>
                <div className="form-group m-4">
                    <label htmlFor="exampleFormControlInput1">First name:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"/>
                </div>

                <div className="form-group m-4">
                    <label htmlFor="exampleFormControlInput2">Last name:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2"/>
                </div>

                <div className="form-group m-4">
                    <label htmlFor="exampleFormControlSelect1">Starsign:</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={this.state.chosenZodiac} onChange={(event) => this.handleChange(event, 'chosenZodiac')}>
                        <option>Aquarius</option>
                        <option>Aries</option>
                        <option>Capricorn</option>
                        <option>Cancer</option>
                        <option>Gemini</option>
                        <option>Leo</option>
                        <option>Libra</option>
                        <option>Pisces</option>
                        <option>Sagittarius</option>
                        <option>Scorpio</option>
                        <option>Taurus</option>
                        <option>Virgo</option>
                    </select>
                </div>

                <div className="form-group m-4">
                    <label htmlFor="exampleFormControlInput2">BirthDate:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder='xxxx-xx-xx'/>
                </div>
            </form>
            <Fortune 
                chosenZodiac={this.state.chosenZodiac}
                showMessage={this.props.showMessage}
                onFortunePress={this.props.onFortunePress}
            />
            </div>
         );
    }
}
 
export default FortuneTeller;