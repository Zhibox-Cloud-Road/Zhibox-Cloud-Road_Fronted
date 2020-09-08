<template>
  <div class="box-container">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="box-list"></div>
      </el-col>
      <el-col :span="6">
        <div class="box-list"></div>
      </el-col>
      <el-col :span="6">
        <div class="box-list"></div>
      </el-col>
      <el-col :span="6">
        <div class="box-list"></div>
      </el-col>
    </el-row>
    <div class="chart">12</div>
    <div class="space"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.space{
    height: 18px;
    background-color: #f0f2f5;
}
.chart {
  padding-top: 20px;
  margin-top: 35px;
  margin-left: 50px;    
  margin-right: 50px;
  background-color: white;
  border-radius: 4px;
  height: 350px;
}
.el-col {
  border-radius: 4px;
}
.box-list {
  margin-top: 20px;
  margin-right: 50px;
  margin-left: 50px;
  background-color: #ccc;
  border-radius: 4px;
  min-height: 275px;
}
.box-container {
  background-color: #f0f2f5;
}
</style>