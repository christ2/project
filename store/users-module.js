import { user } from '../_services';
import { router } from '../_models';

const state = {
    all: {}
};

const actions = {
    getAll({ commit }) {
        commit('getAllRequest');

        user.getAll()
            .then(
                users => commit('getAllSuccess', users),
                error => commit('getAllFailure', error)
            );
    },

    delete({ commit }, id) {
        commit('deleteRequest', id);

        user.delete(id)
            .then(
                user => commit('deleteSuccess', id),
                error => commit('deleteSuccess', { id, error: error.toString() })
            );
    },
    
    

    update({ dispatch, commit }, id) {
        commit('updateRequest', id);
    
        user.update(id)
            .then(
                user => {
                    commit('updateSuccess', id);
                    router.push('/home');
                    setTimeout(() => {
                        dispatch('alert/success', 'Update successful', { root: true });
                    })
                },
                error => {
                    commit('updateFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    deleteRequest(state, id) {
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },
    deleteSuccess(state, id) {
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    deleteFailure(state, { id, error }) {
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                const { deleting, ...userCopy } = user;
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    },
    updateRequest(state, user) {
        state.status = { updating: true };
    },
    updateSuccess(state, user) {
        state.status = {};
    },
    updateFailure(state, error) {
        state.status = {};
    }

};

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
};
