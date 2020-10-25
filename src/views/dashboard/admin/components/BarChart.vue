<template>
    <div :class="className" :style="{ height: height, width: width }">
    </div>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

const animationDuration = 6000;

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "320px",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      //$el 获取vue实例关联的 dom元素
      this.chart = echarts.init(this.$el, "macarons");
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          top: 10,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
              "星期日",
            ],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "可回收垃圾",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            backgroundStyle: {
              color: "rgb(64, 119, 191)",
            },
            data: [79, 52, 200, 334, 390, 330, 2020],
            animationDuration,
          },
          {
            name: "有害垃圾",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            backgroundStyle: {
              color: "#d30019",
            },
            data: [80, 52, 200, 334, 390, 330, 220],
            animationDuration,
          },
          {
            name: "厨余垃圾",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            backgroundStyle: {
              color: "#359952",
            },
            data: [30, 52, 200, 334, 390, 330, 220],
            animationDuration,
          },
          {
            name: "其他垃圾",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            backgroundStyle: {
              color: "#5a5c5b",
            },
            data: [30, 52, 200, 334, 390, 330, 220],
            animationDuration,
          },
        ],
      });
    },
  },
};
</script>
<style>
</style>
