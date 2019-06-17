<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="img in imgList" :key="img.id">
        <img :src="img.src" alt="图片加载失败">
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
          <div class="mui-media-body">图片分享</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a></li>

      </ul>
    </div>
  </div>

</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    name: 'App',
    data () {
      return {
        imgList: []
      }
    },
    created () {
      this.show()
    },
    methods: {
      show () {
        this.$axios.get('http://localhost:3000/getData').then((res) => {
          this.imgList = res.data.dataBody
        }).catch((err) => {
          // eslint-disable-next-line no-undef
          console.log(err)
          Toast('获取图片失败')
        })
      }
    }
  }
</script>

<style scoped>
  .mint-swipe {
    height: 300px;

  }

  .mint-swipe img {
    width: 100%;
    height: 100%;
  }

  .mui-grid-view.mui-grid-9 {
    background-color:#fff;
    border:none;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {

    border:0;
  }

  .mui-content{
    float:left;
  }
</style>
