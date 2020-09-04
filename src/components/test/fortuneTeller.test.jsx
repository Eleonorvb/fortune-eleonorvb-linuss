import React from 'react';
import ReactDOM from 'react-dom';
import FortuneTeller from "../fortuneTeller";


it ("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<FortuneTeller></FortuneTeller>,div)

})