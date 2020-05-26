<template>
  <div class="game">
    <game-control-button />
    <game-main-canvas />
    <game-message />
  </div>
</template>

<script>
import GameControlButton from './childComps/GameControlButton'
import GameMainCanvas from './childComps/GameMainCanvas'
import GameMessage from './childComps/GameMessage'

export default {
  name: 'Game',
  components: {
    GameControlButton,
    GameMainCanvas,
    GameMessage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 560px;
  height: 650px;
}
</style>
