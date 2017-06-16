<template>
  <div class="sub-nav">
    <div class="navBottom" v-if="mold === 'navBottom'">
      <div class="nav-item">
        <router-link to="{name:'RegisterView'}">注册账号</router-link>
        <template v-if="currentUser.email">
          <a href="#" @click.prevent="logout()">退出登录</a>
        </template>
        <template v-else>
          <router-link to="{name: 'LoginView}" replace>登录豆瓣</router-link>
        </template>
      </div>
      <div class="nav-item">
        <a href="https://movie.douban.com/">使用桌面版</a>
        <a href="#">使用豆瓣App</a>
      </div>
    </div>

  <!--quick start nav-->
    <div class="quickNav" v-if="mold === 'quickNav">
      <ul class="quick-nav">
        <li>
          <router-link :to="{name: 'MovieView'}">影院热映</router-link>
        </li>
        <li>
          <router-link :to="{name: 'StatusView'}">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link :to="{name: 'RegisterView'}">注册账号</router-link>
        </li>
        <li>
          <template v-if="currentUser.email">
            <a href="#" @click.prevent="logout()">退出登录</a>
          </template>
          <template v-else>
            <router-link :to="{name: 'loginView'}" replace>登录豆瓣</router-link>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

</script>
<style>

</style>
