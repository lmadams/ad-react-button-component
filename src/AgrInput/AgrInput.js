import React from 'react';
import TextField from 'material-ui/TextField';

const AgrInput = () => (
    <TextField
        hintText="Hint maroto"
    >
    </TextField>
);

AgrInput.propTypes = {
    style: React.PropTypes.object,
};

export default AgrInput;
