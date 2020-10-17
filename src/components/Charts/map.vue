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
      // 热力图的点数据，lng：点的经度 点的lat纬度 count：点的热力程度
      points: [
        { lng: 117.15205, lat: 39.15205, count: 50 },
        { lng: 117.15205, lat: 39.15205, count: 51 },
        { lng: 117.15205, lat: 39.15205, count: 15 },
        { lng: 117.15205, lat: 39.15205, count: 40 },
        { lng: 117.15205, lat: 39.09712, count: 100 },
        { lng: 117.15215, lat: 39.15205, count: 100 },
        { lng: 117.15215, lat: 39.09712, count: 100 },
        { lng: 117.15099, lat: 39.09715, count: 100 },
        { lng: 117.15099, lat: 39.09715, count: 100 },
        { lng: 117.15099, lat: 39.09715, count: 100 },
        { lng: 117.15099, lat: 39.15205, count: 100 },
        { lng: 117.15099, lat: 39.09715, count: 100 },
        { lng: 117.15099, lat: 39.09755, count: 100 },
        { lng: 117.15099, lat: 39.09755, count: 100 },
        { lng: 117.14099, lat: 39.09755, count: 100 },
        { lng: 117.14099, lat: 39.09855, count: 100 },
        { lng: 117.14099, lat: 39.09855, count: 100 },
        { lng: 117.14099, lat: 39.09855, count: 100 },
        { lng: 117.14099, lat: 39.09855, count: 100 },
        { lng: 117.15099, lat: 39.09855, count: 100 },
        { lng: 117.129934,lat: 39.094862, count: 100 },
        { lng: 117.131946,lat: 39.099902, count: 100 },
        { lng: 117.175711,lat: 39.092566, count: 100 },
        { lng: 117.168884,lat: 39.087413, count: 100 },
        { lng: 117.16371,lat: 39.082484, count: 100 },
        { lng: 117.169747,lat: 39.105894, count: 100 },
        { lng: 117.150487,lat: 39.089934, count: 100 },
        { lng: 117.144953,lat: 39.085845, count: 100 },
        { lng: 117.13482,lat: 39.109813, count: 100 },
        { lng: 117.177652,lat: 39.109141, count: 100 },
        { lng: 117.15178,lat: 39.108301, count: 100 },
        { lng: 117.121454,lat: 39.083716, count: 100 },
        { lng: 117.14099, lat: 39.1, count: 100 },
        { lng: 117.15099, lat: 39.1, count: 100 },
        { lng: 117.14099, lat: 39.1, count: 100 },
        { lng: 117.14099, lat: 39.1, count: 100 },
        { lng: 117.15099, lat: 39.10155, count: 100 },
        { lng: 117.14199, lat: 39.1, count: 100 },
        { lng: 117.15199, lat: 39.1, count: 100 },
        { lng: 117.14199, lat: 39.1, count: 100 },
        { lng: 117.14199, lat: 39.1, count: 100 },
        { lng: 117.16199, lat: 39.10155, count: 100 },
        { lng: 117.15399, lat: 39.1, count: 100 },
        { lng: 117.14399, lat: 39.10155, count: 100 },
      ],
      map: "", // 保存地图实例
      centerLng: "117.15205", // 经度
      centerLat: "39.09710", // 纬度
      heatmapOverlay: {}, // 热力图覆盖物
    };
  },
  methods: {
    // 创建和初始化地图函数
    initMap() {
      this.createMap(); // 创建地图
      this.initHeatMap(); // 添加热力图覆盖物
    },
    // 方法 - 创建地图
    createMap() {
      // 在百度地图容器中创建地图实例
      let map = new window.BMap.Map("container");
      // 将map变量存储在全局
      this.map = map;
      // 设定地图的中心点和坐标
      let point = new BMap.Point(this.centerLng, this.centerLat);
      // 设置中心点坐标和地图级别
      this.map.centerAndZoom(point, 15);
      // 允许滚轮缩放
      this.map.enableScrollWheelZoom(point, 15);
      // 添加左上角缩放比例尺(offset: new BMap.Size(0, 0)为比例尺的坐标位置)
      var opts = { offset: new BMap.Size(10, 10) };
      this.map.addControl(new BMap.NavigationControl(opts));
      // 设置地图默认缩放比例
      this.map.setZoom(15);
    },
    // 方法 - 添加热力图覆盖物
    initHeatMap() {
      this.heatmapOverlay = new window.BMapLib.HeatmapOverlay({
        // 热力图的每个点的半径大小
        radius: BMAP_POINT_SIZE_SMALL * 4,
        // 热力的透明度0~1
        opacity: 0.8,
        // 其中 key 表示插值的位置0~1，value 为颜色值
        gradient: {
          0: "rgb(102, 255, 0)",
          0.5: "rgb(255, 170, 0)",
          1: "rgb(255, 0, 0)",
        },
      });
      // 清除图层(每次重新调用需要清除上一个覆盖物图层)
      this.map.clearOverlays();
      // 添加热力覆盖物
      this.map.addOverlay(this.heatmapOverlay);
      this.heatmapOverlay.setDataSet({ data: this.points, max: 100 });
      // 显示热力图，隐藏为this.heatmapOverlay.hide();
      this.heatmapOverlay.show();

      // this.heatmapOverlay.hide();
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