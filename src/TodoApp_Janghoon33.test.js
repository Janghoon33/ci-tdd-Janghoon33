import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import TodoApp_Janghoon33 from './TodoApp_Janghoon33';

describe('<TodoApp_Janghoon33', () => {
    it('renders TodoForm TodoList',()=>{
            const {getByText, getByTestId} = render(<TodoApp_Janghoon33/>);
            getByText('등록'); // TodoForm 화면에 있는지 확인
            getByTestId('TodoList'); // TodoList 화면에 있는지 확인
    });
    it('renders two defaults todos',() => {
        const {getByText} = render (<TodoApp_Janghoon33/>);
        getByText('TDD 배우기');
        getByText('react-testing-library');
    })
});

