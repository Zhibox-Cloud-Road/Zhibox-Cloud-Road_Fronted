<template lang="html">
    <div id="load">
        <!--存放百度地图容器-->
        <div id="container"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      map: "", // 保存地图实例
      center: [
        {
          centerLng: "117.10205", // 经度
          centerLat: "39.09703",
        },
        {
          centerLat1: "39.09703", // 纬度
          centerLng1: "117.10405",
        },
        {
          centerLat2: "39.09903", // 纬度
          centerLng2: "117.10205",
        },
      ],
    };
  },
  methods: {
    // 创建和初始化地图函数
    initMap() {
      this.createMap(); // 创建地图
    },
    // 方法 - 创建地图
    createMap() {
      // 在百度地图容器中创建地图实例
      let map = new window.BMap.Map("container");
      // 将map变量存储在全局
      this.map = map;
      // 设定地图的中心点和坐标
      let point = new BMap.Point(
        this.center[0].centerLng,
        this.center[0].centerLat
      );
      let point1 = new BMap.Point(
        this.center[1].centerLng1,
        this.center[1].centerLat1
      );
      let point2 = new BMap.Point(
        this.center[2].centerLng2,
        this.center[2].centerLat2
      );

      // 设置中心点坐标和地图级别
      this.map.centerAndZoom(point, 15);
      // 允许滚轮缩放
      this.map.enableScrollWheelZoom(point, 15);
      // 添加左上角缩放比例尺(offset: new BMap.Size(0, 0)为比例尺的坐标位置)
      var opts = { offset: new BMap.Size(10, 10) };
      this.map.addControl(new BMap.NavigationControl(opts));
      var marker = new BMap.Marker(point); // 创建标注
      var marker1 = new BMap.Marker(point1); // 创建标注
      var marker2 = new BMap.Marker(point2); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      map.addOverlay(marker1); // 将标注添加到地图中
      map.addOverlay(marker2); // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker1.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker2.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      // 设置地图默认缩放比例
      this.map.setZoom(15);
    },
  },
  mounted() {
    // 创建和初始化地图函数
    this.initMap();
  },
};
</script>

<style lang="scss">
#load {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
  border: #ccc solid 1px;
}
</style>