<template>
    <div class="list">
      <template v-if="mold === 'thumbnail'" v-for="item in items">
        <router-link class="thumbnail" :to="{name: 'HomeView', params: { id: item.id }}">
          <div class="content">
            <img :src="item.image_hlarge" alt="cover">
            <h3>{{item.title}}</h3>
            <p>{{item.content | subStr}}</p>
          </div>
          <div class="author">
            <span class="name">{{item.category_name}}</span>
            <span class="label" v-if="item.subcategory_name">
              本活动来自栏目 {{item.subcategory_name}}
            </span>
          </div>
        </router-link>
      </template>
      <template v-if="mold === 'basic'">
        <ul class="basic">
          <li v-for="item in items">
            <a href="#">
              <h3>{{item.title}}</h3>
              <span class="info">{{item.comments}}</span>
            </a>
          </li>
        </ul>
      </template>
    </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    mold: {
        type: String,
        default: 'basic'
    },
    items: {
        type: Array,
        required: true
    }
  },
  data () {
      return {

      }
  },
  filters: {
      subStr: function (value) {
        value.replace(/<.+>|\s/, '')
        return value.slice(0, 30)
      }
  }
}
</script>
<style lang="scss">

</style>
