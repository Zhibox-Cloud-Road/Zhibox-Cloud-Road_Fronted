<template>
  <div class="box-container">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="box-list" @click="handleSetLineChartData('newVisitis')">
          <div class="box-pic">
            <el-image style="width: 100%; height: 100%" :src="url"></el-image>
          </div>
          <div class="box-id">ZHIBOX-N01</div>
          <div class="data">
            <div class="data-line">
              <div class="circle-orange"></div>
              容量:
              <count-to
                :start-val="startVal"
                :end-val="capacity"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />%
            </div>
            <div class="data-line">
              <div class="circle-blue"></div>
              温度:
              <count-to
                :start-val="startVal"
                :end-val="temprature"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />℃
            </div>
            <div class="data-line">
              <div class="circle-red"></div>
              气体浓度:
              <count-to
                :start-val="startVal"
                :end-val="smoke"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box-list" @click="handleSetLineChartData('messages')">
          <div class="box-pic">
            <el-image style="width: 100%; height: 100%" :src="url"></el-image>
          </div>
          <div class="box-id">ZHIBOX-N02</div>

          <div class="data">
            <div class="data-line">
              <div class="circle-orange"></div>
              容量:
              <count-to
                :start-val="startVal"
                :end-val="40"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />%
            </div>
            <div class="data-line">
              <div class="circle-blue"></div>
              温度:
              <count-to
                :start-val="startVal"
                :end-val="29"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />℃
            </div>
            <div class="data-line">
              <div class="circle-red"></div>
              气体浓度:
              <count-to
                :start-val="startVal"
                :end-val="523"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box-list" @click="handleSetLineChartData('purchases')">
          <div class="box-pic">
            <el-image style="width: 100%; height: 100%" :src="url"></el-image>
          </div>
          <div class="box-id">ZHIBOX-N03</div>

          <div class="data">
            <div class="data-line">
              <div class="circle-orange"></div>
              容量:
              <count-to
                :start-val="startVal"
                :end-val="80"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />%
            </div>
            <div class="data-line">
              <div class="circle-blue"></div>
              温度:
              <count-to
                :start-val="startVal"
                :end-val="30"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />℃
            </div>
            <div class="data-line">
              <div class="circle-red"></div>
              气体浓度:
              <count-to
                :start-val="startVal"
                :end-val="534"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box-list" @click="handleSetLineChartData('shoppings')">
          <div class="box-pic">
            <el-image style="width: 100%; height: 100%" :src="url"></el-image>
          </div>
          <div class="box-id">ZHIBOX-N04</div>

          <div class="data">
            <div class="data-line">
              <div class="circle-orange"></div>
              容量:
              <count-to
                :start-val="startVal"
                :end-val="45"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />%
            </div>
            <div class="data-line">
              <div class="circle-blue"></div>
              温度:
              <count-to
                :start-val="startVal"
                :end-val="31"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />℃
            </div>
            <div class="data-line">
              <div class="circle-red"></div>
              气体浓度:
              <count-to
                :start-val="startVal"
                :end-val="546"
                :duration="4000"
                :decimals="0"
                :autoplay="true"
              />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="chart">
      <line-chart :chart-data="lineChartData" style="margin-left: 0px" />
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
import LineChart from "./components/LineChart";

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
  components: { CountTo, LineChart },
  data() {
    return {
      startVal: 0,
      capacity: 60,
      temprature: 26,
      smoke: 548,
      lineChartData: lineChartData.newVisitis,
      url:
        "https://6e61-natto-jpg89-1301686020.tcb.qcloud.la/Zhibox/untitled.32.png?sign=a6f236f38a1a98696064922a51d9b683&t=1599793109",
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
.box-id {
  text-align: center;
  font-size: 14px;
  color: rgb(145, 145, 145);
}
.circle-red {
  margin-right: 5px;
  display: inline-block;
  border-radius: 10px;
  height: 10px;
  width: 10px;
  background-color: red;
}
.circle-blue {
  margin-right: 5px;
  display: inline-block;
  border-radius: 10px;
  height: 10px;
  width: 10px;
  background-color: #1890ff;
}
.data-line {
  margin-bottom: 15px;
}
.data {
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.circle-orange {
  margin-right: 5px;
  display: inline-block;
  border-radius: 10px;
  height: 10px;
  width: 10px;
  background-color: orange;
}
.box-pic {
  margin: 10px;
  background-color: rgb(247, 247, 247);
  border-radius: 4px;
  height: 150px;
}
.space {
  height: 18px;
  background-color: #f0f2f5;
}
.chart {
  padding-top: 1px;
  margin: 20px;
  background-color: white;
  border-radius: 4px;
  min-height: 350px;
}
.el-col {
  border-radius: 4px;
}
.box-list {
  padding-top: 1px;
  margin-top: 20px;
  margin-right: 22px;
  margin-left: 22px;
  background-color: white;
  border-radius: 4px;
  min-height: 310px;
  cursor: pointer;
}
.box-container {
  height: calc(100vh);
  background-color: #f0f2f5;
}
</style>