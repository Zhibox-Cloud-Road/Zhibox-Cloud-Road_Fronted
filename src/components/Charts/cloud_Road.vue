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
          centerLng: "117.12210", // 经度
          centerLat: "39.15205",
        },
        {
          centerLat1: "39.15405", // 纬度
          centerLng1: "117.12310",
        },
        {
          centerLat2: "39.15705", // 纬度
          centerLng2: "117.12310",
        },
        {
          centerLat3: "39.156583", // 纬度
          centerLng3: "117.113476",
        },
        {
          centerLng4: "117.109308", // 经度
          centerLat4: "39.149924",
        },
        {
          centerLng5: "117.137335", // 经度
          centerLat5: "39.141585",
        },
        {
          centerLng6: "117.144522", // 经度
          centerLat6: "39.163185",
        },
        {
          centerLng7: "117.089905", // 经度
          centerLat7: "39.141138",
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
      let point3 = new BMap.Point(
        this.center[3].centerLng3,
        this.center[3].centerLat3
      );
      let point4 = new BMap.Point(
        this.center[4].centerLng4,
        this.center[4].centerLat4
      );
      let point5 = new BMap.Point(
        this.center[5].centerLng5,
        this.center[5].centerLat5
      );
      let point6 = new BMap.Point(
        this.center[6].centerLng6,
        this.center[6].centerLat6
      );
      let point7 = new BMap.Point(
        this.center[7].centerLng7,
        this.center[7].centerLat7
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
      var marker3 = new BMap.Marker(point3); // 创建标注
      var marker4 = new BMap.Marker(point4); // 创建标注
      var marker5 = new BMap.Marker(point5); // 创建标注
      var marker6 = new BMap.Marker(point6); // 创建标注
      var marker7 = new BMap.Marker(point7); // 创建标注

      map.addOverlay(marker); // 将标注添加到地图中
      map.addOverlay(marker1); // 将标注添加到地图中
      map.addOverlay(marker2); // 将标注添加到地图中
      map.addOverlay(marker3); // 将标注添加到地图中
      map.addOverlay(marker4); // 将标注添加到地图中
      map.addOverlay(marker5); // 将标注添加到地图中
      map.addOverlay(marker6); // 将标注添加到地图中
      map.addOverlay(marker7); // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker1.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker2.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker3.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker4.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker5.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker6.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      marker7.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
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