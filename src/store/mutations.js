export default {
    CHANGE_TASKS(state, newTasks) {
        console.log("mutations CHANGE_TASKS", newTasks);
        state.listTask = newTasks;
    },
    HANDLE_SEARCH(state, strSearch) {
        console.log('mutation HANDLE_Search', strSearch);
        state.strSearch = strSearch;
    }
}