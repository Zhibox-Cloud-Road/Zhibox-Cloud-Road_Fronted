<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="kehuishoulaji" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">可回收垃圾</div>
          <count-to
            :start-val="0"
            :end-val="recycled"
            :duration="2600"
            class="card-panel-num"
          />
          <span class="card-panel-num">吨</span>
          <!-- <count-to :start-val='0' :end-val='2017' :duration='4000' :decimals='0' :separator=',' :prefix="¥" :suffix=' rmb' :autoplay=false > -->
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="youhailaji" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">有害垃圾</div>
          <count-to
            :start-val="0"
            :end-val="hazardous"
            :duration="3000"
            class="card-panel-num"
          />
          <span class="card-panel-num">吨</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="chuyulaji" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">厨余垃圾</div>
          <count-to
            :start-val="0"
            :end-val="kitchen"
            :duration="3200"
            class="card-panel-num"
          />
          <span class="card-panel-num">吨</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="qitalaji" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">其他垃圾</div>
          <count-to
            :start-val="0"
            :end-val="other"
            :duration="3600"
            class="card-panel-num"
          />
          <span class="card-panel-num">吨</span>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from "vue-count-to";

export default {
  components: {
    CountTo,
  },
  data() {
    return {
      recycled: "",
      hazardous: "",
      kitchen: "",
      other: "",
    };
  },
  methods: {
    // handleSetLineChartData(type) {
    //   this.$emit('handleSetLineChartData', type)
    // },
  },
  created() {
    this.$axios.get("http://localhost:3001/recovery").then((response) => {
      console.log("111", response.data);
      (this.recycled = response.data[0].recycled),
        (this.hazardous = response.data[0].hazardous),
        (this.kitchen = response.data[0].kitchen),
        (this.other = response.data[0].kitchen);
    });
  },
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #2f75bd;
      }

      .icon-message {
        background: #d30019;
      }

      .icon-money {
        background: #359952;
      }

      .icon-shopping {
        background: #5a5c5b;
      }
    }

    .icon-people {
      color: #2f75bd;
    }

    .icon-message {
      color: #d30019;
    }

    .icon-money {
      color: #359952;
    }

    .icon-shopping {
      color: #5a5c5b;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
