import React from 'react';
import './WhiteContainer.css';

const container = (props) =>(
    <div className='whiteContainer' style={{marginTop: props.marginTop}}>
        {props.children}
    </div>
);

export default container;