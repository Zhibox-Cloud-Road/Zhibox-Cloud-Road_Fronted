<template>
  <div></div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      charts: {
        // 按顺序排列从大到小
        cityList: ["38号点（1）", "38号点（2）", "15号点", "16号点", "24号点"],
        cityData: [7500, 6200, 5700, 4200, 3500],
      },
      top10CityList: charts.cityList,
      top10CityData: charts.cityData,
      color: ["#ff9500", "#02d8f9", "#027fff"],
      color1: ["#ffb349", "#70e9fc", "#4aa4ff"],
      lineY: [],
      lineT: [],
    };
  },
  mounted() {
    this.orgOptions = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>