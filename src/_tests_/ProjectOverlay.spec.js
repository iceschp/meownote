import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { AddTask } from '../components/AddTask';
import { useSelectedProjectValue } from '../context';

beforeEach(cleanup); // thanks!

jest.mock('../context',() => ({
    useSelectedProjectValue: jest.fn => ({
        projects:[
            {
                name:''
            }
        ]
    })
}))