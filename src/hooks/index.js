import { useState , useEffect} from 'react';
import moment from 'moment'; 
import {firebase} from '../firebase';
import { collatedTasksExist } from '../helpers';


export const useTaske = selectedProject => {
    const [tasks,setTasks] = useState([]);

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
          moment().format('DD/MM/YY')

        ))
        :selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe=unsubscribe.where('date','==','')) 
        :unsubscribe;

    }, [selectedProject]);


};