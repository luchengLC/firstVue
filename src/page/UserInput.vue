<template>
  <div class="UserInput">
    <h1>用户输入 Instructions</h1>
    <br>
    <hr>

    <div>
      <h2>这是 用户输入-双向数据绑定 的演示</h2>

      <input v-model="my" style="width: 400px">
      <p>{{ my }}</p>
    </div>
    <hr>

    <div>
      <h2>这是 用户输入-使用v-on监听事件 的演示</h2>
      <p>{{ msg }}</p>
      <button v-on:click="reverseMsg">反转字符串</button>
      <br>
      <p>还不行，不知道在非app.vue里面要怎样处理函数，先看看，后面回来改</p>
      <p>--------------------------------------------------------</p>
    </div>
    <hr>

    <div style="text-align: center; font-size: 40px">
      <a href="\myfilter">下一页</a>
    </div>

  </div>
</template>

<script>
  export default{
      data () {
          return{
            my:'尝试一下在这个输入框内输入文字字符',
            msg:'为什么'
          }
      }
  }
</script>
