<template>
  <div class="container">
    <mt-header fixed title="黑马程序员-Vue项目"></mt-header>
    <!--<router-view></router-view>-->
    <nav class="mui-bar mui-bar-tab">
        <a href="#tabbar" class="mui-tab-item mui-active">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </a>
        <a href="#tabbar-with-chat" class="mui-tab-item">
            <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">消息</span>
        </a>
        <a href="#tabbar-with-contact" class="mui-tab-item">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">通讯录</span>
        </a>
        <a href="#tabbar-with-map" class="mui-tab-item">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">设置</span>
        </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        padding-top:40px
    }
</style>
