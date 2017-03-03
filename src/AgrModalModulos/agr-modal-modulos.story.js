import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AgrModalModulos } from '../index';

storiesOf('AgrModalModulos', module)
    .add('Componente padrao', () => (
        <AgrModalModulos></AgrModalModulos>
    ));
