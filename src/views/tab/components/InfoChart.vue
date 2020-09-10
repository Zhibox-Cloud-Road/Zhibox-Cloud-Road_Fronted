<template>
  <div id="123" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from "echarts";

export default {
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
      default: "275px",
    },
  },
  data() {
    return {
      chart: null,
      info: [],
    };
  },
  created() {},
  mounted() {
    this.initChart();
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
      this.chart = echarts.init(document.getElementById("123"));
      let myColor = ["#D96B00", "#5a5c5b", "#359952", "#d30019", "#2f75bd"];
      // axios调用接口
      this.$axios.get("http://123.57.56.38:3001/box-data").then((response) => {
        (this.info.push(parseInt(response.data[0].SMOKE * 100)),
        this.info.push(parseInt(response.data[0].VALUME4*10/3))),
          this.info.push(parseInt(response.data[0].VALUME3*10/3)),
          this.info.push(parseInt(response.data[0].VALUME2*10/3)),
          this.info.push(parseInt(response.data[0].VALUME1*10/3));
        console.log(this.info);
        // 设置进去
        this.chart.setOption({
          grid: {
            left: "15%",
            top: "10%",
            bottom: "10%",
            // containLabel: true
          },
          xAxis: {
            show: false,
          },
          yAxis: [
            {
              inverse:false,//是否反转坐标轴
              type: "category",
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                color: "black",
              },
              data: [
                "气体浓度",
                "其他垃圾",
                "厨余垃圾",
                "有害垃圾",
                "可回收垃圾",
              ],
            },
            {
              type: "category",
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                color: "#ccc",
              },

              data: [1000, 30, 30, 30, 30],
            },
          ],
          series: [
            // 第二个柱子变成框框压在第一个身上
            {
              name: "条",
              type: "bar",
              //axios请求回来的数据
              data: this.info,
              yAxisIndex: 0,
              // todo 柱子之间的间距
              barCategoryGap: 50,
              // 柱子的宽度
              barWidth: 20,
              // todo 修改第一组柱子的圆角
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  // 此时的color可以修改柱子的颜色
                  color: function (params) {
                    // console.log(params)
                    // params是传进来的柱子对象
                    const { dataIndex } = params;
                    return myColor[dataIndex];
                  },
                },
              },
              // 显示柱子里的文字
              label: {
                show: true,
                position: "inside",
                formatter: "{c}%", //data中的数据
              },
            },
            {
              name: "框",
              type: "bar",
              // 第二个框框的data
              data: [100, 100, 100, 100, 100],
              // todo 柱子之间的间距
              barCategoryGap: 50,
              yAxisIndex: 1,
              // 柱子的宽度
              barWidth: 20,
              // todo 修改第一组柱子的圆角
              itemStyle: {
                normal: {
                  color: "none",
                  borderColor: "#eee",
                  borderWidth: 1,
                  barBorderRadius: 5,
                  // 此时的color可以修改柱子的颜色
                },
              },
            },
          ],
        });
      });
      // this.chart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style>
</style>