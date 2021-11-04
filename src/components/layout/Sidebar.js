import React, { useState } from "react";
import { 
    FaChevronDown, 
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar,
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [ active, setActive ] = useState('inbox');
    const [ showProjects, setShowProjects ] = useState(true);

    return (
    <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar_generic">
        <li
            data-testid="inbox"
            className={ active === 'inbox' ? 'active' : undefined }
            >
            <div
                aria-label="Show Inbox Tasks"
                tabIndex={0}
                role="button"
                onClick={() => {
                    setActive('inbox');
                    setSelectedProject('INBOX');
            }}
                onKeyDown={() => {
                    setActive('inbox');
                    setSelectedProject('INBOX');
            }}
            >
            <span>
                <FaInbox />
            </span>
            <span>Inbox</span>
            </div>
        </li>
        <li
            data-testid="today"
            className={ active === 'today' ? 'active' : undefined }
        >
            <div
                aria-label="Show Today's Tasks"  
                tabIndex={0}
                role="button"
                onClick={() => {
                    setActive('today');
                    setSelectedProject('TODAY');
                }}
                onKeyDown={() => {
                    setActive('today');
                    setSelectedProject('TODAY');
                }}
            >
                <span>
                    <FaRegCalendar />
                </span>
                <span>Today</span>
            </div>
        </li>
        <li 
            data-testid="next_7"
            className={ active === 'next_7' ? 'active' : undefined }
        >
        <div
            aria-label="Show Tasks For The Next 7 Days"
            tabIndex={0}
            role="button"
            onClick={() => {
                setActive('next_7');
                setSelectedProject('NEXT_7');
            }}
            onKeyDown={() => {
                setActive('next_7');
                setSelectedProject('NEXT_7');
            }}
        >
            <span>
                <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
        </div>
        </li>
    </ul>
    <div 
        className="sidebar__middle"
        aria-label="Show/Hide Projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
        role="button"
        tabIndex={0}
        >
        <span>
            <FaChevronDown 
                className={ !showProjects ? 'hidden-projects' : undefined }
            />
        </span>
        <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">{ showProjects && <Projects/> }</ul>
        { showProjects && < AddProject/> }
</div>
);
};