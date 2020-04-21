export default {
  getMovingTotal: state => state.movingTotal,

  getCurrentMap: state => state.currentMap,

  getCurrentMapLength: state => state.currentMap.length,

  getCurrentMapItemLength: state => state.currentMap[0].length,

  getRole: state => state.role,

  getGoBack: state => (type, index) => state.goBack[type][index],

  getMapLevel: state => state.mapLevel
}
