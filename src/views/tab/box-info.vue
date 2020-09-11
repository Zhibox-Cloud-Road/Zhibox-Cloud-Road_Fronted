<template>
  <div class="zhiBox-container">
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="zhiBox-model">
          <el-image style="width: 100%; height: 275px" :src="url"></el-image>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="zhiBox-data">
          <info-chart></info-chart>
        </div>
      </el-col>
    </el-row>
    <div class="zhiBox-line">
      <line-chart :chart-data="lineChartData" style="margin-left:0px;" />
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
// import GithubCorner from '@/components/GithubCorner'
import LineChart from "./components/LineChart";
import InfoChart from "./components/InfoChart";

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};

export default {
  name: "DashboardAdmin",
  components: {
    LineChart,
    InfoChart,
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      url:
        "https://6e61-natto-jpg89-1301686020.tcb.qcloud.la/Zhibox/untitled.41.png?sign=02229c8c148b7e52d6ee949fd9e89034&t=1599793225",
    };
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
  },
};
</script>


<style>
.space {
  height: 0.1px;
}
.zhiBox-container {
  height: calc(100vh);
  background-color: #f0f2f5;
}
.zhiBox-model {
  margin-top: 20px;
  margin-left: 20px;
  background-color: white;
  box-shadow: 2px 2px 5px #e2e2e2;
  border-radius: 4px;
  min-height: 275px;
}
.zhiBox-data {
  margin-top: 20px;
  margin-right: 20px;
  background-color: white;
  border-radius: 4px;
  min-height: 275px;
}
.zhiBox-line {
  overflow: hidden;
  padding-top: 20px;
  margin: 20px;
  background-color: white;
  border-radius: 4px;
  min-height: 350px;
}
</style>