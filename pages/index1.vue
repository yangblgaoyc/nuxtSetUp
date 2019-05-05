<template>
  <section class="container">
    <div>
      <nuxt-link to="/">首页</nuxt-link>
      <h1 class="title">
        nuxtSetUp1
      </h1>
      <h2 class="subtitle">
        My gnarly Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
        <el-button type="primary">主要按钮</el-button>
        <van-button loading type="danger" loading-text="加载中..." />
        <div>{{message}}</div>
        <img style="width:100%" src="/images/j20.jpg"/>

      </div>
    </div>
  </section>
</template>

<script>


export default {
  data () {
    return {
      message: '11111'
    }
  },
//服务端
    async asyncData (context) {
      let {data} = await context.$axios.get("/index.html");
      return { message: data.message }

//      this.account = data.message
    }
//客户端
//  mounted() {
//    this.$axios.get("/index.html").then(res=>{
//      console.log(res)
//    })
//  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;/*no*/
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
}
</style>
