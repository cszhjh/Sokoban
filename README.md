# sokoban V2.2.1

> 致敬彩色电视机小游戏《推箱子》

> <a href="https://game.coderlion.com" target="_blank">在线演示地址</a>

### 如何安装与使用

```shell
git clone https://github.com/coderlion4/Sokoban  # 下载 Sokoban

cd Sokoban # 进入 Sokoban目录

npm install # 安装依赖

npm run serve # 运行 Sokoban

npm run build  # 项目打包
```

### 技术栈

* Vue2.0 (核心框架)
* Vue-CLI 4.0 (Vue 脚手架)
* Vuex (状态管理)
* Axios (网络请求)
* Bus (事件总线)
* ES6 (JavaScript 语言的下一代标准)
* Vue-Particles (背景UI)
* Element-UI (前端UI框架)

### 页面欣赏

<img src="https://github.com/coderlion4/Sokoban/blob/master/img01.png">

### 更新说明

#### V2.2.1 (2020.05.26)

* 优化页面加载速度(element-ui 懒加载)
* 网络请求过程中加入 **loading** 动画

#### V2.2.0 (2020.05.06)

* 加入 axios

#### V2.1.1 (2020.05.01)

* 修复 vw、vh 造成的宽高超出一屏
* 修复 “后悔按钮” 被点击后, 小人方向不发生改变

#### V2.1.0 (2020.04.21)

* 加入 **Vuex** 对数据进行管理
* 加入 **element-ui** 替换了**旧版 button**
* 修复了 **“反悔”** 有时得不到预期效果
* 修复了第一次加载页面时 **canvas** 无内容

#### V2.0.0 (2020.04.19)

* 使用 **Vue** 对项目进行了重构

#### V1.0.0 (2020.03.06)

* jQuery 版
