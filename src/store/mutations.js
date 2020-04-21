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
  [CHANGE_MOVING_TOTAL](state, payload) {
    state.movingTotal += payload;
  },

  [CHANGE_CURRENT_MAP](state, payload) {
    state.currentMap.splice(0);
    payload.forEach(item => state.currentMap.push(item.concat()));
  },

  [MOVE_CURRENT_MAP](state, payload) {
    state.currentMap[payload.x][payload.y] = payload.value;
  },

  [CHANGE_ROLE](state, payload) {
    state.role = payload;
  },

  [CHANGE_GO_BACK](state, payload) {
    if (payload.mode === "push") {
      state.goBack[payload.type].push(payload.value);
    } else if (payload.mode === "pop") {
      state.goBack[payload.type].pop();
    }
  },

  [CLEAR_GO_BACK](state, payload) {
    state.goBack.map.splice(0);
    state.goBack.direction.splice(0)
  },

  [CHANGE_MAP_LEVEL](state, payload) {
    state.mapLevel += payload;
  }
}
