<template>
  <div class="explain" v-show="isShowExplain">
    <div class="box">
      <p>A:上一关</p>
      <p>S:下一关</p>
      <p>D:操作撤销</p>
      <p>F:重玩本关</p>
      <p>
        用键盘上的上、下、左、右键移动角色，把箱子全部推到小球的位置即可过关。
      </p>
      <p>
        箱子只可向前推，不能往后拉，并且小人一次只能推动一个箱子。
      </p>
      <p>一共有100关，快来挑战吧！！！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameExplainTxt',
  props: {
    isShowExplain: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.explain {
  position: absolute;
  left: 0;
  top: 35px;
  width: 560px;
  height: 560px;
  margin-top: 10px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}

.explain .box {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

.explain .box p:nth-child(n + 2) {
  margin-top: 10px;
}
</style>
