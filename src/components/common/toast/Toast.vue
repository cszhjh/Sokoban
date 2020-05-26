<template>
  <div v-show="isShow" class="toast" :style="{ width }">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false,
      width: ''
    }
  },
  methods: {
    show(message, width = '200px', duration = 2000) {
      this.isShow = true
      this.message = message
      this.width = width

      setTimeout(() => {
        this.isShow = false
        this.message = ''
        this.width = ''
      }, duration)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  padding: 8px 10px;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  z-index: 9999;
  font-size: 24px;
}
</style>
