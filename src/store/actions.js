export default {
    handleSearch({ commit}, strSearch) {
        console.log('handleSearch', strSearch);
        commit('HANDLE_SEARCH', strSearch);
    }
}