<template>
  <div class="main">
    <div class="title">购物清单</div>
    <el-table
      :data="tableData"
      border
      max-height="500"
      :summary-method="getSummaries"
      :show-summary="true"
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="goodname" label="商品名"></el-table-column>
      <el-table-column prop="goodsnumber" label="数量/件"></el-table-column>
      <el-table-column prop="goodsprice" label="单价（元）"></el-table-column>
      <el-table-column prop="goodsamout" label="单项总金额（元）"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="sub">
      <el-button type="success">确认支付</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "payindex",
  data() {
    return {
      tableData: [
      ]
    };
  },
  components: {},
  methods: {
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        if (index === 1) {
          sums[index] = "N/A";
          return;
        }
        if (index === 2) {
          sums[index] = "N/A";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "";
        }
      });

      return sums;
    },
    deleteRow(index,data){
        console.log(index,data)
    }
  },
  created() {
      var user=JSON.parse(window.localStorage.user)
      let id = user.id
        this.axios.post('getPayItem',{
            uid:id
        }).then(res=>{
            this.tableData=res.data
        }).catch({

        })
  }
};
</script>
<style scoped lang="scss">
.sub {
  float: right;
  margin: 2%;
}
.title {
  margin-top: 5%;
  font-size: 25px;
  font-weight: 600;
  background-color: #ffffff;
  padding: 1%;
}
</style>