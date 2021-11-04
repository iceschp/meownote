import react from "react";
import { useProjectsValue } from "../context";

export const ProjectOverlay = ({
    setProject,
    showProjectOverlay,
    setShowProjectOverlay,
}) => {
    const { projects } = useProjectsValue();

    return (
        projects &&
        showProjectOverlay && (
            <div className="project-overlay" data-testid="project-overlay">
                <ul className="project-overlay__list">
                    {projects.map(project =>(
                    <li key={project.projectId} data-testid="projectid-overlay-action">
                        {project.name}
                    </li>
                    ))}
                </ul>
            </div>
        )
    );
};