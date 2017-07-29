<template>
  <div class="Home">
    <h1>Home page</h1>
    <hr>

    <!--学习 vue 路由-->
    <h2>这是 vue路由 跳转的演示：↓</h2>
    <a href="/hello">尝试跳转 到 /hello</a>
    <br>
    <br>
    <hr>

    <!--插值   文本-->
    <div class="msg">
      {{message}}
    </div>
    <hr>

    <!--插值  HTML-->
    <div v-html="chazhi_html"></div>
    <hr>

    <!--插值   属性  应用 v-bind-->
    <h2>这是 插值-属性（修改）的演示</h2>
    <label for="label_color">修改颜色</label> -<input type="checkbox" v-model="a" id="label_color">
    <br>
    <br>
    <div v-bind:class="{'t':a}">
      点击checkbox后，这个盒子中的文字的颜色以及背景颜色将会被改变~
    </div>
    <hr>

    <!--表达式-->
    <div >

    </div>

    <div>

    </div>
  </div>


</template>

<script>
  export default {
    name: 'Home',

    data() {
      return {
        message: '这是 插值-文本 的演示',
        chazhi_html: '<h2>这是 插值-HTML 的演示</h2>',
        a: false
      }
    }
  }
</script>

<style>
  .t {
    background: #995;
    color: #eee;
  }
</style>
