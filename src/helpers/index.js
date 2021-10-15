import { collactedTasks } from '../constants';

export const collatedTasksExist = selectedProject =>
 collactedTasks.find(task => task.key === selectedProject);