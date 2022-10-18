import React from 'react';
import { render,fireEvent,getByText } from '@testing-library/react';
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
    });
    it('creates new todo', () => {
        const { getByPlaceholderText, getByText} = render(<TodoApp_Janghoon33/>);
        fireEvent.change(getByPlaceholderText('할 일을 입력하세요'), 
        { target : {value: '새 항목 추가하기'}}
        );
        fireEvent.click(getByText('등록'));
        getByText('새 항목 추가하기');
    });
    it('toggles todo',()=>{
        const {getByText} = render(<TodoApp_Janghoon33/>);
        const todoText = getByText('TDD 배우기');
        expect(todoText).not.toHaveStyle('text-decoration: line-through');
        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through');
    });

    it('remove dodo',()=>{
        const {getByText} = render(<TodoApp_Janghoon33/>);
        const todoText = getByText('TDD 배우기');
        const removeButton = todoText.nextSibling;
        fireEvent.click(removeButton);
        expect(todoText).not.toBeInTheDocument();
    })
});

