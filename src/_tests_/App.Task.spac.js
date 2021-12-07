import React from "react";
import { render,cleanup,fireEvent} from '@testing-library/react';
import { AddTask, AppTask } from "../components/AddTask";
import { firebase } from "../firebase";
import { useSelectedProjectValue } from "../context";

beforeEach(cleanup);

jest.mock('../context',()=> ({
    useSelectedProjectValue: jest.fn(() => ({selectedProject:1 })),
    useProjectValue: jest.fn(() => ({ projects: []})),
}));

 jest.mock('../firebase.js',()=> ({
     firebase:{
         firestore: jest.fn(() => ({
             collection: jest.fn(() => ({
                 add:jest.fn(() => Promise.resolve('Never mock firebase')),
                     
                
             })),
         })),
     },
 }));
 describe('<AddTask />' ,() => {
     afterEach(() => {
         jest.clearAllMocks();
     });
     describe('Success',()=> {
        it('renders the <AddTask/>', ()=> {
            const {queryByTestId} = render(<AddTask />);
            expect(queryByTestId('add-task-comp')).toBeTruthy();
        });

        it('renders the <AddTask/> quick overlay', () => {
            const setShowQuickAddTask = jest.fn();

            const {queryByTestId} = render (
              <AddTask 
                showAddTaskMain 
                showAddTaskMain={false}
                showQuickAddTask
                setShowQuickAddTask={setShowQuickAddTask}
                />
            );
            
            expect(queryByTestId('quick-add-task')).toBeTruthy();
        });
        it('renders the <AddTask /> main showable when clicked' ,() => {
            const {queryByTestId} = render(<AddTask showAddTaskMain />);

            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-main')).toBeTruthy();
        });

        it('renders the <AddTask /> project when clicked' ,() => {
            const {queryByTestId} = render(<AddTask showAddTaskMain />);

            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-main')).toBeTruthy();

            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-main')).toBeTruthy();

        });

        it('renders the <AddTask /> task date overlay when clicked',() =>{
            const {queryByTestId} = render(<AddTask showAddTaskMain />);

            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-main')).toBeTruthy();

            fireEvent.click(queryByTestId('show-project-overlay'));
            expect(queryByTestId('project-overlay')).toBeTruthy();

        })

        it('hides the <AddTask /> mian when cancel is clicked',() =>{
            const {queryByTestId} = render(<AddTask showAddTaskMain />);
            
            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-main')).toBeTruthy();

            fireEvent.click(queryByTestId('add-task-main-cancel'));
            expect(queryByTestId('add-task-main')).toBeTruthy();
        })
        it('renders <AddTask /> for quick add task and then clicks cancel', () => {
           const showQuickAddTask = true;
           const setShowQuickAddTask= jest.fn(() => !showQuickAddTask);
           const {queryByTestId} = render (
               <AddTask  showAddTaskMain setShowQuickAddTask={setShowQuickAddTask} showQuickAddTask
               />
           );
           fireEvent.click(queryByTestId('show-main-action'));
           expect(queryByTestId('add-task-main')).toBeTruthy();

           fireEvent.click(queryByTestId('add-task-cancel'));
           expect(setShowQuickAddTask).toHaveBeenCalled();
           
        });
        it('render <AddTask /> and adds a task to the inbox and cl')
     });
 });