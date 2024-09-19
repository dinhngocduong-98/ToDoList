export default {
    CHANGE_TASKS(state, newTasks) {
        state.listTask = newTasks;
    },
    HANDLE_SEARCH(state, strSearch) {
        state.strSearch = strSearch;
    },
    HANDLE_SORT(state, data) {
        state.orderBy = data.orderBy;
        state.orderDir = data.orderDir;
    },
    HANDLE_DELETE(state, taskDelete) {
        state.listTask = state.listTask.filter((item) => item.id !== taskDelete.id);
    },
    HANDLE_ADD_NEW(state, task) {   
        state.listTask.push(task);
    },
    HANDLE_EDIT(state, task) {
        state.taskSelected = {...task};
        state.title = 'Update';
    },
    HANDLE_CANCEL(state) {
        state.taskSelected = null;
        state.title = 'Add';
    },
    HANDLE_UPDATE(state, task) {
        let index = state.listTask.findIndex((item) => item.id === task.id);
        if (index !== -1) {
            state.listTask.splice(index, 1, task);
            state.taskSelected = null;
            state.title = 'Add';
        }
    }
}