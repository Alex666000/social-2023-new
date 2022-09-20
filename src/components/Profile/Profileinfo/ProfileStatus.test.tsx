import React from 'react';
import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';
import {updateStatus} from '../../../redux/profile-reducer';

describe('ProfileStatus component', () => {
    test('статус из пропсов должен быть в state', () => {
        const component = create(<ProfileStatus updateStatus={updateStatus} status="hello"/>);
        const instance = component.getInstance();
        if (instance) {
            // expect(instance.state.status).toBe('hello');
        }
    });
    test('после создания span должен отображаться', () => {
        const component = create(<ProfileStatus updateStatus={updateStatus} status="hello boys and girls"/>);
        const root = component.root.findByType('span');
        // нашли span
        const span = root.findByType('span')
        expect(span.children.length).toBe(1);
        // проверим что у span - текст который в статусе
        expect(span.children[0]).toBe('hello boys and girls');
        expect(span).not.toBeNull();

    });
    test('после создания input-a не должно быть отображаться', () => {
        const component = create(<ProfileStatus updateStatus={updateStatus} status="hello boys and girls"/>);
        const root = component.root;
        // тестим что ищем input и его не найдем и будем ошибка - делается путем функции
        expect(() => {
            let input = root.findByType('input')
            // ожидаем что получится ошибка
        }).toThrow()
    });
    test('происходит переход в режим редактирования в editMode - input скрывается при этом', () => {
        const component = create(<ProfileStatus updateStatus={updateStatus} status="hello boys and girls"/>);
        const root = component.root
        // нашли span
        const span = root.findByType('span')
        // после того как span нашли кликаем по нему
        span.props.onDoubleClick()
        // после клика editeMode изменится на true и у нас станет input вместо span
        let input = root.findByType('input')
        expect(input.props.value).toBe('hello boys and girls');
    })
    // в пропсах в компоненту можем передать колбек updateStatus
    test('происходит переход в режим редактирования в editMode - input скрывается при этом', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus updateStatus={mockCallback} status="hello boys and girls"/>);
        const instance = component.getInstance()
        // instance?.deactivateEditMode()
        // ты должен быть вызван 1 раз - jest.fn() умеет считать сколько раз вызывали функцию эту
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});