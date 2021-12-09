import React, { useState } from "react";
import { BsMoonStarsFill } from 'react-icons/bs'
import { AddTask } from "../AddTask";
import { FaMusic } from "react-icons/fa";

export const Header = ({ darkMode, setDarkMode }) => {
    const [ shouldShowMain, setShouldShowMain ] = useState(false);
    const [ showQuickAddTask, setShowQuickAddTask ] = useState(false);

    return (
      <header className="header" data-testid="header">
        <nav>
          <div className="logo">
            <img src="/images/meownote-logo.png" alt="meownote logo" />
          </div>
          <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >+</button>
            </li>
            <li className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
              >
                <BsMoonStarsFill />
              </button>
            </li>
          </ul>
          </div>
        </nav>
        <AddTask 
          showAddTaskMain={false}
          shouldShowMain={shouldShowMain}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask} />
      </header>
    )
};