<template>
  <div class="largeIcon">
    <template v-for="item in largeIconDataList">
      <div class="itemDiv" @click="openAddr(item.addr)">
        <p>{{ item.name }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import { largeIcon } from "./../assets/js/data.js";

export default {
  name: "largeIcon",
  data() {
    return {
      largeIconDataList: [],
    };
  },
  props: {},
  components: {},
  created() {
    if (localStorage.getItem("largeIcon") == undefined) {
      localStorage.setItem("largeIcon", JSON.stringify(largeIcon));
      this.largeIconDataList = largeIcon;
    } else {
      this.largeIconDataList = JSON.parse(localStorage.getItem("largeIcon"));
      console.log(this.largeIconDataList);
    }
  },
  mounted() {},
  methods: {
    openAddr(addr) {
      window.location.href = addr;
    },
  },
};
</script>

<style  scoped>
.largeIcon {
  width: 60vw;
  margin: 5vh auto 2vh auto;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 0 5px -1px #d9d9d9;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
}
.itemDiv {
  flex: 1;
  margin: 1vw;
}
.itemDiv p {
  width: 4.5vw;
  height: 4.5vw;
  margin: 0 auto;
  border-radius: 50px;
  background: #fff;

  border: 1px solid #2595f5;
  text-align: center;
  line-height: 4.5vw;
  font-size: 15px;
  transition: all 0.2s;
}
.itemDiv p:hover {
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 0 0 5px 1px #2595f5;
}

@media screen and (max-width: 500px) {
  .largeIcon {
    width: 90vw;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .itemDiv {
   
    flex: none;
   
    margin: 0;
  }
  .itemDiv p {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 20px;
    letter-spacing: 1px;
    padding: 5px;
    width: 20vw;
    height: 20vw;
    margin: 10px auto;
    border-radius: 50%;
    background: #fff;
    
    
    border: 1px solid #2595f5;
    text-align: center;
    font-size: 15px;
    transition: all 0.2s;
    word-wrap: break-word
    
  }
}
</style>