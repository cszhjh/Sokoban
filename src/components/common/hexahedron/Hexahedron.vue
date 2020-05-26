<template>
  <div class="hexahedron">
    <ul>
      <li v-for="(item, index) in 6" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hexahedron'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hexahedron {
  position: fixed;
  left: 80px;
  bottom: 50px;
  perspective: 1000px;
  z-index: 1;
}

.hexahedron ul {
  display: flex;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform-origin: right top -100px;
  transform: rotateX(-15deg) rotateY(-20deg) translateZ(-100px);
  animation: around 5s infinite;
}

@keyframes around {
  from {
    transform: rotateX(-50deg) rotateY(-55deg);
  }

  to {
    transform: rotateX(310deg) rotateY(305deg);
  }
}

.hexahedron ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  font-size: 4em;
  position: absolute;
  opacity: 0.8;
}

.hexahedron ul li:nth-child(1) {
  background: radial-gradient(circle at center, lightsalmon, white, lightsalmon);
  transform: rotateY(0deg) translateZ(50px);
}

.hexahedron ul li:nth-child(2) {
  background: radial-gradient(circle at center, #2980b9, white, #2980b9);
  transform: rotateX(180deg) translateZ(50px);
}

.hexahedron ul li:nth-child(3) {
  background: radial-gradient(circle at center, blueviolet, white, blueviolet);
  transform: rotateY(90deg) translateZ(50px);
}

.hexahedron ul li:nth-child(4) {
  background: radial-gradient(circle at center, peru, white, peru);
  transform: rotateY(-90deg) translateZ(50px);
}

.hexahedron ul li:nth-child(5) {
  background: radial-gradient(circle at center, turquoise, white, turquoise);
  transform-origin: top;
  transform: rotateX(90deg) translateY(-50px);
}

.hexahedron ul li:nth-child(6) {
  background: radial-gradient(circle at center, green, white, green);
  transform-origin: bottom;
  transform: rotateX(-90deg) translateY(50px);
}
</style>
