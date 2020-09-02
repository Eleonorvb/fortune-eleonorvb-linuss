import React, { Component } from 'react';

class FortuneTeller extends Component {
    state = {  }
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
                    <select className="form-control" id="exampleFormControlSelect1">
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

                <button className='btn btn-primary btn-sm m-4'>Tell me my fortune!</button>
            </form>
            </div>
         );
    }
}
 
export default FortuneTeller;