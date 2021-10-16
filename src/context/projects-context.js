import React, { createContext, useContext, useState } from 'react';

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
    const { selectedProject, setSelectedProject } = useState('INBOX');

    return (
        <ProjectsContext.Provider value={{ projects, setProjects }}>
            { children }
        </ProjectsContext.Provider>
    );
};

export const useProjectsValue = () => useContext(ProjectsContext);

