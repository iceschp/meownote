import react from "react";
import { render,cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from "../components/Checkbox";

beforeEach(cleanup); // clean meeeeeee!

describe('<App/>',()=> {
    it('renders the application',()=> {
        const{queryByTestId,debug} = render(<App />);
        expect(queryByTestId('application')).toBeTruthy();
        expect(
            queryByTestId('application').classList.contains('darkmode')  
        ).toBeFalsy();
    });
    it('renders the application',()=> {
        const{queryByTestId,debug} = render(<App darkModeDefault />);
        debug();
        expect(queryByTestId('application')).toBeTruthy();
        expect(
            queryByTestId('application').classList.contains('darkmode')  
        ).toBeTruthy();
    });

    
});