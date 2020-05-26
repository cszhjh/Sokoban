<template>
  <div class="operation">
    <el-button type="primary" icon="el-icon-back" @click="resetLevel(-1)" :disabled="isPrevDisabled">上一关</el-button>
    <el-button type="primary" @click="resetLevel(1)" :disabled="isNextDisabled">
      下一关<i class=" el-icon--right el-icon-right" />
    </el-button>
    <el-button type="primary" icon="el-icon-refresh-left" @click="goBack" :disabled="isGoBackDisabled">反悔</el-button>
    <el-button type="primary" icon="el-icon-refresh" @click="replay">重玩本关</el-button>
    <el-button type="primary" icon="el-icon-notebook-2" @click="explainButton">游戏说明</el-button>
    <game-expalin-txt :isShowExplain="isShowExplain" />
  </div>
</template>

<script>
import GameExpalinTxt from './GameExplainTxt'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'GameControlButton',
  components: {
    GameExpalinTxt
  },
  data() {
    return {
      isShowExplain: false
    }
  },
  computed: {
    ...mapGetters(['getMovingTotal', 'getGoBack', 'getMapLevel']),

    isPrevDisabled() {
      return this.getMapLevel <= 0
    },

    isNextDisabled() {
      return this.getMapLevel >= 99
    },

    isGoBackDisabled() {
      return this.getMovingTotal <= 0
    }
  },
  mounted() {
    this.$bus.$on('resetLevel', this.resetLevel)
    this.$bus.$on('goBack', this.goBack)
    this.$bus.$on('replay', this.replay)
    this.$bus.$on('explainButton', this.explainButton)
  },
  methods: {
    ...mapActions(['changeMovingTotal', 'changeCurrentMap', 'changeRole', 'changeGoBack', 'changeMapLevel']),

    resetLevel(num) {
      this.changeMovingTotal(-this.getMovingTotal)
      this.changeMapLevel(num)
      this.$bus.$emit('init')
    },

    goBack() {
      this.changeMovingTotal(-1)
      this.changeCurrentMap(this.getGoBack('map', this.getMovingTotal))
      this.changeRole(this.getGoBack('direction', this.getMovingTotal))
      this.changeGoBack({
        mode: 'pop',
        type: 'map'
      })
      this.changeGoBack({
        mode: 'pop',
        type: 'direction'
      })
      this.$bus.$emit('drawBlock')
      this.$bus.$emit('drawMap')
    },

    replay() {
      this.changeMovingTotal(-this.getMovingTotal)
      this.$bus.$emit('init')
    },

    explainButton(isHidden) {
      if (isHidden === 'hidden') {
        this.isShowExplain = false
      } else {
        this.isShowExplain = !this.isShowExplain
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.operation {
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-evenly;
  margin: 5px 0;
}

.operation button:not(:first-child) {
  margin-left: auto;
}
</style>
