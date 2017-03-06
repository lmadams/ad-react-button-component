import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AgrModalModulos } from '../index';

import Menu from 'material-ui/svg-icons/navigation/menu';

import {muiTheme} from 'storybook-addon-material-ui';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

import {
    darkBlack, white, teal700, teal400, grey100, grey500, cyan500, orange800, grey300, fullBlack, grey50,
} from 'material-ui/styles/colors';

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

storiesOf('AgrModalModulos', module)
    .addDecorator(muiTheme([newTheme]))
    .add('Componente padrao', () => (
        <Toolbar>
            <ToolbarGroup firstChild>
                <IconButton>
                    <Menu />
                </IconButton>
                <ToolbarTitle text="Agrotis" />
            </ToolbarGroup>
            <ToolbarGroup>
                <AgrModalModulos />
                <RaisedButton label="Sair" secondary />
            </ToolbarGroup>
        </Toolbar>
    ));
