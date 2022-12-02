export default {
  state: {
    notifications: [],
  },
  getters: {},
  actions: {
    addNotification({ commit }, notification) {
      commit("PUSH_NOTIFICATION", notification);
    },
    removeNotification({ commit }, notification) {
      commit("REMOVE_NOTIFICATION", notification);
    },
  },
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    },
    REMOVE_NOTIFICATION(state, notification) {
      state.notifications = state.notifications.filter(
        (n) => n !== notification
      );
    },
  },
};

// state.notifications = state.notifications.filter(notification => {
//        return notification.id != notificationToRemove.id;
