import React from "react";
import ReactDOM from 'react-dom';
import Fortune from '../fortune';
import {isTSAnyKeyWord} from '@babel/types';
import { render } from '@testing-library/react';

it ("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Fortune></Fortune>,div)

})

