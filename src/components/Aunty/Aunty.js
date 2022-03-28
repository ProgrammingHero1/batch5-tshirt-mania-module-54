import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <p><small>Ring: {ring}</small></p>
        </div>
    );
};

export default Aunty;