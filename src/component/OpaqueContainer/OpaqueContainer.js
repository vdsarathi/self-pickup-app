import React from 'react';
import './OpaqueContainer.css';

const opaqueContainer = (props) =>(
    <div className='opaqueContainer' style={{marginTop: props.marginTop}}>
        {props.children}
    </div>
);

export default opaqueContainer;