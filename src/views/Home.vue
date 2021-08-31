<template>
  <div class="home">
   
    <div class="headerDiv">
      <div class="header">
        <div @click="TypeSwitchChange">{{ TypeSwitchName }}</div>
      </div>
      <div class="header">
        <div @click="SimpleDialog">关于本站</div>
      </div>
      <div class="header">
        <div @click="AdminPsInputChange">管理员选项</div>
      </div>
    </div>
    <div class="bg">
      <img
        src="http://api.btstu.cn/sjbz/?lx=fengjing"
        alt="风景"
        @load="loadImage"
      />
    </div>
    <div class="search">
      <searchBox />
    </div>
    <largeIcon />
    <div v-if="isLoadingCompleted">
      <template v-if="TypeSwitch">
        <massaIntermedia />
      </template>
      <template v-else>
        <synthesizeArea />
      </template>
    </div>

    <mu-dialog title="当前版本" width="360" :open.sync="openSimple">
      <div>
        <h3>V1.0.0 - 20210826</h3>
        <p>初次上线</p>
      </div>
      <mu-button slot="actions" flat color="primary" @click="SimpleDialog"
        >关闭</mu-button
      >
    </mu-dialog>

    <mu-dialog
      title="请输入管理员密码"
      width="360"
      :open.sync="showAdminPsInput"
    >
      <div>
        <input
          class="psInput"
          type="password"
          v-model="adminps"
          @input="AdminPsInput"
        />
      </div>
      <mu-button slot="actions" flat color="primary" @click="AdminPsInputChange"
        >关闭</mu-button
      >
    </mu-dialog>

     <div class="loading" v-if="!isLoadingCompleted">
      <loading />
    </div>
  </div>
</template>

<script>
import searchBox from "./../components/searchBox.vue";
import largeIcon from "./../components/largeIcon.vue";
import squareArea from "./../components/squareArea.vue";
import massaIntermedia from "./../components/massaIntermedia.vue";
import loading from "./../components/loading.vue";
import synthesizeArea from "./../components/synthesizeArea.vue";
export default {
  name: "",
  data() {
    return {
      openSimple: false,
      showAdminPsInput: false,
      TypeSwitchName: "切换为综合版",
      TypeSwitch: true,
      adminps: "",
      isLoadingCompleted: false,
    };
  },
  props: {},
  components: {
    searchBox,
    largeIcon,
    squareArea,
    massaIntermedia,
    loading,
    synthesizeArea,
  },
  created() {
    let TypeSwitch = localStorage.getItem("typeData");
    if (TypeSwitch != undefined) {
      TypeSwitch = TypeSwitch == "true" ? true : false;
      console.log(TypeSwitch, "TypeSwitch");
      this.TypeSwitch = TypeSwitch;
      this.TypeSwitchName = TypeSwitch ? "切换为综合版" : "切换为编程版";
    }
    console.log(TypeSwitch, this.TypeSwitchName, "TypeSwitch");
  },
  mounted() {},
  methods: {
    SimpleDialog() {
      this.openSimple = !this.openSimple;
    },
    AdminPsInputChange() {
      this.showAdminPsInput = !this.showAdminPsInput;
      this.adminps = "";
    },
    TypeSwitchChange() {
      this.TypeSwitch = !this.TypeSwitch;
      this.TypeSwitchName = this.TypeSwitch ? "切换为综合版" : "切换为编程版";
      localStorage.setItem("typeData", this.TypeSwitch);
    },
    AdminPsInput() {
      //  console.log(this.adminps)
      if (this.adminps == 634907) {
        this.showAdminPsInput = false;
      }
    },
    loadImage() {
      console.log(33333);
      this.isLoadingCompleted = true;
    },
  },
};
</script>

<style  scoped>

.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  background: #fff;
  bottom: 0;
  right: 0;
      display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.headerDiv {
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
}
.header {
  color: #fff;

  font-size: 16px;
  font-weight: 500;
  font-family: "黑体";
  padding: 5px 10px;
}
.header:hover {
  background: rgba(255, 255, 255, 0.5);
  color: #000;
}
.bg {
  width: 100%;
  height: 35vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  z-index: -1;
}
.bg img {
  width: 100vw;
}
.search {
  margin-top: -9vh;
}
.psInput {
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #9d9d9d;
}
@media screen and (max-width: 500px) {
  .search {
    margin-top: -19vh;
  }
  .bg {
    align-items: flex-start;
  }
}
</style>