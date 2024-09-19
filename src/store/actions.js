export default {
    handleSearch({ commit}, strSearch) {
        commit('HANDLE_SEARCH', strSearch);
    },
    handleSort({ commit}, data) {
        commit('HANDLE_SORT', data);
    },
    handleDelete({commit}, taskDelete) {
        commit('HANDLE_DELETE', taskDelete);
    },
    handleAddNew({commit}, task) {
        commit('HANDLE_ADD_NEW', task);
    },
    handleEdit({commit}, task) {
        commit('HANDLE_EDIT', task);
    },
    handleCancel({commit}) {
        commit('HANDLE_CANCEL');
    },
    handleUpdate({commit}, task) {
        commit('HANDLE_UPDATE', task);
    }
}