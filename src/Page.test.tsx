import React from 'react';
import {render, screen} from '@testing-library/react';
import Page from './Page';

test('Page displays welcome text', () => {
    render(<Page/>);
    const welcome = screen.getByText('Welcome to a login form!');
    const welcomeById = screen.getByTestId('welcome')
    expect(welcome).toBeTruthy()
    expect(welcomeById).toBeTruthy()
})