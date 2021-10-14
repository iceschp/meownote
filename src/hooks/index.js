import { useState , useEffect} from 'react';
import moment from 'moment'; 
import {firebase} from '../firebase';
import { collatedTasksExist } from '../helpers';


export const useTaske = selectedProject => {
    const [tasks,setTasks] = useState([]);
    const [archivedTasks,setArchivedTasks] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
        .firestore()
        .collection('taks')
        .where('userId','==','a24f0ccdd660485fab245837b7bb223c');

        unsubscribe = selectedProject && !collatedTasksExist (selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId ','==','selectedProject'))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
          moment().format('DD/MM/YYYY')

        ))
        :selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe=unsubscribe.where('date','==','')) 
        :unsubscribe;

        unsubscribe=unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(taks=> ({
                id: taks.id,
                ...taks.data(),
            }));
            setTasks(
                selectedProject === 'NEXT_7'
                ? newTasks.filter(
                    tasks => 
                    moment(tasks.data,'DD-MM-YYYY').diff(moment(), 'days') <= 7 && tasks.archived !== true
                )
                :newTasks.filter(taks => taks.archived !== true)
            );
            setArchivedTasks(newTasks(taks => task.archived !== false));
        });
        return () => unsubscribe();

    }, [selectedProject]);
        return { tasks,archivedTasks };

};

export const useProjects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(() => {
        firebase
        .firestore()
        .collection('projects')
        .where('userId','==','a24f0ccdd660485fab245837b7bb223c')
        .orderBy('projectId')
        .get()
        .then(snapshot => {
            const allProjects = snapshot.docs.map(project=> ({
                ...project.data(),
                docId: project.id,
            }));
            if(JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                setProjects(allProjects);
            }
        });
    }, [projects]);
   return {projects, setProjects};
};