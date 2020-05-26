<template>
  <div class="message">
    <p>
      关卡：<span>{{ getMapLevel + 1 }}</span>
    </p>
    <p>
      移动次数：<span>{{ getMovingTotal }}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GameMessage',
  computed: {
    ...mapGetters(['getMapLevel', 'getMovingTotal'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color: #fff;
  text-align: center;
}

.message p span {
  font-size: 18px;
  color: #00bcd4;
}
</style>
