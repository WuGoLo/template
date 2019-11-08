<template>
  <el-container class="home">
    <el-aside>
      <Side-bar></Side-bar>
    </el-aside>
    <el-container class="content">
      <el-header>
        <Header-bar></Header-bar>
      </el-header>
      <el-main>
        <div class="main-box">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>  
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { HeaderBar, SideBar } from './middle';
export default {
  components: { HeaderBar, SideBar },
  data() {
    return {
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
                "id": 230,
                "name": "销售合同列表",
                "path": "resource/library",
                "showMenu": 1,
                "url": null
            },
          ],
          "hasSub": 1,
          "id": 22,
          "name": "销售合同管理",
          "path": "/resource",
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
                "path": "resource/library",
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
          "access": "resource_access",
          "children": [
            {
                "access": "library_access",
                "children": null,
                "hasSub": 0,
                "id": 235,
                "name": "客户列表",
                "path": "resource/library",
                "showMenu": 1,
                "url": null
            },
          ],
          "hasSub": 1,
          "id": 24,
          "name": "客户管理",
          "path": "/resource",
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
                "id": 235,
                "name": "用户列表",
                "path": "/user/list",
                "showMenu": 1,
                "url": null
            },
          ],
          "hasSub": 1,
          "id": 24,
          "name": "用户管理",
          "path": "/user",
          "showMenu": 1,
          "url": null
        }
      ]
    }
  },
  beforeCreate () {
    // if (!localStorage.getItem('token')) {
    //   this.$router.push({
    //     name: 'login'
    //   })
    // }
  },
  methods: {
    // 退出功能
    logout () {
      localStorage.clear()
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
  }
  .main-box {
    height: 100%;
    background-color: #fff;
  }
</style>
