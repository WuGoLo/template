<template>
  <div>
    这是地图页面
    <div ref="mapdom"></div>
  </div>
</template>

<script>
import Esrimap from './basemap'
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){
    Esrimap.init(this.$refs.mapdom)
  },
  methods:{},
}
</script>
<style lang="scss" scoped>
</style>