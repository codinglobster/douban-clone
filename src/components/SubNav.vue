<template>
  <div class="sub-nav">
    <!-- Bottom nav -->
    <div class="navBottom" v-if="mold === 'navBottom'">
      <div class="nav-item">
        <router-link :to="{name: 'RegisterView'}">注册帐号</router-link><!-- replace blank
        --><template v-if="currentUser.email">
        <a href="#" @click.prevent="logout()">退出登录</a>
      </template>
        <template v-else>
          <router-link :to="{name: 'LoginView'}" replace>登录豆瓣</router-link>
        </template>
      </div>
      <div class="nav-item">
        <a href="https://movie.douban.com/">使用桌面版</a><!-- replace blank
        --><a href="#">使用豆瓣App</a>
      </div>
    </div>
    <!-- Quick start nav -->
    <div class="quickNav" v-if="mold === 'quickNav'">
      <ul class="quick-nav">
        <li>
          <router-link :to="{name: 'MovieView'}">影院热映</router-link>
        </li>
        <li>
          <router-link :to="{name: 'StatusView'}">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link :to="{name: 'RegisterView'}">注册帐号</router-link>
        </li>
        <li>
          <template v-if="currentUser.email">
            <a href="#" @click.prevent="logout()">退出登录</a>
          </template>
          <template v-else>
            <router-link :to="{name: 'LoginView'}" replace>登录豆瓣</router-link>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
  import { mapGetters } from 'vuex'
  export default {
    name: 'sub-nav',
    props: {
        mold: {
          type: String,
          default: 'quickNav'
        }
    },
    data () {
        return {}
    },
    computed: {
      currentLink: function () {
          return this.currentUser().name ? 'StatusView' : 'LoginView'
      },
      holder: function () {
          return this.currentUser.name ? this.currentUser.name : '请先登录'
      },
      ...mapGetters(['currentUser'])
    },
    methods: {
        logout () {
          this.$store.commit({
            type: 'logout'
          })
          this.$router.push({name: 'HomeView'})
        }
      }
    }
  }
</script>
<style lang="scss">

</style>
