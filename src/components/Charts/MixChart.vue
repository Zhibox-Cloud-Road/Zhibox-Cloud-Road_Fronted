<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "300px",
    },
    height: {
      type: String,
      default: "300px",
    },
  },
  data() {
    return {
      chart: null,
      recycled: [],
      hamful: [],
      kitchen: [],
      other: [],
      poplutation: [],
    };
  },
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
      this.chart = echarts.init(document.getElementById(this.id));
      this.$axios.get("http://localhost:3001/predict").then((response) => {
        // console.log(response.data);
        //返回的是一个对象   其实是数组
        //todo  由于js只有8种基本数据类型  而Array属于Object类型的
        // this.poplutation =  response.data.map((item) => item.people);
        this.poplutation.push(response.data.map((item) => item.people));
        this.recycled.push(response.data.map((item) => item.recycled));
        // this.recycled = response.data.map((item) => item.recycled);
        this.hamful = response.data.map((item) => item.hazardous);
        this.kitchen = response.data.map((item) => item.kitchen);
        this.other = response.data.map((item) => item.other);
        // console.log("111", this.poplutation[0]);
        // console.log("mwj", typeof this.poplutation[0]);
        console.log("11112222", this.recycled[0]);
        // console.log("333", this.hamful);
        // console.log("444", this.kitchen);
        // console.log("555", this.other);
        const xData = (function () {
          const data = [];
          for (let i = 1; i < 13; i++) {
            data.push(i + "月");
          }
          return data;
        })();
        this.chart.setOption({
          backgroundColor: "#344b58",
          title: {
            text: "人流量与垃圾量预测",
            x: "20",
            top: "20",
            textStyle: {
              color: "#fff",
              fontSize: "22",
            },
            subtextStyle: {
              color: "#90979c",
              fontSize: "16",
            },
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          grid: {
            // 网格配置  grid可以控制线形图 柱状图 图表大小
            left: "5%",
            right: "5%",
            borderWidth: 0,
            top: 150,
            bottom: 95,
            textStyle: {
              color: "#fff",
            },
          },
          legend: {
            x: "5%",
            top: "10%",
            textStyle: {
              color: "#90979c",
            },
            //todo series中有了name值这里的data可以删掉
            // data: ['可回收', '有害','厨余垃圾','其他','人员预测']
          },
          calculable: true,
          xAxis: [
            {
              type: "category",
              axisLine: {
                lineStyle: {
                  color: "#90979c",
                },
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitArea: {
                show: false,
              },
              axisLabel: {
                interval: 0,
              },
              data: xData,
            },
          ],
          yAxis: [
            {
              type: "value",
              splitLine: {
                show: false,
              },
              axisLine: {
                lineStyle: {
                  color: "#90979c",
                },
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                interval: 0,
              },
              splitArea: {
                show: false,
              },
            },
          ],
          dataZoom: [
            {
              show: true,
              height: 30,
              xAxisIndex: [0],
              bottom: 30,
              start: 10,
              end: 80,
              handleIcon:
                "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
              handleSize: "110%",
              handleStyle: {
                color: "#d3dee5",
              },
              textStyle: {
                color: "#fff",
              },
              borderColor: "#90979c",
            },
            {
              type: "inside",
              show: true,
              height: 15,
              start: 1,
              end: 35,
            },
          ],
          series: [
            {
              name: "可回收",
              type: "bar",
              stack: "total",
              barMaxWidth: 35,
              barGap: "10%",
              itemStyle: {
                normal: {
                  color: "rgba(255,144,128,1)",
                  label: {
                    show: true,
                    textStyle: {
                      color: "#fff",
                    },
                    position: "insideTop",
                    formatter(p) {
                      return p.value > 0 ? p.value : "";
                    },
                  },
                },
              },
              data: this.recycled[0],
              // data: [
              //   660,
              //   1917,
              //   2455,
              //   2610,
              //   1719,
              //   1433,
              //   1544,
              //   3285,
              //   5208,
              //   3372,
              //   2484,
              //   4078,
              // ]
            },

            {
              name: "有害",
              type: "bar",
              stack: "total",
              itemStyle: {
                normal: {
                  color: "rgba(0,191,183,1)",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    formatter(p) {
                      return p.value > 0 ? p.value : "";
                    },
                  },
                },
              },
              // data: [
              //   327,
              //   1336,
              //   507,
              //   1500,
              //   800,
              //   442,
              //   204,
              //   1390,
              //   1200,
              //   951,
              //   381,
              //   220,
              // ],
              data: this.hamful,
            },
            {
              name: "厨余",
              type: "bar",
              stack: "total",
              itemStyle: {
                normal: {
                  color: "#3e8fe2",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    formatter(p) {
                      return p.value > 0 ? p.value : "";
                    },
                  },
                },
              },
              // data: [
              //   500,
              //   1776,
              //   507,
              //   1200,
              //   800,
              //   482,
              //   204,
              //   1390,
              //   1001,
              //   951,
              //   381,
              //   210,
              // ],
              data: this.kitchen,
            },
            {
              name: "其他",
              type: "bar",
              stack: "total",
              itemStyle: {
                normal: {
                  color: "#6c56ef",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    formatter(p) {
                      return p.value > 0 ? p.value : "";
                    },
                  },
                },
              },
              // data: [
              //   327,
              //   1456,
              //   456,
              //   1100,
              //   846,
              //   452,
              //   209,
              //   1300,
              //   960,
              //   951,
              //   381,
              //   200,
              // ],
              data: this.other,
            },
            {
              name: "人流量",
              type: "line",
              stack: "total",
              symbolSize: 10,
              symbol: "circle",
              itemStyle: {
                normal: {
                  color: "rgba(252,230,48,1)",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    formatter(p) {
                      return p.value > 0 ? p.value : "";
                    },
                  },
                },
              },
              //axios 请求回来的数据
              data: this.poplutation[0],
            },
          ],
        });
      });

      // console.log("111", this.poplutation);
      console.log("mwj", typeof this.poplutation[0]);
      console.log("222", this.recycled[0]);
      console.log("333", this.hamful);
      console.log("444", this.kitchen);
      console.log("555", this.other);
    },
  },
};
</script>
