<template>
  <div>
    <div class="logo">
      <a>
        <img src="@/assets/images/logo.png" height="80px" class="logo">
      </a>
    </div>
    <el-menu
      ref="sideMenu"
      router unique-opened
      class="el-menu-vertical-demo slide"
      text-color="#fff"
      active-text-color="#6c85f7"
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
          <!-- <i class="el-icon-menu"></i> -->
          <span class="icon-box">
            <img :src="item.icon" alt="">
          </span>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="(item2, j) in item.children" :key="j">
          <el-menu-item :index="item2.path">
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
          "name": "地图管理",
          "path": "/map",
          "showMenu": 1,
          "url": null,
          "icon": "./static/01-1.png"
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
          "url": null,
          "icon": "./static/02-1.png"
        },
        {
          "access": "sales_access",
          "children": [
            {
                "access": "order_access",
                "children": null,
                "hasSub": 0,
                "id": 245,
                "name": "销售订单列表",
                "path": "/sales/order",
                "showMenu": 1,
                "url": null
            },
          ],
          "hasSub": 1,
          "id": 24,
          "name": "销售订单管理",
          "path": "/sales",
          "showMenu": 1,
          "url": null,
          "icon": "./static/03-1.png"
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
          "url": null,
          "icon": "./static/04-1.png"
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
          "url": null,
          "icon": "./static/05-1.png"
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
  text-align: center;
  a {
    display: block;
    width: 100%;
    margin: 30px auto;
  }
  img {
    display: inline-block;
  }
}
.icon-box {
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 10px;
  margin-right: 4px;
  img {
    display: inline-block;
    width: 16px;
    height: 16px;
  }
}
</style>
