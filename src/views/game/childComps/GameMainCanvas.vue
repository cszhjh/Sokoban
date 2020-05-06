<template>
  <div>
    <canvas id="canvas" width="560" height="560"></canvas>
  </div>
</template>

<script>
  import { getLevelMap } from "network/game"
  import { MAP_WIDTH, MAP_HEIGHT, WIDTH, HEIGHT } from "common/const"
  import { Position, imgLoad } from "common/utils"

  import { mapGetters, mapActions } from "vuex"

  export default {
    name: "GameMainCanvas",
    data() {
      return {
        levelsMap: [],
        canvas: null,
        cxt: null,
        currentInitMap: null,
        rolePosition: {},
        imgObj: {},
        imageLoad: {
          wall: require("@/assets/img/wall.png"),
          block: require("@/assets/img/block.gif"),
          ball: require("@/assets/img/ball.png"),
          box: require("@/assets/img/box.png"),
          down: require("@/assets/img/down.png"),
          left: require("@/assets/img/left.png"),
          right: require("@/assets/img/right.png"),
          up: require("@/assets/img/up.png"),
        }
      }
    },
    created() {
      getLevelMap().then(res => {
        this.levelsMap = res.data.levels;
        this.init()
      })
    },
    mounted() {
      this.$bus.$on("init", this.init);
      this.$bus.$on("drawBlock", this.drawBlock);
      this.$bus.$on("drawMap", this.drawMap);

      window.onkeydown = this.keydown;

      this.canvas = document.getElementById("canvas");
      this.cxt = this.canvas.getContext("2d");
      this.rolePosition = new Position(8, 8);

      imgLoad(this.imageLoad, this.imgObj, this.init);
    },
    computed: {
      ...mapGetters([
        "getMovingTotal",
        "getCurrentMap",
        "getCurrentMapLength",
        "getCurrentMapItemLength",
        "getRole",
        "getMapLevel"
      ])
    },
    methods: {
      ...mapActions([
        "changeMovingTotal",
        "changeCurrentMap",
        "claerGoBack",
        "moveCurrentMap",
        "changeRole",
        "changeGoBack"
      ]),

      init() {
        if (this.levelsMap.length) {
          this.claerGoBack();
          this.initMap();
        }
      },

      initMap() {
        this.currentInitMap = this.levelsMap[this.getMapLevel];
        this.changeCurrentMap(this.currentInitMap);
        this.changeRole(this.imgObj.down);
        this.drawBlock();
        this.drawMap();
      },

      drawBlock() {
        for (let i = 0; i < MAP_WIDTH; ++i) {
          for (let j = 0; j < MAP_HEIGHT; ++j) {
            this.cxt.drawImage(this.imgObj.block, WIDTH * j, HEIGHT * i, WIDTH, HEIGHT);
          }
        }
      },

      drawMap() {
        let img;
        for (let i = 0; i < this.getCurrentMapLength; ++i) {
          for (let j = 0; j < this.getCurrentMapItemLength; ++j) {
            switch (this.getCurrentMap[i][j]) {
              case 0:
                img = this.imgObj.block;
                break;
              case 1:
                img = this.imgObj.wall;
                break;
              case 2:
                img = this.imgObj.ball;
                break;
              case 3:
                img = this.imgObj.box;
                break;
              case 4:
                img = this.getRole;
                this.rolePosition.x = i;
                this.rolePosition.y = j;
                break;
              case 5:
                img = this.imgObj.box;
                break;
            }
            /*
                w * j = 当前格子在画布中左顶点的x坐标
                (img.width - width) / 2 图片向左偏移一半
                height * i - (img.height - height) 图片向上偏移(图片高度 - 格子高度), 使底部对齐
                img.width 图片宽度
                img.height 图片高度
            */
            this.cxt.drawImage(img, WIDTH * j - (img.width - WIDTH) / 2, HEIGHT * i - (img.height - HEIGHT), img.width, img.height);
          }
        }
      },

      keydown(e) {
        this.$bus.$emit("explainButton", "hidden");

        switch (e.keyCode) {
          case 37:
            this.move("left");
            break;
          case 38:
            this.move("up");
            break;
          case 39:
            this.move("right");
            break;
          case 40:
            this.move("down");
            break;
          case 65:
            if (this.getMapLevel > 0) {
              this.$bus.$emit("resetLevel", -1);
            }
            break;
          case 83:
            if (this.getMapLevel < 99) {
              this.$bus.$emit("resetLevel", 1);
            }
            break;
          case 68:
            if (this.getMovingTotal > 0) {
              this.$bus.$emit("goBack");
            }
            break;
          case 70:
            this.$bus.$emit("replay");
            break;
        }
      },

      move(direction) {
        let roleTo = new Position(this.rolePosition.x, this.rolePosition.y);
        let boxTo = new Position(this.rolePosition.x, this.rolePosition.y);

        switch (direction) {
          case "left":
            roleTo.y -= 1;
            boxTo.y -= 2;
            break;
          case "up":
            roleTo.x -= 1;
            boxTo.x -= 2;
            break;
          case "right":
            roleTo.y += 1;
            boxTo.y += 2;
            break;
          case "down":
            roleTo.x += 1;
            boxTo.x += 2;
            break;
        }

        if (this.tryMove(roleTo, boxTo)) {
          this.changeMovingTotal(1);
          this.changeGoBack({
            mode: "push",
            type: "direction",
            value: this.getRole
          });
          this.changeRole(this.imgObj[direction]);
          this.drawBlock();
          this.drawMap();
          if (this.checkPlayer()) {
            // 换成弹窗
            this.$toast.show("恭喜过关!");
            if (this.getMapLevel < 99) {
              this.$bus.$emit("resetLevel", 1);
            }
            this.init();
          }
        }
      },

      tryMove(roleTo, boxTo) {
        let flag = true;

        if (roleTo.x < 0 || roleTo.x >= this.getCurrentMapLength || roleTo.y < 0 || roleTo.y >= this.getCurrentMapItemLength
          || this.getCurrentMap[roleTo.x][roleTo.y] == 1) return false;
        if (this.getCurrentMap[roleTo.x][roleTo.y] == 3 || this.getCurrentMap[roleTo.x][roleTo.y] == 5) {
          if (boxTo.x < 0 || boxTo.x >= this.getCurrentMapLength || boxTo.y < 0 || boxTo.y >= this.getCurrentMapItemLength
            || this.getCurrentMap[boxTo.x][boxTo.y] == 1 || this.getCurrentMap[boxTo.x][boxTo.y] == 3
            || this.getCurrentMap[boxTo.x][boxTo.y] == 5) return false;

          this.changeGoBack({
            mode: "push",
            type: "map",
            value: this.clone(this.getCurrentMap)
          });

          this.moveCurrentMap({
            x: boxTo.x,
            y: boxTo.y,
            value: 3
          });
          flag = false;
        }
        if (flag) {
          this.changeGoBack({
            mode: "push",
            type: "map",
            value: this.clone(this.getCurrentMap)
          });
        }
        this.moveCurrentMap({
          x: roleTo.x,
          y: roleTo.y,
          value: 4
        });
        if (this.currentInitMap[this.rolePosition.x][this.rolePosition.y] == 2 || this.currentInitMap[this.rolePosition.x][this.rolePosition.y] == 5) {
          this.moveCurrentMap({
            x: this.rolePosition.x,
            y: this.rolePosition.y,
            value: 2
          });
        } else {
          this.moveCurrentMap({
            x: this.rolePosition.x,
            y: this.rolePosition.y,
            value: 0
          });
        }
        this.rolePosition = roleTo;
        return true;
      },

      checkPlayer() {
        for (let i = 0; i < this.currentInitMap.length; ++i)
          for (let j = 0; j < this.currentInitMap[i].length; ++j)
            if ((this.currentInitMap[i][j] == 2 && this.getCurrentMap[i][j] != 3)
              || (this.currentInitMap[i][j] == 5 && this.getCurrentMap[i][j] != 3 && this.getCurrentMap[i][j] != 5)) return false;
        return true;
      },

      clone(arr) {
        let cloneArray = [];
        arr.forEach(item => cloneArray.push(item.concat()));
        return cloneArray;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
