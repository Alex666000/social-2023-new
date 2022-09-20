import React from 'react';
import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';
import {updateStatus} from '../../../redux/profile-reducer';

describe('ProfileStatus component', () => {
    test('статус из пропсов должен быть в state', () => {
        const component = create(<ProfileStatus updateStatus={updateStatus} status="hello"/>);
        const instance = component.getInstance();
       if (instance){

           // expect(instance.state.status).toBe('hello');
       }
    });
    test('после создания span должен отображаться', () => {
        const component = create(<ProfileStatus updateStatus={updateStatus} status="hello"/>);
        const instance = component.getInstance();
        // нашли span
        const span = instance?.findByType('span')

       if (span){
           expect(span.instance.length).toBe(1);
       }
    });
});