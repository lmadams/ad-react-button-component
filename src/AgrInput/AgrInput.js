import React from 'react';

const AgrInput = ({ style = {} }) => (
    <input
        style={{ ...style }}
    >
    </input>
);

AgrInput.propTypes = {
    style: React.PropTypes.object,
};

export default AgrInput;
