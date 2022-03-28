import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house, ornament}) => {
    return (
        <div>
            <h5>MySelf</h5>
            <p><small>House: {house}</small></p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;