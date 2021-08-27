<template>
  <div class="">
    <div class="headerDiv">
       <div class="header">
        <div @click="TypeSwitchChange">{{TypeSwitchName}}</div>
      </div>
      <div class="header">
        <div @click="SimpleDialog">关于本站</div>
      </div>
      <div class="header">
        <div @click="SimpleDialog">管理员选项</div>
      </div>
    </div>
    <div class="bg">
      <img src="http://api.btstu.cn/sjbz/?lx=fengjing" alt="风景" />
    </div>
    <div class="search">
      <searchBox />
    </div>
    <largeIcon />
    <div>
      <template v-if="TypeSwitch">
        <massaIntermedia />
      </template>
       <template v-else>
        <synthesizeArea/>
      </template>
      <!--  -->
      
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


  </div>
</template>

<script>
import searchBox from "./../components/searchBox.vue";
import largeIcon from "./../components/largeIcon.vue";
import squareArea from "./../components/squareArea.vue";
import massaIntermedia from "./../components/massaIntermedia.vue";

import synthesizeArea from './../components/synthesizeArea.vue'
export default {
  name: "",
  data() {
    return {
      openSimple: false,
      TypeSwitchName:"切换为综合版",
      TypeSwitch:true
    };
  },
  props: {},
  components: {
    searchBox,
    largeIcon,
    squareArea,
    massaIntermedia,

    synthesizeArea
  },
  created(){
    let TypeSwitch =  localStorage.getItem("typeData");
    if(TypeSwitch != undefined){
     
      TypeSwitch =  TypeSwitch == 'true' ?true:false
        console.log(TypeSwitch,"TypeSwitch")
      this.TypeSwitch = TypeSwitch;
      this.TypeSwitchName = TypeSwitch ?"切换为综合版":"切换为编程版"
    }
     console.log(TypeSwitch,this.TypeSwitchName,"TypeSwitch")
  },
  mounted() {},
  methods: {
    SimpleDialog() {
      this.openSimple = !this.openSimple;
    },
    TypeSwitchChange(){
      this.TypeSwitch = !this.TypeSwitch;
      this.TypeSwitchName = this.TypeSwitch?"切换为综合版":"切换为编程版"
      localStorage.setItem('typeData',this.TypeSwitch)
    }

  },
};
</script>

<style  scoped>
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
@media screen and (max-width: 500px) {
  .search {
    margin-top: -19vh;
  }
  .bg {
    align-items: flex-start;
  }
}
</style>