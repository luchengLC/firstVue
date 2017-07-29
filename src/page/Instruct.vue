
<template>
  <div class="Instruct">
    <h1>指令 Instructions</h1>
    <br>
    <hr>

    <div id="sen">
      <h2>这是 插值-参数 的演示</h2>
      <p v-if="seen">用例v-if来控制 此行文字能够显示</p>
      <p>但是存在疑问：为什么用chrome的console来改变seen的Boolean值，页面没有效果，而且也seen显示为undefined？   待探究。</p>
    </div>
    <hr>

    <div>
      <h2>这是 插值-参数 的演示</h2>
      <a v-bind:href="url">利用插值来跳转到vue官网</a>
      <p></p>
    </div>
    <hr>

    <div>
      <h2>这是 插值-参数 的演示</h2>
      <br><br><br><br>
      <p>v-on:click 还有疑问，未实现，待实现</p>
      <p>--------------------------------------------------------</p>
    </div>
    <hr>

    <div>

      <h2>这是 插值-修饰符 的演示</h2>
      <br><br><br><br>
      <p>还有疑问，未实现，待实现</p>
      <p>--------------------------------------------------------</p>
    </div>
    <hr>

    <div style="text-align: center; font-size: 40px">
      <a href="\userinput">下一页</a>
    </div>

  </div>


</template>

<script>
  export default {
    name: 'Instruct',

    data() {

      return {
        seen: true,

        url:'https://cn.vuejs.org/v2/guide/'


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
