<template>
  <div>
    <div class="logo">
      <a>
        <img src="" class="logo">
      </a>
    </div>
    <el-menu
      ref="sideMenu"
      router unique-opened 
      class="el-menu-vertical-demo slide" 
      background-color="#545c64" 
      text-color="#fff" 
      active-text-color="#ffd04b"
      :default-active="activeMenu"
      @open="setMenuOpen"
      @select="setActiveMenu"
    >
      <!-- <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item> -->

      <el-submenu :index="'' + i" v-for="(item, i) in menuArr" :key="i" v-show="item.sonLength == 1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="(item2, j) in item.children" :key="j">
          <el-menu-item :index="item2.path">
            <i class="el-icon-tickets"></i>
            {{item2.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  props:{},
  data(){
    return {
      currentOpen: '0',
      menuArr: [
        {
          "access": "resource_access",
          "children": [
            {
              "access": "upload_access",
              "children": null,
              "hasSub": 0,
              "id": 211,
              "name": "地图标注",
              "path": "/map/maplabel",
              "showMenu": 1,
              "url": null
            },
          ],
          "hasSub": 1,
          "id": 21,
          "name": "地图标注",
          "path": "/map",
          "showMenu": 1,
          "url": null
        },
        {
          "access": "resource_access",
          "children": [
            {
                "access": "library_access",
                "children": null,
                "hasSub": 0,
                "id": 231,
                "name": "申请单列表",
                "path": "/resource/library",
                "showMenu": 1,
                "url": null
            },
          ],
          "hasSub": 1,
          "id": 23,
          "name": "穿缆申请管理",
          "path": "/resource",
          "showMenu": 1,
          "url": null
        },
        {
          "access": "customer_access",
          "children": [
            {
                "access": "list_access",
                "children": null,
                "hasSub": 0,
                "id": 245,
                "name": "客户列表",
                "path": "/customer/list",
                "showMenu": 1,
                "url": null
            },
          ],
          "hasSub": 1,
          "id": 24,
          "name": "客户管理",
          "path": "/customer",
          "showMenu": 1,
          "url": null
        },
        {
          "access": "user_access",
          "children": [
            {
                "access": "list_access",
                "children": null,
                "hasSub": 0,
                "id": 255,
                "name": "用户列表",
                "path": "/user/list",
                "showMenu": 1,
                "url": null
            },
          ],
          "hasSub": 1,
          "id": 25,
          "name": "用户管理",
          "path": "/user",
          "showMenu": 1,
          "url": null
        }
      ],
      breadArr: [],
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法，防止手动输入路由，而不是点击菜单项
    '$route': 'fetchData'
  },
  computed: {
    ...mapGetters([
      'activeMenu',
      'breadcrumb'
    ])
  },
  created () {
    this.breadArr = this.breadcrumb
    // 组件创建完后获取数据，
    this.fetchData()
    // 通过后端接口获取菜单组
    this.getMenu()
  },
  mounted(){
    // this.$refs.sideMenu.open(this.app.menuOpen)
  },
  methods:{
    fetchData () {
      console.log(this.$route);
      this.currentOpen = this.$route.path;
      this.breadArr[1] = this.$route.meta.title;
      this.$store.commit('set_ActiveMenu', this.$route.path)
      this.$store.commit('set_Breadcrumb', this.breadArr)
    },
    getMenu() {
      this.menuArr.forEach(item => {
        if(item.children == null || item.children.length == 0) {
          item.sonLength = 0;
        } else {
          item.sonLength = 1;
        }
      })
    },
    setMenuOpen(val) {
      this.breadArr = [];
      this.breadArr[0] = this.menuArr[val].name;
      console.log(this.breadArr);
    },
    setActiveMenu(val) {}
  },
}
</script>
<style lang="scss" scoped>
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  img {
    width: 180px;
    height: 36px;
    display: inline-block;
    background-color: aliceblue;
    margin-top: 14px;
  }
}
</style>