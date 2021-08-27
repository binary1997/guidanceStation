<template>
  <div class="synthesizeArea">
      <div class="synthesizeAreaDiv">
          <div class="item"  v-for="item in synthesizeList" :key="item.name">{{item.name}}</div>
      </div>
  </div>
</template>

<script>
import { synthesizeData } from "./../assets/js/data";
export default {
  name: '',
  data() { 
    return {
        synthesizeList:[]
    }
  },
  props: {

  },
  components:{
  },
  mounted() {
      this.synthesizeList = synthesizeData
  },
  methods:{

  },
 }
</script>

<style  scoped>
.synthesizeArea{
  width: 60vw;
  margin: 5vh auto 2vh auto;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 0 5px -1px #d9d9d9;
  padding: 20px;
 
}
.synthesizeAreaDiv{
     display: flex;
     flex-wrap: wrap;
}   
.item{
    width: 20%;
    text-align: center;
    padding: 10px 0;
    color: #333;
    font-size: 16px;
   

}
.item:hover{
    background:rgba(0, 0, 0, 0.116)
}

@media screen and (max-width: 500px) {
    .synthesizeArea{
        width: 90vw;
    }
    .synthesizeAreaDiv{
          justify-content: space-between;
    }
    .item{
        width: 25vw;
      
    }
}


</style>