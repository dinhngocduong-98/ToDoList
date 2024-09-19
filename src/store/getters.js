export default {
    listTaskSearch: state => {
        // search
        const { strSearch } = state;
        var newItem = state.listTask.filter((item) => {
            return item.taskName.toLowerCase().includes(strSearch.toLowerCase());
        });

        // sort
        var listTask = [...newItem];
        if (state.orderBy === "name") {
            listTask.sort(function(a, b) {
                var numberSort = state.orderDir === "asc" ? -1 : 1;
                if (a.taskName < b.taskName) return numberSort;
                else if (a.taskName > b.taskName) return numberSort * -1;
                return 0;
            });
          } else if (state.orderBy === "level") {
            listTask.sort(function(a, b) {
                var numberSort = state.orderDir === "asc" ? -1 : 1;
                if (a.level < b.level) return numberSort;
                else if (a.level > b.level) return numberSort * -1;
                return 0;
                });
          }
        return listTask;
    }
}