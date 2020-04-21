import {
  CHANGE_MOVING_TOTAL,
  CHANGE_CURRENT_MAP,
  MOVE_CURRENT_MAP,
  CHANGE_ROLE,
  CHANGE_GO_BACK,
  CLEAR_GO_BACK,
  CHANGE_MAP_LEVEL
} from "./mutations-type"

export default {
  /**
   * @param {state, commit} 为context的解构
   */
  changeMovingTotal({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      if (typeof (payload) === "number") {
        commit(CHANGE_MOVING_TOTAL, payload);
        resolve("changeMovingTotal success");
      } else {
        reject("changeMovingTotal error");
      }
    });
  },

  changeCurrentMap({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      if (Object.keys(payload).length) {
        commit(CHANGE_CURRENT_MAP, payload);
        resolve("changeCurrentMap success");
      } else {
        reject("changeCurrentMap error");
      }
    });
  },

  moveCurrentMap({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(MOVE_CURRENT_MAP, payload);
      resolve("moveCurrentMap success");
    })
  },

  changeRole({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(CHANGE_ROLE, payload);
      resolve("changeRole success");
    });
  },

  changeGoBack({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(CHANGE_GO_BACK, payload);
      resolve("changeGoBack success");
    })
  },

  claerGoBack({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(CLEAR_GO_BACK, payload);
      resolve("claerGoBack success");
    })
  },

  changeMapLevel({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      if (state.mapLevel >= 0 && state.mapLevel < 100) {
        commit(CHANGE_MAP_LEVEL, payload);
        resolve("changeMapLevel success");
      } else {
        reject("changeMapLevel error");
      }
    })
  }
}
