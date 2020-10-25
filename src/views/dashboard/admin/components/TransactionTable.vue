<template>
  <!-- <el-table :data="list" style="width: 100%;padding-top: 9.058rpx;">
    <el-table-column label="员工姓名" min-width="50">
      <template >
        {{ orderNoFilter }}
      </template>
    </el-table-column>
    
    <el-table-column label="员工编号" width="195" align="left">
      <template slot-scope="scope">
        ¥{{ scope.row.price | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column label="状态" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>-->
  <div>
    <!-- <div class="rizhi">
      <span>回收日志 </span>
    </div> -->
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column
        fixed
        prop="name"
        label="员工姓名"
        align="center"
      ></el-table-column>
      <el-table-column
        fixed
        prop="id"
        label="员工编号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="num"
        label="回收数量"
        align="center"
      ></el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <el-tag type="success"> 已回收 </el-tag>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "梅家豪",
          id: 10,
          date: "2020-10-12 17:13:26",
          num: 15,
          status: 1,
        },
        {
          name: "董嘉欣",
          id: 11,
          date: "2020-10-12 12:34:28",
          num: 18,
          status: 1,
        },
        {
          name: "马菀君",
          id: 12,
          date: "2020-10-17 13:14:23",
          num: 18,
          status: 1,
        },
        {
          name: "付永杰",
          id: 13,
          date: "2020-10-17 15:08:15",
          num: 20,
          status: 1,
        },
        {
          name: "张京",
          id: 7,
          date: "2020-10-12 16:14:35",
          num: 19,
          status: 1,
        },
        {
          name: "申跨杰",
          id: 8,
          date: "2020-10-12 17:13:26",
          num: 15,
          status: 1,
        }
      ],
    };
  },
};
</script>
<style scope lang="scss">
.rizhi  {
  margin-left: 420px;
  color: black;
  font-size: 32px;
  font-weight: 600;
}
</style>
  <!--
<script>
import { transactionList } from "@/api/remote-search";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: "success",
        pending: "danger",
      };
      return statusMap[status];
    },
    orderNoFilter(str) {
      return str.substring(0, 30);
    },
  },
  data() {
    return {
      list: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      transactionList().then((response) => {
        this.list = response.data.items.slice(0, 8);
      });
    },
  },
};
</script>
--!>
