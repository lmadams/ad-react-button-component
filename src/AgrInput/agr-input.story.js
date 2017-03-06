import React from 'react';
import { storiesOf } from '@kadira/storybook';

import {muiTheme} from 'storybook-addon-material-ui';

import { AgrInput } from '../index';

const newTheme = {
    themeName: 'Grey Theme',
    palette: {
        primary1Color: '#00bcd4',
        alternateTextColor: '#4a4a4a',
        canvasColor: '#616161',
        textColor: '#bdbdbd',
        secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
        disabledColor: '#757575',
        accent1Color: '#607d8b',
    },
};

storiesOf('AgrInput', module)
    .addDecorator(muiTheme([newTheme]))
    .add('Input padrao', () => (
        <AgrInput />
    ));
