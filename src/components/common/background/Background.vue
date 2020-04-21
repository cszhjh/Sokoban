<template>
  <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4"
    linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3"
    :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
  </vue-particles>
</template>

<script>
  export default {
    name: "Background"
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
