<template>
  <div id="app">
    <game />
    <background />
    <hexahedron />
  </div>
</template>

<script>
  import Game from "views/game/Game"

  import Background from "components/common/background/Background"
  import Hexahedron from "components/common/hexahedron/Hexahedron"

  export default {
    name: 'App',
    components: {
      Game,

      Background,
      Hexahedron
    }
  }
</script>

<style>
  @import url("~assets/css/base.css");
</style>
