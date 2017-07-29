<template>
  <div class="myFilter">
    <h1>过滤器</h1>
    <br>
    <hr>
    <div id="f">
      <h2>这是 过滤器 的演示</h2>
      <p>代码写了，但是不知道怎么处理export default里面的函数，待改</p>
      <p>-----------------------------------------------------------------------</p>
      {{ msg_1 | capitalize }}
      <hr>
      <br><br><br><br><br><br><br><br><br>
      <h1>缩写</h1>
      <hr>
      <div>
        <h2>没有演示</h2>
        <p>Vue.js 为两个最为常用的指令提供了特别的缩写：</p>
        <pre>
          &lt;!-- 完整语法 --&gt;
          &lt;a v-bind:href="url"&gt;&lt;/a&gt;
          &lt;!-- 缩写 --&gt;
          &lt;a :href="url"&gt;&lt;/a&gt;
        </pre>

        <h3>v-on 缩写</h3>
        <pre>
          &lt;!-- 完整语法 --&gt;
          &lt;a v-on:click="doSomething"&gt;&lt;/a&gt;
          &lt;!-- 缩写 --&gt;
          &lt;a @click="doSomething"&gt;&lt;/a&gt;
        </pre>
        <hr>

      </div>


    </div>
  </div>

</template>
<script>
  export default{
    data() {
      return {
        msg_1: abcdefg
      }
    },
    filter(){
      return {
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
      }
    }
  }
</script>
