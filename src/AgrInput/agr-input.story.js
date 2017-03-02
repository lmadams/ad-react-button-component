import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AgrInput } from '../index';

storiesOf('AgrInput', module)
    .add('Input padrao', () => (
        <AgrInput></AgrInput>
    ));
