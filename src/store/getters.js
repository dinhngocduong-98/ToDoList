export default {
    listTaskSearch: state => {
        const { strSearch } = state;
        var newItem = state.listTask.filter((item) => {
            return item.taskName.toLowerCase().includes(strSearch.toLowerCase());
        });
        return newItem;
    }
}