import React, { useState } from "react";
import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";

export const AddProject = ({ shouldShow = false }) => {
    const [ show, setShow ] = useState(shouldShow);
    const [ projectName, setProjectName ] = useState('');

    const projectId = generatePushId();
    const { setProjects } = useProjectsValue();

    const AddProject = () =>
        projectName &&
        firebase
            .firestore()
            .collection('projects')
            .add({
                projectId,
                name: projectName,
                userId: 'a24f0ccdd660485fab245837b7bb223c'
            })
            .then(() => {
                setProjects([]);
                setProjectName('');
                setShow(false);
            })
};