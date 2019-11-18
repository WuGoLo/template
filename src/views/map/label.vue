<template>
  <div ref="mapdom" class="map"></div>
</template>

<script>
import Esrimap from './basemap'
export default {
  components:{},
  props:{},
  data(){
    return {
      Esrimap: null,
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){
    this.Esrimap = Esrimap.initMap(this.$refs.mapdom)
  },
  methods:{
    
  },
  beforeDestroy() {

  }
}
</script>
<style lang="scss" scoped>
  .map {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 800px;
  }
</style>