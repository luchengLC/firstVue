
<template>
  <div class="Home">
    <h1>插值</h1>
    <br>
    <hr>
    <!--学习 vue 路由-->
    <h2>这是 vue路由 跳转的演示</h2>
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

    <!--插值  表达式-->
    <div id="expression">
      <h2>这是 插值-表达式 的演示</h2>
      10+10=?<br>
      {{10 + 10}}<br>
      <br>
      你中午要不要和我一起吃个饭？<br>
      {{ok ? 'yes' : 'no'}}<br>
      <br>

      {{msg_4.split('').reverse().join('')}}<br>
      <br>

      <div v-bind:id="'list-'+id">
        你要搞清楚为什么id:1就会显示这段文字哦
      </div>

    </div>
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
    </div>
    <hr>

    <div>

      <h2>这是 插值-修饰符 的演示</h2>
      <br><br><br><br>
      <p>还有疑问，未实现，待实现</p>
    </div>
    <hr>

    <div style="text-align: center; font-size: 40px">
      <a href="\instruct">下一页</a>
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
        a: false,
        seen: true,
        ok: true,
        msg_4: '这几个字会被倒序显示',
        id: 1,
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
