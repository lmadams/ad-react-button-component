import React from 'react';
import { storiesOf } from '@kadira/storybook';

import {muiTheme} from 'storybook-addon-material-ui';
import {
    darkBlack, white, teal700, teal400, grey100, grey500, cyan500, orange800, grey300, fullBlack, grey50,
} from 'material-ui/styles/colors';

import { AgrInput } from '../index';

const newTheme = {
    themeName: 'Grey Theme',
    palette: {
        primary1Color: teal700,
        primary2Color: teal400,
        primary3Color: grey100,
        secundary1Color: grey500,
        secundary2Color: grey50,
        secundary3Color: grey300,
        accent1Color: orange800,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        pickerHeaderColor: cyan500,
        shadowColor: fullBlack,
    },
    toolbar: {
        height: 64,
    },
};

storiesOf('AgrInput', module)
    .addDecorator(muiTheme([newTheme]))
    .add('Input padrao', () => (
        <AgrInput />
    ));
