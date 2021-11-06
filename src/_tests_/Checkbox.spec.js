import react from "react";
import { render,cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from "../components/Checkbox";

beforeEach(cleanup); //clean the DOM!

jest.mock('../firebase',() => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    update: ject.fn(),
                })),
            })),
        })),
    },
}));

describe('<Checkbox />',() => {
    describe('Success',() => {
        if('renders the task checkbox' , () => {
            const {queryByTestId} = render(
                <Checkbox id="1" taskDesc="Finish this tutorial series" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy(); 
        });

    });
});